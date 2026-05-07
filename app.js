const state = {
  people: [],
  filtered: [],
};

const directory = document.getElementById("directory");
const count = document.getElementById("count");
const status = document.getElementById("status");
const search = document.getElementById("search");
const fileInput = document.getElementById("file-input");
const emptyState = document.getElementById("empty-state");
const loadPublishedButton = document.getElementById("load-published");

fileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const people = file.name.toLowerCase().endsWith(".csv")
      ? parseCSV(text)
      : normalizePeople(JSON.parse(text));
    setPeople(people, `Loaded ${file.name}`);
  } catch (error) {
    status.textContent = "That file could not be read.";
  }
});

loadPublishedButton.addEventListener("click", async () => {
  await loadPublishedData();
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  state.filtered = !query
    ? [...state.people]
    : state.people.filter((person) =>
        [person.name, person.company, person.email, person.phone, person.context, person.linkedInURL]
          .join("\n")
          .toLowerCase()
          .includes(query)
      );

  render();
});

async function loadPublishedData() {
  try {
    const response = await fetch("./people-log-directory.json", { cache: "no-store" });
    if (!response.ok) throw new Error("missing");
    const people = normalizePeople(await response.json());
    setPeople(people, "Loaded published JSON export.");
  } catch {
    status.textContent = "No published directory file is in this repo yet.";
  }
}

function setPeople(people, message) {
  const sorted = [...people].sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  state.people = sorted;
  state.filtered = sorted;
  status.textContent = message;
  render();
}

function render() {
  count.textContent = `${state.filtered.length} ${state.filtered.length === 1 ? "person" : "people"}`;
  directory.innerHTML = "";

  if (!state.filtered.length) {
    directory.append(emptyState.content.cloneNode(true));
    return;
  }

  for (const person of state.filtered) {
    const article = document.createElement("article");
    article.className = "person card";
    article.innerHTML = `
      <div class="person-head">
        <div>
          <h2>${escapeHTML(person.name || "Unnamed person")}</h2>
          ${person.company ? `<p class="subtle">${escapeHTML(person.company)}</p>` : ""}
        </div>
        <span class="badge">${formatDate(person.updatedAt)}</span>
      </div>
      <div class="stack">
        ${person.email ? `<span>${escapeHTML(person.email)}</span>` : ""}
        ${person.phone ? `<span>${escapeHTML(person.phone)}</span>` : ""}
      </div>
      ${person.context ? `<p class="context">${escapeHTML(person.context)}</p>` : ""}
      <div class="links">
        ${person.linkedInURL ? `<a href="${encodeURI(person.linkedInURL)}" target="_blank" rel="noreferrer">LinkedIn</a>` : ""}
      </div>
    `;
    directory.append(article);
  }
}

function normalizePeople(people) {
  if (!Array.isArray(people)) return [];
  return people.map((person) => ({
    id: person.id || `generated-${Math.random().toString(36).slice(2)}`,
    name: person.name || "",
    email: person.email || "",
    phone: person.phone || "",
    company: person.company || "",
    linkedInURL: person.linkedInURL || person.linkedin || "",
    context: person.context || "",
    createdAt: person.createdAt || person.created_at || "",
    updatedAt: person.updatedAt || person.updated_at || "",
  }));
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
  if (!header) return [];

  const keys = header.map((value) => value.trim().toLowerCase());
  return normalizePeople(
    values.map((columns) =>
      Object.fromEntries(keys.map((key, index) => [key, columns[index] || ""]))
    )
  );
}

function formatDate(value) {
  if (!value) return "Recently updated";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently updated";
  return `Updated ${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}`;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

render();
