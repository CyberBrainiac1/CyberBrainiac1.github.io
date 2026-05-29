const defaultHost = "http://servo-control.local";
const storageKey = "servo-control-host";

const hostInput = document.querySelector("#host-input");
const pingButton = document.querySelector("#ping-button");
const saveButton = document.querySelector("#save-button");
const mdnsButton = document.querySelector("#mdns-button");
const apButton = document.querySelector("#ap-button");
const statusTitle = document.querySelector("#status-title");
const statusDetail = document.querySelector("#status-detail");
const statusBadge = document.querySelector("#status-badge");
const angleSlider = document.querySelector("#angle-slider");
const angleReadout = document.querySelector("#angle-readout");
const centerButton = document.querySelector("#center-button");
const stepButtons = [...document.querySelectorAll(".step-button")];

let lastKnownAngle = 90;
let sendTimer = null;
let pollingTimer = null;

function normalizeHost(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return defaultHost;
  }

  const withProtocol = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `http://${trimmedValue}`;

  return withProtocol.replace(/\/+$/, "");
}

function getHost() {
  return normalizeHost(hostInput.value);
}

function setHost(value) {
  hostInput.value = normalizeHost(value);
}

function saveHost() {
  const host = getHost();
  localStorage.setItem(storageKey, host);
  hostInput.value = host;
  showStatus("Saved", `Using ${host}`, "idle");
}

function showStatus(title, detail, tone) {
  statusTitle.textContent = title;
  statusDetail.textContent = detail;
  statusBadge.textContent =
    tone === "online" ? "Online" : tone === "error" ? "Error" : "Idle";
  statusBadge.className = `status-badge status-${tone}`;
}

function updateAngleReadout(angle) {
  lastKnownAngle = Number(angle);
  angleSlider.value = String(lastKnownAngle);
  angleReadout.textContent = `${lastKnownAngle}°`;
}

async function requestJSON(path, options = {}) {
  const response = await fetch(`${getHost()}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }

  return response.json();
}

async function refreshStatus() {
  try {
    const payload = await requestJSON("/api/status");
    updateAngleReadout(payload.angle ?? lastKnownAngle);

    const modeLabel = payload.mode === "ap" ? "access point" : "Wi-Fi";
    showStatus(
      `Connected over ${modeLabel}`,
      `ESP32 is reachable at ${payload.ip || getHost()} and currently set to ${payload.angle}°.`,
      "online"
    );
  } catch (error) {
    showStatus(
      "ESP32 not reachable",
      "Make sure your iPhone is on the same Wi-Fi network as the ESP32, or connect to the ESP32 fallback hotspot.",
      "error"
    );
  }
}

async function sendAngle(angle) {
  const safeAngle = Math.max(0, Math.min(180, Math.round(angle)));
  updateAngleReadout(safeAngle);

  try {
    const payload = await requestJSON("/api/servo", {
      method: "POST",
      body: JSON.stringify({ angle: safeAngle }),
    });

    updateAngleReadout(payload.angle ?? safeAngle);
    showStatus(
      "Angle sent",
      `Servo updated to ${payload.angle ?? safeAngle}°.`,
      "online"
    );
  } catch (error) {
    showStatus(
      "Send failed",
      "The ESP32 did not accept the update. Recheck the board URL and network.",
      "error"
    );
  }
}

function queueAngleSend(angle) {
  updateAngleReadout(angle);
  clearTimeout(sendTimer);
  sendTimer = setTimeout(() => {
    sendAngle(angle);
  }, 90);
}

function nudgeAngle(step) {
  const nextAngle = Math.max(0, Math.min(180, lastKnownAngle + step));
  queueAngleSend(nextAngle);
}

function boot() {
  setHost(localStorage.getItem(storageKey) || defaultHost);
  updateAngleReadout(lastKnownAngle);
  showStatus("Not connected yet", "Enter the ESP32 address, then tap Check.", "idle");

  pingButton.addEventListener("click", refreshStatus);
  saveButton.addEventListener("click", saveHost);
  mdnsButton.addEventListener("click", () => setHost(defaultHost));
  apButton.addEventListener("click", () => setHost("http://192.168.4.1"));
  centerButton.addEventListener("click", () => queueAngleSend(90));

  angleSlider.addEventListener("input", (event) => {
    queueAngleSend(Number(event.currentTarget.value));
  });

  stepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      nudgeAngle(Number(button.dataset.step));
    });
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  refreshStatus();
  pollingTimer = setInterval(refreshStatus, 5000);
}

boot();
