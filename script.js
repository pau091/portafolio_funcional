/* =========================================================
   PAU PIXEL — script.js
   0. PROYECTOS  ← aquí editas tus proyectos (único lugar donde viven)
   1. Contenido editable (contacto, journey, skills, beyond, metas)
   2. Sprites pixel art de Pau Pixel
   3. Traducción ES / EN
   4. Render de secciones
   5. Navegación, reveal, parallax y modal
   ---------------------------------------------------------
   Textos bilingües: { es: "…", en: "…" }.
   Si escribes solo un texto ("…"), se usa igual en ambos idiomas.
   ========================================================= */
document.documentElement.classList.add("js");

/* ---------- 0. PROYECTOS ---------- */
// Campos de cada proyecto:
//   name     Nombre (igual en español e inglés)
//   image    Ruta local a la imagen dentro de assets/images/projects/ (1200×896 px, proporción 4:3)
//   trim     (opcional) % inferior de la imagen que se oculta en pantalla, sin modificar el archivo
//   repo     URL del repositorio de GitHub
//   tech     Tecnologías (no se traducen)
//   summary  Descripción  { es, en }
//   learned  Qué aprendí   { es, en }
const PROJECTS = [
  {
    name: "ACME BANK",
    image: "assets/images/projects/acme-bank.jpg",
    trim: 5,   // oculta el texto pequeño de la esquina inferior de la imagen
    repo: "https://github.com/pau091/EXAMENDATOSMOVILES_ACME_BANK.git",
    tech: ["HTML", "CSS", "JavaScript"],
    summary: {
      es: "El proyecto está enfocado en la simulación de una cuenta de banco para un usuario, donde se evidencia el manejo y la comodidad de su vida financiera.",
      en: "The project focuses on simulating a bank account for a user, showing how they manage their financial life with ease and comfort."
    },
    learned: {
      es: "Entendí la importancia de la comunicación en el trabajo en equipo.",
      en: "I understood the importance of communication in teamwork."
    }
  },
  {
    name: "Control de Horarios de Atención n8n",
    image: "assets/images/projects/control-horarios-n8n.jpg",
    repo: "https://github.com/pau091/proyecto_n8n.git",
    tech: ["n8n", "Telegram", "Google Sheets", "GitHub", "JSON"],
    summary: {
      es: "DeliveryBot es un sistema de automatización basado en n8n que transforma Telegram en una terminal inteligente para la gestión de pedidos de cafetería en entornos institucionales.",
      en: "DeliveryBot is an n8n-based automation system that turns Telegram into a smart terminal for managing cafeteria orders in institutional environments."
    },
    learned: {
      es: "Durante el desarrollo de DeliveryBot aprendí a construir flujos de automatización en n8n conectados a Telegram para crear una interfaz conversacional fluida, utilizar Google Sheets como base de datos dinámica para validar inventario y gestionar estados de pedidos en tiempo real, y estructurar notificaciones automáticas junto con reportes de ventas consolidados para la toma de decisiones.",
      en: "While developing DeliveryBot, I learned to build n8n automation workflows connected to Telegram to create a smooth conversational interface, use Google Sheets as a dynamic database to validate inventory and manage order statuses in real time, and structure automatic notifications along with consolidated sales reports for decision-making."
    }
  },
  {
    name: "Pizzería Don Piccolo",
    image: "assets/images/projects/pizzeria-don-piccolo.jpg",
    repo: "https://github.com/pau091/Pizzer-a_don_Piccolo.git",
    tech: ["MySQL", "MySQL Workbench / DBeaver", "SQL", "Git / GitHub"],
    summary: {
      es: "Diseño e implementación de la base de datos relacional para la gestión de la \"Pizzería Don Piccolo\", abarcando desde la fase conceptual (modelo ER) hasta el desarrollo del script SQL normalizado (hasta 3FN) para administrar clientes, pedidos, pizzas, ingredientes, empleados y entregas.",
      en: "Design and implementation of the relational database for managing \"Pizzería Don Piccolo\", covering everything from the conceptual phase (ER model) to the development of a normalized SQL script (up to 3NF) to manage customers, orders, pizzas, ingredients, employees and deliveries."
    },
    learned: {
      es: "Durante el desarrollo del proyecto aprendí a modelar y normalizar bases de datos relacionales asegurando la integridad referencial mediante claves primarias y foráneas, además de estructurar scripts SQL para la creación de esquemas, vistas, procedimientos almacenados y consultas analíticas para optimizar la gestión operativa de un negocio de restauración.",
      en: "During the project, I learned to model and normalize relational databases, ensuring referential integrity through primary and foreign keys, as well as to structure SQL scripts for creating schemas, views, stored procedures and analytical queries to optimize the operational management of a restaurant business."
    }
  },
  {
    name: "SICA",
    image: "assets/images/projects/sica.jpg",
    repo: "https://github.com/pau091/SICA.git",
    tech: ["Node.js / JavaScript", "Python", "PostgreSQL / MySQL", "HTML", "CSS", "Chart.js", "GitHub"],
    summary: {
      es: "Desarrollo del módulo analítico para el sistema SICA (Sistema Control de Aforo), enfocado en procesar y generar informes periódicos de la Tasa de Ocupación por Hora. El sistema analiza los flujos de entradas y salidas para calcular métricas de ocupación en tiempo real y por franjas horarias, facilitando la toma de decisiones sobre la capacidad instalada y la gestión de picos de aforo.",
      en: "Development of the analytics module for the SICA system (Sistema Control de Aforo, an occupancy control system), focused on processing and generating periodic reports on the Hourly Occupancy Rate. The system analyzes entry and exit flows to calculate occupancy metrics in real time and by time slots, supporting decisions about installed capacity and the management of occupancy peaks."
    },
    learned: {
      es: "Durante la construcción de este módulo aprendí a diseñar algoritmos para el procesamiento analítico de eventos temporales en tiempo real, agregando y segmentando datos por franjas de tiempo específicas para calcular porcentajes de ocupación dinámica, así como a estructurar reportes visuales y optimizar el rendimiento de las consultas en base de datos para manejar altos volúmenes de registros de entrada y salida.",
      en: "While building this module, I learned to design algorithms for the real-time analytical processing of time-based events, aggregating and segmenting data by specific time slots to calculate dynamic occupancy percentages, as well as to structure visual reports and optimize database query performance to handle high volumes of entry and exit records."
    }
  }
];

/* ---------- 1. CONTENIDO EDITABLE ---------- */

// Datos de contacto (botones)
const CONTACT = [
  { label: { es: "Correo", en: "Email" }, href: "mailto:paulinavarroensma@gmail.com" },
  { label: "GitHub",   href: "https://github.com/pau091" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paula-lisseth-navarro-c%C3%A1rdenas-a47960419" },
  { label: "WhatsApp", href: "https://wa.me/573181365555" } // +57 Colombia · 318 136 5555
];

const JOURNEY = [
  { title: { es: "Lógica de programación", en: "Programming logic" },
    text:  { es: "Las bases para pensar como programadora, con PSeInt.", en: "The foundations to think like a programmer, with PSeInt." },
    tags: [{ es: "Lógica", en: "Logic" }, "PSeInt"] },
  { title: { es: "Primeras líneas de código", en: "First lines of code" },
    text:  { es: "Escribir y ejecutar programas propios.", en: "Writing and running my own programs." },
    tags: ["Python"] },
  { title: { es: "La web", en: "The web" },
    text:  { es: "Estructura, estilo e interactividad.", en: "Structure, style and interactivity." },
    tags: ["HTML", "CSS", "JavaScript"] },
  { title: { es: "Datos", en: "Data" },
    text:  { es: "Guardar, consultar y organizar información.", en: "Storing, querying and organizing information." },
    tags: ["SQL", { es: "Bases de datos", en: "Databases" }] },
  { title: { es: "Trabajo con proyectos", en: "Working on projects" },
    text:  { es: "Versionar código y colaborar.", en: "Versioning code and collaborating." },
    tags: ["Git", "GitHub"] },
  { title: { es: "Construir aplicaciones", en: "Building applications" },
    text:  { es: "Unir todo en aplicaciones y usar herramientas de inteligencia artificial.", en: "Bringing it all together in apps and using AI tools." },
    tags: [{ es: "Desarrollo de aplicaciones", en: "App development" }, { es: "IA", en: "AI" }] },
  { title: { es: "Mi formación continúa", en: "My learning continues" },
    text:  { es: "Sigo desarrollando nuevas habilidades.", en: "I keep developing new skills." },
    tags: [{ es: "En curso", en: "In progress" }], current: true }
];

// level: "familiar" | "learning" | "exploring"  — ajústalo a tu nivel real
const SKILLS = [
  { name: "HTML",   level: "familiar", glyph: "</>", desc: { es: "Estructura semántica de páginas web.", en: "Semantic structure for web pages." } },
  { name: "CSS",    level: "familiar", glyph: "#",   desc: { es: "Estilos, layouts y diseño responsive.", en: "Styles, layouts and responsive design." } },
  { name: "Git",    level: "familiar", glyph: "git", desc: { es: "Control de versiones de mis proyectos.", en: "Version control for my projects." } },
  { name: "GitHub", level: "familiar", glyph: "gh",  desc: { es: "Repositorios y trabajo colaborativo.", en: "Repositories and collaboration." } },
  { name: { es: "Herramientas de IA", en: "AI tools" }, level: "learning", glyph: "ai",
    desc: { es: "Cómo integrar la IA en mi forma de construir.", en: "How to bring AI into the way I build." } },
  { name: "JavaScript", level: "learning", glyph: "js", desc: { es: "Interactividad y lógica en la web.", en: "Interactivity and logic on the web." } },
  { name: "SQL",    level: "learning", glyph: "db",  desc: { es: "Consultas y modelado de bases de datos.", en: "Queries and database modeling." } },
  { name: "Python", level: "exploring", glyph: "py", desc: { es: "Lógica, scripts y resolución de problemas.", en: "Logic, scripts and problem solving." } },
  { name: { es: "JavaScript a fondo", en: "JavaScript in depth" }, level: "exploring", glyph: "{ }",
    desc: { es: "Profundizar en el lenguaje y nuevas herramientas.", en: "Going deeper into the language and new tools." } }
];

const LEVELS = {
  familiar:  { title: { es: "Me siento cómoda con", en: "Familiar with" },       note: { es: "Las uso con confianza en mis proyectos.", en: "I use them confidently in my projects." } },
  learning:  { title: { es: "Aprendiendo", en: "Learning" },            note: { es: "Las practico y refuerzo constantemente.", en: "I practice and reinforce them constantly." } },
  exploring: { title: { es: "Explorando ahora", en: "Currently exploring" }, note: { es: "Lo que estoy empezando a descubrir.",     en: "What I'm starting to discover." } }
};

const BEYOND = [
  { title: { es: "Creatividad", en: "Creativity" }, text: { es: "Busco soluciones que además se vean y se sientan bien.", en: "I look for solutions that also look and feel good." } },
  { title: { es: "Diseño de interfaces", en: "Interface design" }, text: { es: "Me importa que lo que construyo sea claro de usar.", en: "I care that what I build is clear to use." } },
  { title: { es: "Comunicación", en: "Communication" }, text: { es: "Explico ideas técnicas de forma sencilla.", en: "I explain technical ideas simply." } },
  { title: { es: "Inglés", en: "English" }, text: { es: "Lo sigo fortaleciendo, porque la tecnología habla inglés.", en: "I keep strengthening it, because tech speaks English." } },
  { title: { es: "Trabajo en equipo", en: "Teamwork" }, text: { es: "Construir con otras personas multiplica lo aprendido.", en: "Building with others multiplies what I learn." } },
  { title: { es: "Resolución de problemas", en: "Problem solving" }, text: { es: "Divido lo difícil en pasos pequeños.", en: "I break hard things into small steps." } },
  { title: { es: "Aprendizaje continuo", en: "Continuous learning" }, text: { es: "Cada proyecto es una oportunidad para aprender algo nuevo.", en: "Every project is a chance to learn something new." } },
  { title: { es: "Curiosidad tecnológica", en: "Tech curiosity" }, text: { es: "Me gusta entender cómo funcionan las cosas.", en: "I like understanding how things work." } },
  { title: { es: "Adaptabilidad", en: "Adaptability" }, text: { es: "Me ajusto a nuevas herramientas y formas de trabajar.", en: "I adapt to new tools and ways of working." } }
];

const GOALS = [
  { when: { es: "Próximo paso", en: "Next step" },
    items: [{ es: "Seguir creciendo como desarrolladora", en: "Keep growing as a developer" },
            { es: "Profundizar en JavaScript y nuevas tecnologías", en: "Go deeper into JavaScript and new technologies" }] },
  { when: { es: "Después", en: "After that" },
    items: [{ es: "Fortalecer mis conocimientos en desarrollo de software", en: "Strengthen my software development skills" },
            { es: "Construir proyectos cada vez más completos", en: "Build more and more complete projects" }] },
  { when: { es: "En el camino", en: "Along the way" },
    items: [{ es: "Seguir aprendiendo sobre inteligencia artificial", en: "Keep learning about artificial intelligence" },
            { es: "Crear soluciones tecnológicas útiles", en: "Create useful tech solutions" },
            { es: "Continuar mi formación profesional", en: "Continue my professional training" }] },
  { when: { es: "Más adelante", en: "Further ahead" },
    items: [{ es: "Desarrollarme en inteligencia artificial o ingeniería de software", en: "Grow into artificial intelligence or software engineering" }] }
];

/* ---------- 2. SPRITES PIXEL ART ---------- */

// Paleta de Pau Pixel (basada en #FFBB94 · #FB9590 · #DC586D · #A33757 · #852E4E · #4C1D3D)
const PALETTE = {
  O: "#2A1323",                         // contorno
  H: "#3A2036", h: "#5C3551",           // cabello largo oscuro
  W: "#FFF5EC", g: "#D9C3D6",           // audífonos / brillo de ojos
  F: "#FFF5EC", y: "#FFBB94",           // flor del cabello
  S: "#FFE3D1", s: "#F8C6B3",           // piel
  E: "#2A1323",                         // ojos (parpadean)
  B: "#FB9590", M: "#DC586D", n: "#F4A99E", // rubor / boca / cuello
  T: "#FFBB94", t: "#FB9590",           // suéter (tono cálido como el de la referencia)
  P: "#852E4E", C: "#FFBB94", L: "#4C1D3D", // laptop
  D: "#FB9590", d: "#DC586D",           // escritorio
  G: "#4C1D3D", Y: "#FFBB94", R: "#DC586D", K: "#4C1D3D", X: "#DC586D"
};

// Personaje base (32×23): cabello largo, audífonos, flor y ojos grandes.
// Cada fila es una cadena; "." = transparente.
const BASE = [
  "..........OOOOOOOOOOOO",
  ".........OWWWWWWWWWWWWO",
  "........OWOOOOOOOOOOOOWO",
  ".......OWOHHHHHHHHHFHHOWO",
  "......OWOHHhhHHHHHFyFHHOWO",
  "......OWHHhHHHHHHHHFHHHHWO",
  "......OWHHHHHHHHHHHHHHHHWO",
  "....OOOOHHHHHHHHHHHHHHHHOOOO",
  "...OWWgOHHHHHHHHHHHHHHHHOgWWO",
  "...OWWgOHHSHHHSHHSHHHSHHOgWWO",
  "...OWWgOHHOOOOSHHSOOOOHHOgWWO",
  "...OWWgOHHSEWESSSSEWESHHOgWWO",
  "...OWWgOHHSEEESSSSEEESHHOgWWO",
  "....OOOOHHSEEESSSSEEESHHOOOO",
  "......OHHHBBSSSSMSSSBBHHHO",
  "......OHHHHsSSSSSSSSsHHHHO",
  "......OHHHHHOsSSSSsOHHHHHO",
  "......OHHHHHHOnnnnOHHHHHHO",
  "......OHHHOTTTTnnTTTTOHHHO",
  "......OHHTTTTTTTTTTTTTTHHO",
  "......OHHTtTTTTTTTTTTtTHHO",
  ".......OHTtTTTTTTTTTTtTHO",
  "........OOOOOOOOOOOOOOOO"
];

const PROPS = {
  laptop: [
    ".PPPPPPPPPPPPPPPPPP",
    ".PPPPPPPPPPPPPPPPPP",
    ".PPPPPPPCPCPPPPPPPP",
    ".PPPPPPPCCCPPPPPPPP",
    ".PPPPPPPPCPPPPPPPPP",
    "SSPPPPPPPPPPPPPPPPSS",
    "LLLLLLLLLLLLLLLLLLLL",
    ".LLLLLLLLLLLLLLLLLL"
  ],
  desk: [
    "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "dddddddddddddddddddddddddddddd"
  ],
  wave: [
    "..OOOO.",
    ".OSSSSO",
    ".OSSSSO",
    ".OSSSSO",
    "..OSSO.",
    "..OTTTO",
    "..OTTTO",
    "..OTTTO",
    "..OTtTO",
    ".OTTTO",
    ".OTTTO",
    "OTTTO",
    "TTTO"
  ],
  magnifier: [
    ".GGGG",
    "GWCWWG",
    "GWWWWG",
    "GWWWWG",
    ".GGGG",
    "....GG",
    ".....SS",
    "TTTTT"
  ],
  pencil: [
    "....RR",
    "...YRR",
    "..YYY",
    ".YYY",
    "KYY",
    "KK"
  ],
  sparkle: [
    "..X",
    ".XXX",
    "XXWXX",
    ".XXX",
    "..X"
  ],
  hands: [
    ".OOOO......OOOO",
    "OSSSSO....OSSSSO",
    "OsSsSO....OsSsSO"
  ]
};

// Cada pose = viewBox + capas [prop, x, y, clase]
const POSES = {
  hero:    { view: "3 0 26 20", layers: [["hands", 8, 17, "prop-hands"]] },   // asomándose en el inicio
  desk:    { view: "0 0 32 28", layers: [["laptop", 6, 18], ["desk", 1, 26]] },
  code:    { view: "0 0 32 26", layers: [["laptop", 6, 18]] },
  wave:    { view: "0 0 34 23", layers: [["wave", 26, 6, "prop-wave"]] },
  inspect: { view: "0 0 34 23", layers: [["magnifier", 26, 14, "prop-float"]] },
  create:  { view: "0 0 34 23", layers: [["pencil", 26, 13, "prop-float"], ["sparkle", 0, 1, "prop-twinkle"], ["sparkle", 1, 15, "prop-twinkle prop-twinkle--late"]] },
  head:    { view: "3 0 26 18", layers: [] }
};

function rowsToRects(rows, ox = 0, oy = 0, palette = PALETTE) {
  // Agrupa píxeles contiguos del mismo color en un solo <rect>
  let out = "";
  rows.forEach((row, r) => {
    if (!row) return;
    const [start, str] = Array.isArray(row) ? row : [0, row];
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      let j = i;
      while (j < str.length && str[j] === ch) j++;
      if (ch !== "." && palette[ch]) {
        const y = oy + r;
        out += `<rect x="${ox + start + i}" y="${y}" width="${j - i + 0.08}" height="1.08" fill="${palette[ch]}" class="px-${ch}" style="--r:${y}"/>`;
      }
      i = j;
    }
  });
  return out;
}

function renderSprite(el) {
  const pose = POSES[el.dataset.pose] || POSES.desk;
  if (pose.sprite) {
    el.innerHTML = `<svg viewBox="${pose.view}" shape-rendering="crispEdges" aria-hidden="true">${rowsToRects(pose.sprite, 0, 0, pose.palette)}${pose.extras || ""}</svg>`;
    return;
  }
  let svg = `<g class="pau__body">${rowsToRects(BASE)}</g>`;
  pose.layers.forEach(([name, x, y, cls = ""]) => {
    svg += `<g class="${cls}">${rowsToRects(PROPS[name], x, y)}</g>`;
  });
  el.innerHTML = `<svg viewBox="${pose.view}" shape-rendering="crispEdges" aria-hidden="true">${svg}</svg>`;
}

/* ---------- 3. TRADUCCIÓN ES / EN ---------- */

// Traducción: los textos fijos viven en index.html (español) y en data-en (inglés).
// Solo los textos que genera JavaScript (botones de tarjetas, modal, menú…).
// Los textos de la página se editan directamente en index.html:
//   - Español: el contenido del elemento.
//   - Inglés:  el atributo data-en="…" del mismo elemento.
const I18N = {
  es: {
    "ui.tech": "Tecnologías:",
    "ui.viewProject": "Ver proyecto",
    "ui.repoGithub": "Repositorio en GitHub",
    "ui.repo": "Repositorio",
    "ui.soon": "pronto",
    "ui.soonTitle": "Enlace pendiente: agrégalo en PROJECTS (script.js)",
    "ui.addShot": "Agrega aquí tu captura",
    "ui.shotAlt": "Captura de",
    "ui.viewDetail": "Ver detalle de",
    "ui.empty": "Aún no hay proyectos. Agrégalos en <code>PROJECTS</code> dentro de script.js.",
    "ui.menuOpen": "Abrir menú",
    "ui.menuClose": "Cerrar menú",
    "ui.langSwitch": "Switch to English"
  },
  en: {
    "ui.tech": "Tech:",
    "ui.viewProject": "View project",
    "ui.repoGithub": "GitHub Repository",
    "ui.repo": "Repository",
    "ui.soon": "soon",
    "ui.soonTitle": "Link pending: add it in PROJECTS (script.js)",
    "ui.addShot": "Add your screenshot here",
    "ui.shotAlt": "Screenshot of",
    "ui.viewDetail": "View details of",
    "ui.empty": "No projects yet. Add them in <code>PROJECTS</code> inside script.js.",
    "ui.menuOpen": "Open menu",
    "ui.menuClose": "Close menu",
    "ui.langSwitch": "Cambiar a español"
  }
};

let lang = "es";
try { lang = localStorage.getItem("pau-lang") === "en" ? "en" : "es"; } catch (e) { /* sin almacenamiento */ }

const t = key => I18N[lang][key] ?? I18N.es[key] ?? key;             // texto fijo
const tx = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.es ?? "") : (v ?? ""); // dato bilingüe

// Guarda el texto en español escrito en index.html (se lee al cargar, así tus cambios siempre se ven)
function captureHtmlTexts() {
  document.querySelectorAll("[data-en]").forEach(el => {
    if (el.dataset.es === undefined) el.dataset.es = el.tagName === "TITLE" ? el.textContent : el.innerHTML;
  });
  document.querySelectorAll("[data-en-aria]").forEach(el => {
    if (el.dataset.esAria === undefined) el.dataset.esAria = el.getAttribute("aria-label") || "";
  });
}

function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en]").forEach(el => {
    const text = lang === "en" ? el.dataset.en : el.dataset.es;
    if (el.tagName === "TITLE") document.title = text;
    else el.innerHTML = text;
  });
  document.querySelectorAll("[data-en-aria]").forEach(el =>
    el.setAttribute("aria-label", lang === "en" ? el.dataset.enAria : el.dataset.esAria));
  const btn = $("#langToggle");
  btn.setAttribute("aria-label", t("ui.langSwitch"));
  btn.querySelectorAll("[data-lang]").forEach(o => o.classList.toggle("is-active", o.dataset.lang === lang));
  const toggle = $("#navToggle");
  toggle.setAttribute("aria-label", t(toggle.getAttribute("aria-expanded") === "true" ? "ui.menuClose" : "ui.menuOpen"));
}

function setLanguage(next) {
  lang = next;
  try { localStorage.setItem("pau-lang", lang); } catch (e) { /* sin almacenamiento */ }
  renderAll();
  document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-visible"));
}

/* ---------- 4. RENDER DE SECCIONES ---------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const hasLink = url => typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
const slug = s => String(s).replace(/\W/g, "");

function renderTimeline() {
  $("#timeline").innerHTML = JOURNEY.map((step, i) => `
    <li class="timeline__item ${step.current ? "is-current" : ""}" data-reveal style="--d:${i * 60}ms">
      <span class="timeline__dot" aria-hidden="true"></span>
      <span class="timeline__num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(tx(step.title))}</h3>
      <p>${esc(tx(step.text))}</p>
      <ul class="chips chips--small">${step.tags.map(tag => `<li>${esc(tx(tag))}</li>`).join("")}</ul>
    </li>`).join("");
}

function renderToolkit() {
  $("#toolkit").innerHTML = Object.entries(LEVELS).map(([key, lvl]) => {
    const items = SKILLS.filter(s => s.level === key);
    if (!items.length) return "";
    return `
      <div class="toolkit__group toolkit__group--${key}" data-reveal>
        <div class="toolkit__head"><h3>${esc(tx(lvl.title))}</h3><p>${esc(tx(lvl.note))}</p></div>
        <ul class="keys">
          ${items.map(s => {
            const id = "k-" + slug(tx(s.name));
            return `
            <li>
              <button class="key" type="button" aria-describedby="${id}">
                <span class="key__glyph" aria-hidden="true">${esc(s.glyph)}</span>
                <span class="key__name">${esc(tx(s.name))}</span>
                <span class="key__desc" id="${id}">${esc(tx(s.desc))}</span>
              </button>
            </li>`;
          }).join("")}
        </ul>
      </div>`;
  }).join("");
}

function projectMedia(p, big = false) {
  if (p.image) {
    // La imagen llena su marco 4:3. `trim` oculta en pantalla el % inferior indicado (el archivo no se modifica).
    const trim = Number(p.trim) || 0;
    return `<div class="media-frame" style="--trim:${trim}">
              <img src="${esc(p.image)}" alt="${t("ui.shotAlt")} ${esc(tx(p.name))}" loading="lazy" class="${trim ? "is-trimmed" : ""}" />
            </div>`;
  }
  return `<div class="media-placeholder ${big ? "media-placeholder--big" : ""}">
            <span class="media-placeholder__icon" aria-hidden="true"></span>
            <span>${t("ui.addShot")}<br><small>assets/images/projects/</small></span>
          </div>`;
}

function linkButton(url, label) {
  return hasLink(url)
    ? `<a class="btn btn--ghost btn--sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
    : `<span class="btn btn--ghost btn--sm is-disabled" aria-disabled="true" title="${t("ui.soonTitle")}">${label} · ${t("ui.soon")}</span>`;
}

function renderProjects() {
  const list = $("#projectList");
  if (!PROJECTS.length) {
    list.innerHTML = `<p class="empty">${t("ui.empty")}</p>`;
    return;
  }
  list.innerHTML = PROJECTS.map((p, i) => `
    <article class="project ${i === 0 ? "project--featured" : ""}" data-reveal style="--d:${i * 80}ms">
      <button class="project__media" type="button" data-open="${i}" aria-label="${t("ui.viewDetail")} ${esc(tx(p.name))}">
        ${projectMedia(p)}
      </button>
      <div class="project__body">
        <h3 class="project__title">${esc(tx(p.name))}</h3>
        <p class="project__summary">${esc(tx(p.summary))}</p>
        <p class="project__tech"><strong>${t("ui.tech")}</strong> ${p.tech.map(esc).join(" · ")}</p>
        <div class="project__actions">
          <button class="btn btn--primary btn--sm" type="button" data-open="${i}">${t("ui.viewProject")}</button>
          ${linkButton(p.repo, t("ui.repoGithub"))}
        </div>
      </div>
    </article>`).join("");
}

function renderBeyond() {
  $("#beyondList").innerHTML = BEYOND.map((b, i) => `
    <li class="beyond__item" data-reveal style="--d:${(i % 3) * 60}ms">
      <h3>${esc(tx(b.title))}</h3><p>${esc(tx(b.text))}</p>
    </li>`).join("");
}

function renderGoals() {
  $("#goalList").innerHTML = GOALS.map((g, i) => `
    <li class="path__step" data-reveal style="--d:${i * 90}ms">
      <span class="path__marker" aria-hidden="true"></span>
      <p class="pixel-tag">${esc(tx(g.when))}</p>
      <ul>${g.items.map(item => `<li>${esc(tx(item))}</li>`).join("")}</ul>
    </li>`).join("");
}

function renderContact() {
  $("#contactLinks").innerHTML = CONTACT.map(c => {
    const external = !c.href.startsWith("mailto:");
    return `<a class="btn btn--contact" href="${esc(c.href)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(tx(c.label))}</a>`;
  }).join("");
}

function renderCubes() {
  // Cubos isométricos con etiquetas de código (inspirados en el boceto)
  document.querySelectorAll(".cube").forEach(cube => {
    const label = esc(cube.dataset.label || "");
    cube.innerHTML = `
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,6 92,28 50,50 8,28" fill="#FFBB94"/>
        <polygon points="8,28 50,50 50,96 8,74" fill="#FB9590"/>
        <polygon points="50,50 92,28 92,74 50,96" fill="#DC586D"/>
        <polyline points="8,28 50,6 92,28" fill="none" stroke="#FFF5EC" stroke-width="3" opacity=".8"/>
        <text x="29" y="68" transform="skewY(28) translate(0 -16)" text-anchor="middle" class="cube__label">${label}</text>
      </svg>`;
  });
}

function renderAll() {
  applyStaticTexts();
  renderTimeline();
  renderToolkit();
  renderProjects();
  renderBeyond();
  renderGoals();
  renderContact();
}

/* ---------- 5. INTERACCIÓN ---------- */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");

  const setOpen = open => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", t(open ? "ui.menuClose" : "ui.menuOpen"));
    menu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  window.matchMedia("(min-width: 900px)").addEventListener("change", () => setOpen(false));

  $("#langToggle").addEventListener("click", () => setLanguage(lang === "es" ? "en" : "es"));

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Link activo según la sección visible
  const links = [...menu.querySelectorAll("a")];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(a => { const s = $(a.getAttribute("href")); if (s) spy.observe(s); });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

function initParallax() {
  if (reduceMotion) return;
  const tokens = document.querySelectorAll(".token[data-depth], .cube[data-depth]");
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      tokens.forEach(tk => tk.style.setProperty("--py", `${(-y * parseFloat(tk.dataset.depth)).toFixed(1)}px`));
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

function initModal() {
  const modal = $("#projectModal");
  const close = () => modal.close();

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-open]");
    if (!trigger) return;
    const p = PROJECTS[Number(trigger.dataset.open)];
    if (!p) return;

    $("#modalMedia").innerHTML = projectMedia(p, true);
    $("#modalTitle").textContent = tx(p.name);
    $("#modalOverview").textContent = tx(p.summary);
    $("#modalLearned").textContent = tx(p.learned);
    $("#modalTech").innerHTML = p.tech.map(x => `<li>${esc(x)}</li>`).join("");
    $("#modalActions").innerHTML = linkButton(p.repo, t("ui.repo"));
    modal.showModal();
  });

  $("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); }); // clic fuera
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  captureHtmlTexts();
  document.querySelectorAll(".pau[data-pose]").forEach(renderSprite);
  renderCubes();
  renderAll();

  initNav();
  initReveal();
  initParallax();
  initModal();
});