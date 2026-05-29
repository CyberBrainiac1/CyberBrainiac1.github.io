const STORAGE_KEY = "peoplelog-v2-entries";
const EMPTY_PHOTO_TEXT = "No photo attached yet.";

const state = {
  entryType: "contact",
  entries: [],
  filtered: [],
  editingId: null,
  photoDataUrl: "",
};

const elements = {
  form: document.getElementById("entry-form"),
  formTitle: document.getElementById("form-title"),
  nameLabel: document.getElementById("name-label"),
  companyLabel: document.getElementById("company-label"),
  contextLabel: document.getElementById("context-label"),
  name: document.getElementById("name"),
  company: document.getElementById("company"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  linkedProject: document.getElementById("linked-project"),
  linkedin: document.getElementById("linkedin"),
  context: document.getElementById("context"),
  emailField: document.getElementById("email-field"),
  phoneField: document.getElementById("phone-field"),
  projectField: document.getElementById("project-field"),
  linkedinField: document.getElementById("linkedin-field"),
  saveEntry: document.getElementById("save-entry"),
  resetForm: document.getElementById("reset-form"),
  status: document.getElementById("status"),
  search: document.getElementById("search"),
  directory: document.getElementById("directory"),
  emptyState: document.getElementById("empty-state"),
  filteredCount: document.getElementById("filtered-count"),
  entryCount: document.getElementById("entry-count"),
  importFile: document.getElementById("import-file"),
  loadPublished: document.getElementById("load-published"),
  exportJSON: document.getElementById("export-json"),
  exportCSV: document.getElementById("export-csv"),
  installState: document.getElementById("install-state"),
  typeContact: document.getElementById("type-contact"),
  typeProject: document.getElementById("type-project"),
  photoInput: document.getElementById("photo-input"),
  clearPhoto: document.getElementById("clear-photo"),
  photoPreview: document.getElementById("photo-preview"),
};

wireEvents();
loadLocalEntries();
renderProjectOptions();
setEntryType("contact");
applyFilter();
updateInstallState();
registerServiceWorker();

function wireEvents() {
  elements.typeContact.addEventListener("click", () => setEntryType("contact"));
  elements.typeProject.addEventListener("click", () => setEntryType("project"));
  elements.form.addEventListener("submit", handleSubmit);
  elements.resetForm.addEventListener("click", resetForm);
  elements.search.addEventListener("input", applyFilter);
  elements.importFile.addEventListener("change", handleImportFile);
  elements.loadPublished.addEventListener("click", loadPublishedSeed);
  elements.exportJSON.addEventListener("click", exportJSON);
  elements.exportCSV.addEventListener("click", exportCSV);
  elements.photoInput.addEventListener("change", handlePhotoSelection);
  elements.clearPhoto.addEventListener("click", clearPhoto);
}

function setEntryType(type) {
  state.entryType = type;
  const isProject = type === "project";

  elements.typeContact.classList.toggle("active", !isProject);
  elements.typeProject.classList.toggle("active", isProject);

  elements.formTitle.textContent = state.editingId
    ? isProject ? "Edit project" : "Edit contact"
    : isProject ? "New project" : "New contact";
  elements.nameLabel.textContent = isProject ? "Project Name" : "Name";
  elements.companyLabel.textContent = isProject ? "Company / Place" : "Company / Role";
  elements.contextLabel.textContent = isProject ? "Project Notes" : "Context";
  elements.name.placeholder = isProject ? "Surgical robotics prototype" : "Avery Chen";
  elements.company.placeholder = isProject ? "Intuitive booth 24" : "Intuitive, Mechanical Engineer";
  elements.saveEntry.textContent = state.editingId
    ? isProject ? "Update project" : "Update contact"
    : isProject ? "Save project" : "Save contact";

  elements.emailField.hidden = isProject;
  elements.phoneField.hidden = isProject;
  elements.projectField.hidden = isProject;
  elements.linkedinField.hidden = isProject;
}

function loadLocalEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state.entries = normalizeEntries(raw ? JSON.parse(raw) : []);
  } catch {
    state.entries = [];
    setStatus("Local data could not be read, so the app started fresh.", true);
  }
}

function persistEntries(message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sortEntries(state.entries)));
  renderProjectOptions();
  applyFilter();
  if (message) {
    setStatus(message, false);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const draft = readFormDraft();
  if (!canSave(draft)) {
    setStatus("Add a name, then include at least one identity detail for contacts.", true);
    return;
  }

  const now = new Date().toISOString();
  const incoming = {
    id: state.editingId || crypto.randomUUID(),
    entryType: state.entryType,
    name: draft.name,
    company: draft.company,
    email: draft.email,
    phone: draft.phone,
    linkedProjectName: draft.linkedProjectName,
    linkedInURL: draft.linkedInURL,
    context: draft.context,
    photoDataUrl: state.photoDataUrl,
    createdAt: now,
    updatedAt: now,
  };

  const result = upsertEntry(incoming);
  persistEntries(result === "updated" ? "Existing entry updated." : "Entry saved locally on this iPhone/browser.");
  resetForm();
}

function readFormDraft() {
  return {
    name: elements.name.value.trim(),
    company: elements.company.value.trim(),
    email: elements.email.value.trim().toLowerCase(),
    phone: elements.phone.value.trim(),
    linkedProjectName: elements.linkedProject.value.trim(),
    linkedInURL: elements.linkedin.value.trim(),
    context: elements.context.value.trim(),
  };
}

function canSave(entry) {
  if (!entry.name) {
    return false;
  }

  if (state.entryType === "project") {
    return true;
  }

  return Boolean(entry.email || entry.phone || entry.linkedInURL || entry.linkedProjectName);
}

function upsertEntry(incoming) {
  const existingIndex = state.entries.findIndex((entry) => matchesIdentity(entry, incoming));

  if (existingIndex === -1) {
    state.entries.unshift(incoming);
    return "created";
  }

  const previous = state.entries[existingIndex];
  state.entries[existingIndex] = {
    ...previous,
    ...incoming,
    id: previous.id,
    createdAt: previous.createdAt || incoming.createdAt,
    photoDataUrl: incoming.photoDataUrl || previous.photoDataUrl || "",
    updatedAt: incoming.updatedAt,
  };
  return "updated";
}

function matchesIdentity(existing, incoming) {
  if (state.editingId) {
    return existing.id === state.editingId;
  }

  if (existing.entryType !== incoming.entryType) {
    return false;
  }

  if (existing.entryType === "project") {
    return normalizeText(existing.name) === normalizeText(incoming.name);
  }

  const existingKeys = identityKeys(existing);
  const incomingKeys = identityKeys(incoming);
  return incomingKeys.some((key) => existingKeys.includes(key));
}

function identityKeys(entry) {
  const keys = [];
  const email = normalizeText(entry.email);
  const phone = normalizePhone(entry.phone);
  const linkedin = normalizeLinkedIn(entry.linkedInURL);
  const name = normalizeText(entry.name);

  if (email) keys.push(`email:${email}`);
  if (phone) keys.push(`phone:${phone}`);
  if (linkedin) keys.push(`linkedin:${linkedin}`);
  if (name) keys.push(`name:${name}`);

  return keys;
}

function renderProjectOptions() {
  const projects = state.entries
    .filter((entry) => entry.entryType === "project")
    .sort((a, b) => a.name.localeCompare(b.name));

  const currentValue = elements.linkedProject.value;
  elements.linkedProject.innerHTML = '<option value="">No linked project</option>';

  for (const project of projects) {
    const option = document.createElement("option");
    option.value = project.name;
    option.textContent = project.name;
    elements.linkedProject.append(option);
  }

  if ([...elements.linkedProject.options].some((option) => option.value === currentValue)) {
    elements.linkedProject.value = currentValue;
  }
}

function applyFilter() {
  const query = elements.search.value.trim().toLowerCase();
  const sorted = sortEntries(state.entries);

  state.filtered = query
    ? sorted.filter((entry) =>
        [
          entry.entryType,
          entry.name,
          entry.company,
          entry.email,
          entry.phone,
          entry.linkedProjectName,
          entry.linkedInURL,
          entry.context,
        ]
          .join("\n")
          .toLowerCase()
          .includes(query)
      )
    : sorted;

  renderDirectory();
  elements.filteredCount.textContent = `${state.filtered.length} showing`;
  elements.entryCount.textContent = `${state.entries.length} saved`;
}

function renderDirectory() {
  elements.directory.innerHTML = "";

  if (!state.filtered.length) {
    elements.directory.append(elements.emptyState.content.cloneNode(true));
    return;
  }

  for (const entry of state.filtered) {
    const article = document.createElement("article");
    article.className = "entry";

    const chips = [
      entry.email ? `<span class="chip">${escapeHTML(entry.email)}</span>` : "",
      entry.phone ? `<span class="chip">${escapeHTML(entry.phone)}</span>` : "",
      entry.company ? `<span class="chip">${escapeHTML(entry.company)}</span>` : "",
      entry.linkedProjectName ? `<span class="chip">Project: ${escapeHTML(entry.linkedProjectName)}</span>` : "",
    ]
      .filter(Boolean)
      .join("");

    article.innerHTML = `
      <div class="entry-head">
        <div class="entry-title">
          <span class="entry-type">${entry.entryType === "project" ? "Project" : "Contact"}</span>
          <h3>${escapeHTML(entry.name || "Untitled")}</h3>
          <p class="meta-stack">${escapeHTML(formatUpdatedAt(entry.updatedAt))}</p>
        </div>
      </div>
      <div class="entry-body">
        <div class="entry-copy">
          <div class="chip-row">${chips}</div>
          ${entry.context ? `<p class="entry-context">${escapeHTML(entry.context)}</p>` : ""}
          <div class="card-actions">
            ${entry.linkedInURL ? `<a class="text-button" href="${escapeAttribute(entry.linkedInURL)}" target="_blank" rel="noreferrer">Open LinkedIn</a>` : ""}
            <button class="text-button" type="button" data-action="edit" data-id="${entry.id}">Edit</button>
            <button class="text-button danger" type="button" data-action="delete" data-id="${entry.id}">Delete</button>
          </div>
        </div>
        ${entry.photoDataUrl ? `<img class="entry-photo" src="${entry.photoDataUrl}" alt="${escapeAttribute(entry.name)}">` : ""}
      </div>
    `;

    elements.directory.append(article);
  }

  for (const button of elements.directory.querySelectorAll("[data-action='edit']")) {
    button.addEventListener("click", () => beginEdit(button.dataset.id));
  }

  for (const button of elements.directory.querySelectorAll("[data-action='delete']")) {
    button.addEventListener("click", () => deleteEntry(button.dataset.id));
  }
}

function beginEdit(entryId) {
  const entry = state.entries.find((item) => item.id === entryId);
  if (!entry) {
    return;
  }

  state.editingId = entry.id;
  setEntryType(entry.entryType);
  elements.name.value = entry.name;
  elements.company.value = entry.company;
  elements.email.value = entry.email;
  elements.phone.value = entry.phone;
  elements.linkedProject.value = entry.linkedProjectName;
  elements.linkedin.value = entry.linkedInURL;
  elements.context.value = entry.context;
  state.photoDataUrl = entry.photoDataUrl || "";
  renderPhotoPreview();
  setStatus(`Loaded ${entry.name} into the form. Saving will update the existing entry.`, false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteEntry(entryId) {
  const entry = state.entries.find((item) => item.id === entryId);
  if (!entry) {
    return;
  }

  const confirmed = window.confirm(`Delete ${entry.name}? This cannot be undone unless you exported a backup.`);
  if (!confirmed) {
    return;
  }

  state.entries = state.entries.filter((item) => item.id !== entryId);
  if (state.editingId === entryId) {
    resetForm();
  }
  persistEntries(`${entry.name} was deleted.`);
}

function resetForm() {
  state.editingId = null;
  state.photoDataUrl = "";
  elements.form.reset();
  renderPhotoPreview();
  setEntryType("contact");
}

async function handleImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const imported = file.name.toLowerCase().endsWith(".csv")
      ? parseCSV(text)
      : normalizeEntries(JSON.parse(text));

    mergeImportedEntries(imported);
    persistEntries(`Imported ${imported.length} entr${imported.length === 1 ? "y" : "ies"} from ${file.name}.`);
  } catch {
    setStatus("That file could not be imported.", true);
  } finally {
    elements.importFile.value = "";
  }
}

async function loadPublishedSeed() {
  try {
    const response = await fetch("./people-log-directory.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("missing");
    }

    const imported = normalizeEntries(await response.json());
    mergeImportedEntries(imported);
    persistEntries(`Loaded ${imported.length} published entr${imported.length === 1 ? "y" : "ies"} into local storage.`);
  } catch {
    setStatus("No published seed file is available right now.", true);
  }
}

function mergeImportedEntries(imported) {
  for (const entry of imported) {
    const previousType = state.entryType;
    state.entryType = entry.entryType;
    upsertEntry(entry);
    state.entryType = previousType;
  }
}

function exportJSON() {
  const content = JSON.stringify(sortEntries(state.entries), null, 2);
  downloadFile("people-log-v2.json", "application/json", content);
  setStatus("JSON backup exported.", false);
}

function exportCSV() {
  const header = [
    "id",
    "entryType",
    "name",
    "email",
    "phone",
    "company",
    "linkedInURL",
    "linkedProjectName",
    "context",
    "photoDataUrl",
    "createdAt",
    "updatedAt",
  ];

  const lines = [
    header.join(","),
    ...sortEntries(state.entries).map((entry) =>
      header
        .map((key) => escapeCSV(entry[key] || ""))
        .join(",")
    ),
  ];

  downloadFile("people-log-v2.csv", "text/csv;charset=utf-8", `${lines.join("\n")}\n`);
  setStatus("CSV backup exported.", false);
}

function downloadFile(fileName, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function handlePhotoSelection(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    state.photoDataUrl = await compressImage(file);
    renderPhotoPreview();
    setStatus("Photo attached.", false);
  } catch {
    setStatus("That photo could not be processed.", true);
  } finally {
    elements.photoInput.value = "";
  }
}

function clearPhoto() {
  state.photoDataUrl = "";
  renderPhotoPreview();
}

function renderPhotoPreview() {
  if (!state.photoDataUrl) {
    elements.photoPreview.classList.add("empty");
    elements.photoPreview.innerHTML = `<span>${EMPTY_PHOTO_TEXT}</span>`;
    return;
  }

  elements.photoPreview.classList.remove("empty");
  elements.photoPreview.innerHTML = `<img src="${state.photoDataUrl}" alt="Attached preview">`;
}

function normalizeEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries
    .map((entry) => ({
      id: entry.id || crypto.randomUUID(),
      entryType: entry.entryType === "project" ? "project" : "contact",
      name: String(entry.name || "").trim(),
      email: String(entry.email || "").trim().toLowerCase(),
      phone: String(entry.phone || "").trim(),
      company: String(entry.company || "").trim(),
      linkedInURL: String(entry.linkedInURL || entry.linkedin || "").trim(),
      linkedProjectName: String(entry.linkedProjectName || entry.linkedproject || entry.project || "").trim(),
      context: String(entry.context || "").trim(),
      photoDataUrl: String(entry.photoDataUrl || entry.photo || "").trim(),
      createdAt: entry.createdAt || entry.created_at || new Date().toISOString(),
      updatedAt: entry.updatedAt || entry.updated_at || entry.createdAt || new Date().toISOString(),
    }))
    .filter((entry) => entry.name);
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];

    if (insideQuotes) {
      if (character === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        insideQuotes = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      insideQuotes = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (character !== "\r") {
      field += character;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...values] = rows;
  if (!header) {
    return [];
  }

  const keys = header.map((value) =>
    value
      .trim()
      .toLowerCase()
      .replaceAll("_", "")
      .replaceAll(" ", "")
  );

  return normalizeEntries(
    values.map((columns) =>
      Object.fromEntries(
        keys.map((key, index) => [key, columns[index] || ""])
      )
    )
  );
}

function sortEntries(entries) {
  return [...entries].sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
}

function formatUpdatedAt(value) {
  if (!value) {
    return "Recently updated";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Recently updated";
  }

  return `Updated ${date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
}

function setStatus(message, isError) {
  elements.status.textContent = message;
  elements.status.classList.toggle("error", Boolean(isError));
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function normalizePhone(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeLinkedIn(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/+$/, "");
}

function escapeCSV(value) {
  const stringValue = String(value ?? "");
  const escaped = stringValue.replaceAll('"', '""');
  return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

function updateInstallState() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (standalone) {
    elements.installState.textContent = "Running from your Home Screen.";
    elements.installState.classList.remove("browser");
    return;
  }

  elements.installState.textContent = "Open in Safari on iPhone, then use Add to Home Screen.";
  elements.installState.classList.add("browser");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxDimension = 1200;
        const scale = Math.min(maxDimension / image.width, maxDimension / image.height, 1);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");

        if (!context) {
          reject(new Error("Canvas unavailable"));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };

      image.onerror = reject;
      image.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
