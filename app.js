/**
 * app.js — Application data and UI logic for Apps Library
 *
 * To add an application, append an entry to the `apps` array below.
 * Fields:
 *   id           {string}    Unique identifier (e.g. "app-001")
 *   name         {string}    Display name
 *   version      {string}    Version string (e.g. "1.2.0")
 *   category     {string}    One of: "Civil" | "CAD" | "Utility" | "Structural" | "Academic"
 *   description  {string}    Short card summary (2 lines max)
 *   details      {string}    Full description shown in modal (no length limit)
 *   features     {string[]}  Bullet-point list of key features for the modal
 *   requirements {string}    System requirements text (OS, RAM, .NET, etc.)
 *   releaseDate  {string}    Release date string, e.g. "March 2026"
 *   thumbnail    {string}    Path to screenshot image, e.g. "assets/app.png"
 *                            Set to "" to show a placeholder
 *   downloadUrl  {string}    Direct download URL or file path
 *                            Set to "" or "#" to show a disabled button
 *   sourceUrl    {string}    (optional) Public GitHub repository URL
 *                            Omit or set to "" to hide the Source Code button
 */

// ── Engineering Tools data ────────────────────────────────────────────────
/**
 * To add a new tool:
 *   1. Add an entry here with a unique toolKey
 *   2. Add the tool's HTML inside #tool-launch-panel in index.html
 *      as <div class="tool-content" id="tool-content-{toolKey}">
 */
const engineeringTools = [
  {
    id: "tool-001",
    name: "Unit Converter",
    version: "1.0.0",
    category: "Utility",
    tags: ["Length", "Area", "Pressure", "Flow Rate", "Force", "Velocity", "Volume"],
    description: "Convert engineering units across 7 categories: length, area, pressure, flow rate, force / load, velocity, and volume. Includes a full reference table for each category.",
    toolKey: "unit-converter",
    icon: "converter",
  },
  {
    id: "tool-002",
    name: "Land Area Converter",
    version: "1.0.0",
    category: "Civil",
    tags: ["Land", "Area", "Ropani", "Bigha", "Nepal", "Survey"],
    description: "Convert land area between Sq.m, Sq.ft, Ropani-Aana-Paisa-Daam, and Bigha-Kattha-Dhur-Kanwa. Covers all 16 conversion paths with real-time results.",
    toolKey: "land-area",
    icon: "land",
  },
  {
    id: "tool-003",
    name: "Level Survey",
    version: "1.0.0",
    category: "Civil",
    tags: ["Survey", "Leveling", "RL", "Chainage", "Profile", "HI Method", "Rise & Fall", "Cross-Section"],
    description: "Differential leveling data entry with HI and Rise & Fall methods. Enter BS/IS/FS staff readings to compute Reduced Levels, verify arithmetic closure, and view longitudinal profile and cross-section charts.",
    toolKey: "level-survey",
    icon: "survey",
  },
];

// ── Design Sheets data ────────────────────────────────────────────────────
const designSheets = [
  {
    id: "ds-001",
    name: "Reservoir Sizing Calculator",
    version: "1.0.0",
    category: "Water Supply",
    tags: ["Water Supply", "Hydraulics", "DWSS Nepal", "Gravity", "Pumping"],
    description: "Sizes storage reservoirs for Gravity and Pumping water supply systems using DWSS Nepal consumption patterns (Hill & Terai). Mass curve analysis, automatic optimum tank recommendation.",
    details: "An in-browser engineering design sheet for sizing water supply reservoirs using the standard DWSS Nepal mass curve method. Supports both Gravity Fed and Pumping systems with multi-shift pump scheduling. Features pre-filled Hill and Terai hourly consumption patterns (editable per hour), real-time mass curve and hourly distribution charts, and printable A4 design report.",
    features: [
      "Hill and Terai DWSS Nepal consumption patterns — pre-filled, fully editable per hour",
      "Gravity system: continuous inflow vs variable hourly demand mass curve analysis",
      "Pumping system: configurable multi-shift pump schedule with overnight shift support",
      "Balancing storage from max–min running balance (DWSS mass curve method)",
      "Dead storage, fire storage, and emergency storage calculations",
      "Recommended standard tank size from commercial series with safety buffer",
      "Mass curve and hourly distribution Canvas charts with HiDPI rendering",
      "Real-time design recommendations and inflow adequacy checks",
      "A4 print / export: landscape page 1 (summary + charts), portrait page 2 (table + recommendations)"
    ],
    requirements: "Modern web browser (Chrome, Firefox, Edge). No installation required.",
    releaseDate: "March 2026",
    platform: "Web",
    framework: "Vanilla JS",
    thumbnail: null,
    screenshots: ["images/gravity1.png", "images/pump1.png", "images/pump2.png"],
    downloadUrl: "reservoir-sizing.html",
    sourceUrl: "",
    isWebTool: true,
  },
  {
    id: "ds-002",
    name: "Pump Selection Calculator",
    version: "1.0.0",
    category: "Water Supply",
    tags: ["Water Supply", "Pump Design", "DWSS Nepal", "Hydraulics", "Headloss", "Power"],
    description: "Sizes submersible pumps for water supply systems — discharge, pipe diameter, Swamee-Jain friction factor, total dynamic head, and power requirements. Printable A4 design sheet.",
    details: "An in-browser engineering design sheet for selecting and sizing submersible pumps for water supply systems following DWSS Nepal standards. Calculates required discharge from daily demand and pumping hours, optimises pipe diameter for target velocity, computes Reynolds number and Darcy-Weisbach headloss using the Swamee-Jain friction factor, and derives total dynamic head and power requirements. Includes a pump specifications data entry section for recording selected pump performance data.",
    features: [
      "Required discharge from daily demand and configured pumping hours",
      "Pipe diameter sizing with velocity optimisation (target 0.6–1.5 m/s)",
      "Reynolds number and Swamee-Jain friction factor calculation",
      "Complete headloss analysis: friction + minor losses",
      "Total dynamic head: static lift + suction head + friction head + residual pressure",
      "Pump power requirement in kW and HP",
      "Pump specification data entry: brand, model, flow, head, power, efficiency",
      "Warning banners for out-of-range velocity or negative heads",
      "A4 portrait print / export with full calculation table"
    ],
    requirements: "Modern web browser (Chrome, Firefox, Edge). No installation required.",
    releaseDate: "March 2026",
    platform: "Web",
    framework: "Vanilla JS",
    thumbnail: null,
    screenshots: ["images/pump1.png", "images/pump2.png"],
    downloadUrl: "pump-selection.html",
    sourceUrl: "",
    isWebTool: true,
  },
];

const apps = [
  {
    id: "app-001",
    name: "AcadTool V2.0",
    version: "1.0.0",
    category: "CAD",
    tags: [".NET 4.8", "AutoCAD", "COM API", "KML/DXF"],
    description: "A Windows desktop utility that extends AutoCAD with specialized tools for civil engineering: layer management, coordinate drafting, EPANET water network visualization, and KML/DXF geospatial conversion.",
    details: "AcadTool V2.0 is a Windows desktop utility that extends AutoCAD with specialized tools for civil engineering and infrastructure design. It connects directly to a running AutoCAD session via COM automation, enabling layer management, coordinate drafting, water distribution network visualization, and geospatial data conversion - all from a lightweight side panel. Designed for civil engineers, CAD operators, surveyors, and water utility professionals, AcadTool V2.0 bridges the gap between raw field and production-ready drawings.",
    features: [
      "Layer management - turn off layers, move objects between layers, delete layers, and export full layer reports to Excel with one click",
      "Calculate and annotate lengths of lines, arcs, and polylines; annotate arc radii with configurable decimal precision and text formatting",
      "Generate parametric coordinate grids with configurable intervals and labels; place survey points, text labels, and polylines from data files",
      "Draw complete EPANET water network layouts in AutoCAD from .INP files - junctions, reservoirs, tanks, pipes, pumps, and valves as intelligent CAD blocks",
      "Overlay EPANET simulation results from .RPT files - display pressure, flow, demand, and elevation per node with auto-generated flow-direction arrows",
      "Convert AutoCAD drawings back to EPANET .INP format using layer-based role assignment, with automatic node snapping and topology validation",
      "Convert KML placemarks to DXF with automatic WGS84 → UTM projection (Zones 44N and 45N); export KML nodes to structured CSV survey data",
      "Connects to AutoCAD 2007–2025 via COM automation with auto-detection"
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\nAutoCAD 2007–2025 (any verticals with COM API)\n4 GB RAM minimum (8 GB recommended for large networks)\n50 MB disk space",
    releaseDate: "March 2026",
    screenshots: ["images/acadtool.jpg"],
    downloadUrl: "https://bit.ly/acadtoolv2",
    sourceUrl:   ""
   },
  {
    id: "app-002",
    name: "Construction Utility",
    version: "1.0.0",
    category: "Civil",
    tags: [".NET 4.8", "SQLite", "WinForms"],
    description: "A Windows desktop tool for estimating construction material quantities and costs - covering Plaster Work, Brick Work, and Plain Cement Concrete (PCC) with configurable material rates and real-time cost breakdowns.",
    details: "Construction Utility is a Windows desktop application designed for civil engineers, quantity surveyors, and construction estimators. It automates material quantity calculations for three common construction activities - plaster work, brick work, and plain cement concrete - based on user-supplied dimensions and mix ratios. All material unit costs (cement, sand, aggregate, bricks, water) are stored in a local SQLite database and can be updated directly from the app, producing instant line-item cost breakdowns without any manual spreadsheet work.",
    features: [
      "Plaster Work estimator: enter structural dimensions (length × breadth × thickness) or total wet volume; automatically computes dry volume (×1.4 factor), cement bags, sand volume, and water volume from a user-defined mix ratio",
      "Brick Work estimator: enter wall dimensions and mortar mix ratio; calculates number of bricks with and without wastage loss, mortar wet/dry volumes, and all constituent material quantities",
      "PCC (Plain Cement Concrete) estimator: accepts separate sand and aggregate ratios; applies ×1.5 dry-volume factor; produces a full material breakdown for cement, sand, and coarse aggregate",
      "Real-time cost analysis: each calculator generates a line-item cost table (Description, Quantity, Unit, Unit Cost, Total Cost) displayed in a DataGridView for instant review",
      "Configurable material rates: cement, sand, aggregate, and brick unit prices - plus brick dimensions, wastage/loss percentage, and output decimal precision - stored in a local SQLite database and editable from a dedicated Materials tab",
      "Two input modes per calculator - Structural Dimensions mode and Total Volume mode - selectable via radio buttons to suit available site data",
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\n50 MB disk space\nNo additional software required",
    releaseDate: "February 2026",
    screenshots: ["images/constructionutility.jpg","images/constructionutility1.jpg","images/constructionutility2.jpg","images/constructionutility3.jpg"],
    downloadUrl: "https://bit.ly/constructionutility",
    sourceUrl:   ""
  },
  {
    id: "app-003",
    name: "Structural Dynamics & Vibration Analysis",
    version: "1.0.1",
    category: "Structural",
    tags: [".NET 4.8", "NPlot", "SDOF", "WinForms"],
    description: "A Windows desktop SDOF vibration analysis tool for structural and earthquake engineering education. Computes and visualizes time-history displacement responses for four vibration cases with interactive plots and tabulated data.",
    details: "Structural Dynamics & Vibration Analysis is a Windows desktop application developed as part of a Masters in Earthquake Engineering at Khwopa Engineering College. It implements closed-form analytical solutions for four Single-Degree-of-Freedom (SDOF) vibration cases: undamped free, damped free, undamped forced, and damped forced vibration. Each module produces an interactive displacement time-history plot and a tabulated numerical output side by side. All input parameters are edited through a PropertyGrid that instantly re-draws the chart on any change. An MDI shell keeps all analysis windows open simultaneously for easy cross-comparison.",
    features: [
      "Four SDOF analysis modules: Undamped Free, Damped Free, Undamped Forced, and Damped Forced Vibration - each with closed-form analytical solutions",
      "Damped Free Vibration Comparison panel: 2×2 grid showing responses at 2%, 5%, 10%, and 20% damping ratios simultaneously for direct visual comparison",
      "Interactive NPlot charts with pan, zoom, anti-aliased rendering, equilibrium reference line, and legend; three-curve display (Transient, Steady-State, Total) on forced vibration modules",
      "PropertyGrid-driven parameter input with instant live chart updates - change any value and the plot redraws immediately",
      "Tabulated displacement data (t, u(t)) in a DataGridView alongside every plot, rounded to 3 decimal places",
      "Built-in HTML theory and derivation browser with governing equations and formula derivations for all four vibration cases.",
      "Chart export to JPEG or BMP."
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\n30 MB disk space\nNo additional software required",
    releaseDate: "2024",
    screenshots: ["images/vibration.jpg","images/vibration1.jpg","images/vibration2.jpg","images/vibration3.jpg","images/vibration4.jpg"],
    downloadUrl: "https://bit.ly/structurevibration",
    sourceUrl:   "https://github.com/SoftwelSanjog/StructuralDynamics_Vibration"
  },
  {
    id: "app-004",
    name: "Land Area Converter",
    version: "1.0.0",
    category: "Utility",
    tags: [".NET 4.8", "WinForms"],
    description: "A Windows desktop utility that converts land area measurements between metric units (Sq.m, Sq.ft) and traditional Nepali-Indian cadastral units (Ropani-Aana-Paisa-Daam and Bigha-Kattha-Dhur-Kanwa).",
    details: "Land Area Converter is a lightweight Windows desktop utility for civil engineers, surveyors, land administrators, and property professionals working in Nepal and northern India. It covers all 16 conversion combinations across four unit systems: Square Metres, Square Feet, Ropani-Aana-Paisa-Daam (RAPD), and Bigha-Kattha-Dhur-Kanwa (BKDK). Select a source and destination unit from the dropdowns and the result updates in real time as you type — no button press required. Traditional multi-part units are displayed and entered as separate sub-unit fields (e.g. 1 Ropani 8 Aana 2 Paisa 1 Daam), so reading and entering cadastral descriptions from land records or field surveys is direct and unambiguous.",
    features: [
      "Converts between all four unit systems - Sq.m, Sq.ft, Ropani-Aana-Paisa-Daam (RAPD), and Bigha-Kattha-Dhur-Kanwa (BKDK) - covering all 16 possible conversion pairs",
      "Real-time conversion",
      "Multi-part sub-unit display: traditional unit results are shown in separate labelled fields (Ropani / Aana / Paisa / Daam and Bigha / Kattha / Dhur / Kanwa) matching the format used in land records",
      "Supports full RAPD and BKDK input: enter each sub-unit independently when converting from traditional units to metric or cross-converting between the two cadastral systems",
      "Conversion factors: 1 Ropani = 508.7371 m², 1 Bigha = 6 772.63 m², 1 Sq.ft = 0.0929 m²; sub-unit hierarchy: 1 Ropani = 16 Aana = 64 Paisa = 256 Daam; 1 Bigha = 20 Kattha = 400 Dhur = 6 400 Kanwa"
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\nNo additional software required\n< 5 MB disk space",
    releaseDate: "March 2026",
    screenshots: ["images/landarea1.jpg","images/landarea2.jpg","images/landarea3.jpg"],
    downloadUrl: "https://bit.ly/landareaconvertor",
    sourceUrl:   ""
  }
];

/* ─────────────────────────────────────────────
   Academic Projects
───────────────────────────────────────────── */
const academicProjects = [
  {
    id: "acad-001",
    name: "Probabilistic Seismic Hazard Assessment of Sankhuwasabha District",
    institution: "Khwopa Engineering College, Bhaktapur",
    degree: "M.E. in Earthquake Engineering",
    releaseDate: "August 2020",
    description: "A PSHA of Sankhuwasabha District, Nepal, covering a 600 km × 600 km region with 1,124 earthquake events (Mw 4.0–8.5, 1255–2020 AD) grouped into 9 areal source zones. Seismicity parameters were derived using the Gutenberg–Richter relation with Stepp (1972) completeness analysis and Reasenberg (1985) declustering, applying the Youngs et al. (1997) attenuation model for the subduction zone. Results yield PGA of 0.54g (rock) / 0.74g (soil) at 10% probability of exceedance in 50 years, and 0.87g (rock) / 1.32g (soil) at 2% in 50 years, with Uniform Hazard Spectra for structural design. A VBA-based PSHA computation module was also developed as part of the study.",
    tags: ["PSHA", "Seismic Hazard", "Nepal", "G-R Relation", "Youngs et al. 1997", "Stepp 1972", "Reasenberg 1985", "UHS", "PGA", "Logic Tree"],
    pdfUrl: "pdfs/Thesis-Sanjog-Final-Dissertation.pdf",
    downloadUrl: "pdfs/Thesis-Sanjog-Final-Dissertation.pdf",
    sourceUrl: "",
    spreadsheetRequest: true
  }
];

/* ─────────────────────────────────────────────
   Analytics (GoatCounter)
───────────────────────────────────────────── */
function trackEvent(path, title) {
  if (typeof window.goatcounter !== "undefined" && window.goatcounter.count) {
    window.goatcounter.count({ path: path, title: title, event: true });
  }
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* ─────────────────────────────────────────────
   Download / Use Counter (Firebase Firestore)
   Collection: counters/{slug} → { count: number }
   Firestore rules needed:
     match /counters/{slug} {
       allow read: if true;
       allow write: if request.auth != null;
     }
───────────────────────────────────────────── */
const downloadCounts = {};   // in-memory cache  { appId: number }

function _fsdb() { return firebase.firestore(); }

async function fetchCount(slug) {
  try {
    const snap = await _fsdb().collection("counters").doc(slug).get();
    if (!snap.exists) return 0;
    const n = snap.data().count;
    return typeof n === "number" ? n : 0;
  } catch { return null; }
}

async function incrementCount(slug) {
  try {
    const ref = _fsdb().collection("counters").doc(slug);
    await ref.set(
      { count: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    );
    const snap = await ref.get();
    return snap.data().count ?? 0;
  } catch { return null; }
}

function setCountDisplay(appId, count, label = "download") {
  const n = count ?? 0;
  downloadCounts[appId] = n;
  const el = document.getElementById(`dlcount-${appId}`);
  if (!el) return;
  el.textContent = `${n.toLocaleString()} ${label}${n !== 1 ? "s" : ""}`;
  el.style.display = "";
}

async function loadAllCounts() {
  await Promise.all(apps.map(async app => {
    if (downloadCounts[app.id] !== undefined) {
      setCountDisplay(app.id, downloadCounts[app.id]);
      return;
    }
    const count = await fetchCount(slugify(app.name));
    setCountDisplay(app.id, count);
  }));
}

async function loadAllToolsCounts() {
  await Promise.all(engineeringTools.map(async tool => {
    if (downloadCounts[tool.id] !== undefined) {
      setCountDisplay(tool.id, downloadCounts[tool.id], "use");
      return;
    }
    const count = await fetchCount(slugify(tool.name));
    setCountDisplay(tool.id, count, "use");
  }));
}

async function loadAllDsCounts() {
  await Promise.all(designSheets.map(async sheet => {
    if (downloadCounts[sheet.id] !== undefined) {
      setCountDisplay(sheet.id, downloadCounts[sheet.id], "use");
      return;
    }
    const count = await fetchCount(slugify(sheet.name));
    setCountDisplay(sheet.id, count, "use");
  }));
}

/* ─────────────────────────────────────────────
   State
───────────────────────────────────────────── */
let activeFilter = "all";
let searchQuery  = "";

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function categoryClass(cat) {
  const map = { Civil: "Civil", CAD: "CAD", Utility: "Utility", Structural: "Structural", "Water Supply": "WaterSupply" };
  return map[cat] ? `cat-${map[cat]}` : "cat-default";
}

function thumbnailHtml(screenshots, name) {
  const imgs = (screenshots && screenshots.length > 0) ? screenshots : [];
  if (imgs.length === 0) {
    return `<div class="card-thumb-placeholder">${placeholderSvg()}</div>`;
  }
  if (imgs.length === 1) {
    return `<img class="card-thumb" src="${escapeHtml(imgs[0])}" alt="${escapeHtml(name)} screenshot" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="card-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  }
  const slides = imgs.map((src, i) =>
    `<img class="card-carousel-slide${i === 0 ? " active" : ""}" src="${escapeHtml(src)}"
          alt="${escapeHtml(name)} screenshot ${i + 1}" loading="lazy">`
  ).join("");
  const dots = imgs.map((_, i) =>
    `<span class="card-carousel-dot${i === 0 ? " active" : ""}"></span>`
  ).join("");
  return `<div class="card-carousel">
    ${slides}
    <button class="card-carousel-prev" aria-label="Previous">&#8249;</button>
    <button class="card-carousel-next" aria-label="Next">&#8250;</button>
    <div class="card-carousel-dots">${dots}</div>
  </div>`;
}

function galleryHtml(screenshots, name) {
  const imgs = (screenshots && screenshots.length > 0) ? screenshots : [];
  if (imgs.length === 0) {
    return `<div class="modal-thumb-placeholder">${placeholderSvg()}</div>`;
  }
  if (imgs.length === 1) {
    return `<img src="${escapeHtml(imgs[0])}" alt="${escapeHtml(name)} screenshot"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="modal-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  }
  const slides = imgs.map((src, i) =>
    `<img class="gallery-slide${i === 0 ? " active" : ""}" src="${escapeHtml(src)}"
          alt="${escapeHtml(name)} screenshot ${i + 1}"
          onerror="this.style.opacity='0'">`
  ).join("");
  const dots = imgs.map((_, i) =>
    `<button class="gallery-dot${i === 0 ? " active" : ""}" data-idx="${i}" aria-label="Screenshot ${i + 1}"></button>`
  ).join("");
  return `
    <div class="gallery">
      <div class="gallery-slides">${slides}</div>
      <button class="gallery-prev" aria-label="Previous">&#8249;</button>
      <button class="gallery-next" aria-label="Next">&#8250;</button>
      <div class="gallery-dots">${dots}</div>
    </div>`;
}

function wireGallery(container) {
  const gallery = container.querySelector(".gallery");
  if (!gallery) return;
  const slides = gallery.querySelectorAll(".gallery-slide");
  const dots   = gallery.querySelectorAll(".gallery-dot");
  let current  = 0;

  function goTo(idx) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  gallery.querySelector(".gallery-prev").addEventListener("click", () => goTo(current - 1));
  gallery.querySelector(".gallery-next").addEventListener("click", () => goTo(current + 1));
  dots.forEach(dot => dot.addEventListener("click", () => goTo(+dot.dataset.idx)));
}

function placeholderSvg() {
  return `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#b0bec8" stroke-width="2"/>
    <path d="M4 30l10-10 8 8 6-6 16 14" stroke="#b0bec8" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="16" cy="19" r="3" stroke="#b0bec8" stroke-width="2"/>
  </svg>`;
}

function downloadBtnHtml(url, isWebTool) {
  if (isWebTool && url) {
    return `<a href="${escapeHtml(url)}" class="btn-download" style="text-decoration:none;">
      <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5.854 8.803a.5.5 0 10-.708-.707L4.5 10.743V7.5a.5.5 0 00-1 0v3.243l-.646-.647a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l1.5-1.5zM8 1a.5.5 0 01.5.5v7.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L7.5 9.293V1.5A.5.5 0 018 1z"/></svg>
      Launch Tool
    </a>`;
  }
  const isDisabled = !url || url === "#";
  const cls = isDisabled ? "btn-download disabled" : "btn-download";
  const label = isDisabled ? "Coming Soon" : "Download";
  const dataAttr = isDisabled ? "" : `data-dlurl="${escapeHtml(url)}"`;
  return `<button class="${cls}" ${dataAttr} ${isDisabled ? "disabled" : ""}>
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/>
    </svg>
    ${label}
  </button>`;
}

/* ─────────────────────────────────────────────
   Card Carousel (auto-play)
───────────────────────────────────────────── */
function wireCardCarousels() {
  document.querySelectorAll(".card-carousel").forEach(carousel => {
    const slides = carousel.querySelectorAll(".card-carousel-slide");
    const dots   = carousel.querySelectorAll(".card-carousel-dot");
    if (slides.length < 2) return;
    let current = 0;

    function goTo(idx) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }

    carousel.querySelector(".card-carousel-prev").addEventListener("click", e => {
      e.stopPropagation();
      goTo(current - 1);
    });
    carousel.querySelector(".card-carousel-next").addEventListener("click", e => {
      e.stopPropagation();
      goTo(current + 1);
    });
  });
}

/* ─────────────────────────────────────────────
   Card Render
───────────────────────────────────────────── */
function getFilteredApps() {
  return apps.filter(app => {
    if (app.category === "Academic") return false;
    const matchCat    = activeFilter === "all" || app.category === activeFilter;
    const matchSearch = app.name.toLowerCase().includes(searchQuery) ||
                        app.description.toLowerCase().includes(searchQuery) ||
                        app.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
}

function showPdfViewer(project) {
  document.getElementById("academic-section").style.display    = "none";
  document.getElementById("pdf-viewer-section").style.display = "flex";
  document.getElementById("pdf-viewer-title").textContent     = project.name;
  document.getElementById("pdf-viewer-meta").textContent      =
    [project.degree, project.institution, project.releaseDate].filter(Boolean).join("  ·  ");
  document.getElementById("pdf-iframe").src                   = project.pdfUrl;
  const dl = document.getElementById("pdf-download-btn");
  dl.href = project.downloadUrl || project.pdfUrl;
}

function showAcademicGrid() {
  document.getElementById("pdf-viewer-section").style.display = "none";
  document.getElementById("academic-section").style.display   = "flex";
  document.getElementById("pdf-iframe").src = "";
}

function renderAcademic() {
  const grid = document.getElementById("academic-grid");

  if (!academicProjects.length) {
    grid.innerHTML = `<p style="color:#8b949e; padding:24px; font-size:14px;">No academic projects added yet.</p>`;
    return;
  }

  grid.innerHTML = academicProjects.map(p => `
    <div class="academic-card" data-acad-id="${escapeHtml(p.id)}">
      <div class="academic-card-header">
        <div class="academic-card-title">${escapeHtml(p.name)}</div>
        <div class="academic-card-meta">
          ${p.degree     ? `<span>${escapeHtml(p.degree)}</span>`      : ""}
          ${p.institution ? `<span>${escapeHtml(p.institution)}</span>` : ""}
          ${p.releaseDate ? `<span>${escapeHtml(p.releaseDate)}</span>` : ""}
        </div>
      </div>
      <div class="academic-card-body">
        <p class="academic-card-abstract">${escapeHtml(p.description)}</p>
        ${p.tags && p.tags.length ? `<div class="academic-card-tags">${p.tags.map(t => `<span class="academic-card-tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="academic-card-footer">
        ${p.pdfUrl ? `<button class="btn-academic-view btn-view-pdf" data-acad-id="${escapeHtml(p.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/></svg>
          View Report
        </button>` : ""}
        ${p.downloadUrl ? `<a href="${escapeHtml(p.downloadUrl)}" download class="btn-academic-source">
          <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/><path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/></svg>
          Download
        </a>` : ""}
        ${p.spreadsheetRequest ? `<button class="btn-academic-source btn-req-spreadsheet" data-acad-id="${escapeHtml(p.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M14 4.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5zm-3 0A1.5 1.5 0 019.5 3V1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h-2z"/><path d="M8.646 6.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 9H5.5a.5.5 0 010-1h4.793L8.646 7.354a.5.5 0 010-.708z"/></svg>
          Request Spreadsheet
        </button>` : ""}
      </div>
    </div>
  `).join("");

  // Wire up view buttons
  document.querySelectorAll(".btn-view-pdf").forEach(btn => {
    btn.addEventListener("click", () => {
      const proj = academicProjects.find(p => p.id === btn.dataset.acadId);
      if (proj) showPdfViewer(proj);
    });
  });

  // Wire up spreadsheet request buttons
  document.querySelectorAll(".btn-req-spreadsheet").forEach(btn => {
    btn.addEventListener("click", () => showSpreadsheetRequest());
  });
}

function showSpreadsheetRequest() {
  // Pre-fill from Firebase auth if logged in
  const user = window.getAuthUser ? window.getAuthUser() : null;
  if (user) {
    const nameEl  = document.getElementById("sr-name");
    const emailEl = document.getElementById("sr-email");
    if (!nameEl.value)  nameEl.value  = user.displayName || "";
    if (!emailEl.value) emailEl.value = user.email || "";
  }
  document.getElementById("sr-error").style.display   = "none";
  document.getElementById("sr-success").style.display = "none";
  document.getElementById("spreadsheet-overlay").style.display = "flex";
}
window.showSpreadsheetRequest = showSpreadsheetRequest;

function hideSpreadsheetRequest() {
  document.getElementById("spreadsheet-overlay").style.display = "none";
}
window.hideSpreadsheetRequest = hideSpreadsheetRequest;

async function submitSpreadsheetRequest(e) {
  e.preventDefault();
  const errEl  = document.getElementById("sr-error");
  const sucEl  = document.getElementById("sr-success");
  const btn    = document.getElementById("sr-btn");
  errEl.style.display = "none";
  sucEl.style.display = "none";

  const FORMSPREE_ID = "xlgplqjr";
  const payload = {
    _subject:    "PSHA Spreadsheet Request",
    name:        document.getElementById("sr-name").value.trim(),
    email:       document.getElementById("sr-email").value.trim(),
    institution: document.getElementById("sr-institution").value.trim(),
    purpose:     document.getElementById("sr-purpose").value.trim(),
    type:        "spreadsheet-request"
  };

  btn.disabled    = true;
  btn.textContent = "Sending…";
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method:  "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body:    JSON.stringify(payload)
    });
    if (res.ok) {
      sucEl.textContent   = "Request sent! You'll receive the spreadsheet at your email shortly.";
      sucEl.style.display = "block";
      document.getElementById("form-spreadsheet-req").reset();
    } else {
      throw new Error("Server error");
    }
  } catch {
    errEl.textContent   = "Failed to send. Please try again or email directly.";
    errEl.style.display = "block";
  } finally {
    btn.disabled    = false;
    btn.textContent = "Send Request";
  }
}
window.submitSpreadsheetRequest = submitSpreadsheetRequest;

function renderCards() {
  const grid       = document.getElementById("card-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl    = document.getElementById("result-count");
  const filtered   = getFilteredApps();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "flex";
    countEl.textContent = "0 results";
    return;
  }

  emptyState.style.display = "none";
  countEl.textContent = filtered.length === apps.length
    ? `${apps.length} application${apps.length !== 1 ? "s" : ""}`
    : `${filtered.length} of ${apps.length}`;

  grid.innerHTML = filtered.map(app => `
    <article class="app-card cat-accent-${escapeHtml(app.category)}" data-id="${escapeHtml(app.id)}">
      <div class="card-name-header">
        <span class="card-name">${escapeHtml(app.name)}</span>
        <span class="card-version">v${escapeHtml(app.version)}</span>
      </div>
      <div class="card-body">
        <span class="card-category ${categoryClass(app.category)}">${escapeHtml(app.category)}</span>
        <p class="card-desc">${escapeHtml(app.description)}</p>
        ${thumbnailHtml(app.screenshots, app.name)}
      </div>
      <div class="card-footer">
        <button class="btn-details" data-id="${escapeHtml(app.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/>
            <path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          View Details
        </button>
        ${app.sourceUrl ? `<a href="${escapeHtml(app.sourceUrl)}" target="_blank" rel="noopener" class="btn-source card-source-btn">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          Source
        </a>` : ""}
        ${downloadBtnHtml(app.downloadUrl, app.isWebTool)}
      </div>
      <div class="dl-count-row" id="dlcount-${escapeHtml(app.id)}" style="display:none"></div>
      <div class="card-stars" id="stars-${escapeHtml(app.id)}"></div>
    </article>
  `).join("");

  // Wire up "View Details" buttons after rendering
  grid.querySelectorAll(".btn-details[data-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const app = apps.find(a => a.id === btn.dataset.id);
      if (app) trackEvent(`details/${slugify(app.name)}`, `Details: ${app.name}`);
      openModal(btn.dataset.id);
    });
  });

  // Wire up card Download buttons — require auth before downloading
  grid.querySelectorAll(".app-card").forEach(card => {
    const btn = card.querySelector(".btn-download:not(.disabled)");
    if (!btn) return;
    const app = apps.find(a => a.id === card.dataset.id);
    if (!app) return;
    btn.addEventListener("click", () => {
      window.requireAuth(async () => {
        window.open(app.downloadUrl, "_blank", "noopener");
        trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
        const newCount = await incrementCount(slugify(app.name));
        if (newCount !== null) setCountDisplay(app.id, newCount);
      });
    });
  });

  // Wire up card auto-carousels
  wireCardCarousels();

  // Fetch and display current counts (non-blocking)
  loadAllCounts();

  // Load star ratings for all cards (non-blocking)
  if (typeof window.loadAllStars === "function") window.loadAllStars(filtered);
}

function updateCounts() {
  const softwareApps = apps.filter(a => a.category !== "Academic");
  const categories   = ["Civil", "CAD", "Utility", "Structural"];

  // Sidebar shim badges (hidden, kept for compatibility)
  const allShim = document.getElementById("count-all");
  if (allShim) allShim.textContent = softwareApps.length;
  categories.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = softwareApps.filter(a => a.category === cat).length;
  });

  // Visible filter pill badges on the apps page
  const fpAll = document.getElementById("fp-count-all");
  if (fpAll) fpAll.textContent = softwareApps.length;
  const pillMap = { Civil: "civil", CAD: "cad", Utility: "utility", Structural: "structural" };
  categories.forEach(cat => {
    const el = document.getElementById(`fp-count-${pillMap[cat]}`);
    if (el) el.textContent = softwareApps.filter(a => a.category === cat).length;
  });

  // Stats bar
  const totalEl = document.getElementById("stat-total");
  const catsEl  = document.getElementById("stat-cats");
  if (totalEl) totalEl.textContent = softwareApps.length;
  if (catsEl) {
    const cats = new Set(softwareApps.map(a => a.category));
    catsEl.textContent = cats.size;
  }
}

function updateSectionTitle() {
  const el = document.getElementById("section-title");
  el.textContent = activeFilter === "all" ? "All Applications" : activeFilter + " Applications";
}

/* ─────────────────────────────────────────────
   Design Sheets
───────────────────────────────────────────── */
function renderDesignSheets() {
  const grid    = document.getElementById("ds-card-grid");
  const countEl = document.getElementById("ds-result-count");
  if (!grid) return;

  countEl.textContent = `${designSheets.length} design sheet${designSheets.length !== 1 ? "s" : ""}`;

  grid.innerHTML = designSheets.map(sheet => `
    <article class="app-card cat-accent-${escapeHtml(sheet.category.replace(/\s+/g, ""))}" data-id="${escapeHtml(sheet.id)}">
      <div class="card-name-header">
        <span class="card-name">${escapeHtml(sheet.name)}</span>
        <span class="card-version">v${escapeHtml(sheet.version)}</span>
      </div>
      <div class="card-body">
        <span class="card-category ${categoryClass(sheet.category)}">${escapeHtml(sheet.category)}</span>
        <p class="card-desc">${escapeHtml(sheet.description)}</p>
        ${thumbnailHtml(sheet.screenshots, sheet.name)}
      </div>
      <div class="card-footer">
        <button class="btn-details" data-id="${escapeHtml(sheet.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/>
            <path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          View Details
        </button>
        ${downloadBtnHtml(sheet.downloadUrl, sheet.isWebTool)}
      </div>
      <div class="dl-count-row" id="dlcount-${escapeHtml(sheet.id)}" style="display:none"></div>
      <div class="card-stars" id="stars-${escapeHtml(sheet.id)}"></div>
    </article>
  `).join("");

  // Wire "View Details" buttons
  grid.querySelectorAll(".btn-details[data-id]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });

  // Wire "Launch Tool" clicks — open in full-screen modal
  grid.querySelectorAll(".app-card").forEach(card => {
    const btn = card.querySelector(".btn-download");
    if (!btn) return;
    const sheet = designSheets.find(s => s.id === card.dataset.id);
    if (!sheet) return;
    btn.addEventListener("click", e => {
      e.preventDefault();
      openDsModal(sheet);
    });
  });

  // Wire carousels
  wireCardCarousels();

  // Load use counts and star ratings (non-blocking)
  loadAllDsCounts();
  if (typeof window.loadAllStars === "function") window.loadAllStars(designSheets);
}

/* ─────────────────────────────────────────────
   Engineering Tools
───────────────────────────────────────────── */
function toolIconSvg(icon) {
  const icons = {
    converter: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--main-color)"><path d="M8 3H5a2 2 0 00-2 2v3"/><path d="M21 3h-3"/><path d="M21 12v3a2 2 0 01-2 2h-3"/><path d="M3 12v3"/><path d="M8 21H5a2 2 0 01-2-2v-3"/><line x1="9" y1="12" x2="15" y2="12"/><polyline points="12 9 15 12 12 15"/></svg>`,
    land: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--main-color)"><polygon points="3 20 9 4 15 14 19 9 21 20 3 20"/><line x1="3" y1="20" x2="21" y2="20"/></svg>`,
    survey: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--main-color)"><polyline points="3 18 7 10 11 14 15 7 21 18"/><line x1="3" y1="18" x2="21" y2="18"/><line x1="7" y1="18" x2="7" y2="20"/><line x1="15" y1="18" x2="15" y2="20"/><circle cx="7" cy="10" r="1" fill="currentColor"/><circle cx="11" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="7" r="1" fill="currentColor"/></svg>`,
  };
  return icons[icon] || `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--main-color)"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
}

function renderTools() {
  const grid    = document.getElementById("tools-card-grid");
  const countEl = document.getElementById("tools-result-count");
  if (!grid) return;

  if (countEl) countEl.textContent = `${engineeringTools.length} tool${engineeringTools.length !== 1 ? "s" : ""}`;

  grid.innerHTML = engineeringTools.map(tool => `
    <article class="app-card tool-card cat-accent-${escapeHtml(tool.category)}" data-tool="${escapeHtml(tool.toolKey)}">
      <div class="tool-card-icon">
        ${toolIconSvg(tool.icon)}
      </div>
      <div class="card-name-header">
        <span class="card-name">${escapeHtml(tool.name)}</span>
        <span class="card-version">v${escapeHtml(tool.version)}</span>
      </div>
      <div class="card-body">
        <span class="card-category ${categoryClass(tool.category)}">${escapeHtml(tool.category)}</span>
        <p class="card-desc">${escapeHtml(tool.description)}</p>
        ${tool.tags && tool.tags.length ? `<div class="card-tags">${tool.tags.map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="card-footer">
        <button class="btn-launch" data-tool="${escapeHtml(tool.toolKey)}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Launch Tool
        </button>
      </div>
      <div class="dl-count-row" id="dlcount-${escapeHtml(tool.id)}" style="display:none"></div>
      <div class="card-stars" id="stars-${escapeHtml(tool.id)}"></div>
    </article>
  `).join("");

  grid.querySelectorAll(".btn-launch").forEach(btn => {
    btn.addEventListener("click", () => launchTool(btn.dataset.tool));
  });

  // Load use counts and star ratings (non-blocking)
  loadAllToolsCounts();
  if (typeof window.loadAllStars === "function") window.loadAllStars(engineeringTools);
}

function launchTool(toolKey) {
  // Level Survey uses its own full-screen modal — bypass the generic tool modal
  if (toolKey === "level-survey") {
    if (typeof window.openLevelSurveyModal === "function") window.openLevelSurveyModal();
    const tool = engineeringTools.find(t => t.toolKey === toolKey);
    if (tool) {
      trackEvent(`launch/${slugify(tool.name)}`, `Launch: ${tool.name}`);
      incrementCount(slugify(tool.name)).then(() => {});
    }
    return;
  }

  const overlay = document.getElementById("tool-modal-overlay");
  if (!overlay) return;
  const tool = engineeringTools.find(t => t.toolKey === toolKey);
  if (!tool) return;

  // Populate modal header
  const nameEl    = document.getElementById("tool-modal-name");
  const verEl     = document.getElementById("tool-modal-version");
  const catEl     = document.getElementById("tool-modal-category");
  if (nameEl) nameEl.textContent = tool.name;
  if (verEl)  verEl.textContent  = `v${tool.version}`;
  if (catEl)  { catEl.textContent = tool.category; catEl.className = `modal-category ${categoryClass(tool.category)}`; }

  // Show the tool content
  document.querySelectorAll("#tool-modal-overlay .tool-content").forEach(el => el.style.display = "none");
  const content = document.getElementById(`tool-content-${toolKey}`);
  if (content) content.style.display = "";

  // Show use count in footer if cached
  const dlCountEl = document.getElementById("tool-modal-dlcount");
  if (dlCountEl) {
    const n = downloadCounts[tool.id];
    dlCountEl.textContent = typeof n === "number" ? `${n.toLocaleString()} use${n !== 1 ? "s" : ""}` : "";
  }

  // Open modal
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  // Track launch + increment counter
  trackEvent(`launch/${slugify(tool.name)}`, `Launch: ${tool.name}`);
  incrementCount(slugify(tool.name)).then(n => {
    if (n !== null) {
      setCountDisplay(tool.id, n, "use");
      if (dlCountEl) dlCountEl.textContent = `${n.toLocaleString()} use${n !== 1 ? "s" : ""}`;
    }
  });
}

function closeToolModal() {
  const overlay = document.getElementById("tool-modal-overlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ─────────────────────────────────────────────
   Design Sheet Full-Screen Modal
───────────────────────────────────────────── */
function openDsModal(sheet) {
  const overlay  = document.getElementById("ds-modal-overlay");
  const frame    = document.getElementById("ds-frame");
  const loading  = document.getElementById("ds-loading");
  if (!overlay || !frame) return;

  document.getElementById("ds-modal-name").textContent = sheet.name;
  document.getElementById("ds-modal-ver").textContent  = `v${sheet.version}`;
  document.getElementById("ds-modal-cat").textContent  = sheet.category;

  // Only reload iframe when switching to a different sheet
  const targetSrc = sheet.downloadUrl;
  const alreadyLoaded = frame.dataset.loadedSrc === targetSrc;

  if (!alreadyLoaded) {
    // Show spinner, hide when iframe finishes loading
    if (loading) loading.classList.remove("hidden");
    frame.onload = () => { if (loading) loading.classList.add("hidden"); };
    frame.src = targetSrc;
    frame.dataset.loadedSrc = targetSrc;
  } else {
    // Already loaded — hide spinner immediately
    if (loading) loading.classList.add("hidden");
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("ds-modal-close").focus();

  trackEvent(`launch/${slugify(sheet.name)}`, `Launch: ${sheet.name}`);
  incrementCount(slugify(sheet.name)).then(n => {
    if (n !== null) setCountDisplay(sheet.id, n, "use");
  });
}

function closeDsModal() {
  const overlay = document.getElementById("ds-modal-overlay");
  // Keep iframe src intact so re-opening the same sheet is instant
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ─────────────────────────────────────────────
   Modal
───────────────────────────────────────────── */
function openModal(appId) {
  const app = apps.find(a => a.id === appId) || designSheets.find(a => a.id === appId);
  if (!app) return;

  // Header
  document.getElementById("modal-app-name").textContent = app.name;
  document.getElementById("modal-version").textContent  = `v${app.version}`;

  const catEl = document.getElementById("modal-category");
  catEl.textContent  = app.category;
  catEl.className    = `modal-category ${categoryClass(app.category)}`;

  // Screenshots gallery
  const thumbWrap = document.getElementById("modal-thumb-wrap");
  thumbWrap.innerHTML = galleryHtml(app.screenshots, app.name);
  wireGallery(thumbWrap);

  // About
  document.getElementById("modal-desc").textContent = app.details || app.description;

  // Features
  const featSection = document.getElementById("modal-features-section");
  const featList    = document.getElementById("modal-features");
  if (app.features && app.features.length > 0) {
    featList.innerHTML = app.features.map(f => `<li>${escapeHtml(f)}</li>`).join("");
    featSection.style.display = "";
  } else {
    featSection.style.display = "none";
  }

  // Requirements
  const reqSection = document.getElementById("modal-req-section");
  const reqEl      = document.getElementById("modal-req");
  if (app.requirements && app.requirements.trim() !== "") {
    reqEl.innerHTML = escapeHtml(app.requirements).replace(/\n/g, "<br>");
    reqSection.style.display = "";
  } else {
    reqSection.style.display = "none";
  }

  // Meta row
  const metaEl = document.getElementById("modal-meta");
  const metaItems = [];
  if (app.releaseDate) metaItems.push({ label: "Released",  value: app.releaseDate });
  if (app.version)     metaItems.push({ label: "Version",   value: app.version });
  if (app.category)    metaItems.push({ label: "Category",  value: app.category });
  const cachedCount = downloadCounts[app.id];
  if (typeof cachedCount === "number") {
    metaItems.push({ label: "Downloads", value: cachedCount.toLocaleString() });
  }
  metaEl.innerHTML = metaItems.map(m => `
    <div class="modal-meta-item">
      <span class="modal-meta-label">${escapeHtml(m.label)}</span>
      <span class="modal-meta-value">${escapeHtml(m.value)}</span>
    </div>`).join("");

  // Source Code button in footer
  const srcBtn = document.getElementById("modal-source-btn");
  if (srcBtn) {
    if (app.sourceUrl) {
      srcBtn.href = app.sourceUrl;
      srcBtn.style.display = "";
    } else {
      srcBtn.style.display = "none";
    }
  }

  // Download button in footer
  const modalDlWrap = document.getElementById("modal-download-btn");
  modalDlWrap.innerHTML = downloadBtnHtml(app.downloadUrl, app.isWebTool);
  const modalDlBtn = modalDlWrap.querySelector(".btn-download:not(.disabled)");
  if (modalDlBtn) {
    const isDs = designSheets.some(s => s.id === app.id);
    modalDlBtn.addEventListener("click", async e => {
      if (isDs) {
        e.preventDefault();
        closeModal();
        openDsModal(app);
      } else {
        window.requireAuth(async () => {
          window.open(app.downloadUrl, "_blank", "noopener");
          trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
          const newCount = await incrementCount(slugify(app.name));
          if (newCount !== null) setCountDisplay(app.id, newCount);
        });
      }
    });
  }

  // Load ratings for this app in modal
  if (typeof window.openModalStars === "function") window.openModalStars(app.id);

  // Show modal
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ─────────────────────────────────────────────
   Event Wiring
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

  // ── Mobile sidebar drawer ────────────────────────────────────────────────
  const sidebar        = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const hamburgerBtn   = document.getElementById("hamburger-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("open");
    if (hamburgerBtn) hamburgerBtn.classList.add("open");
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
    if (hamburgerBtn) hamburgerBtn.classList.remove("open");
  }

  if (hamburgerBtn)    hamburgerBtn.addEventListener("click", openSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener("click", closeSidebar);
  if (sidebarOverlay)  sidebarOverlay.addEventListener("click", closeSidebar);

  // Close sidebar when a nav item is tapped on mobile
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => { if (window.innerWidth <= 768) closeSidebar(); });
  });

  // SPA page switching
  function switchPage(page) {
    ["home", "apps", "tools", "design-sheets", "academic"].forEach(p => {
      const el = document.getElementById(`page-${p}`);
      if (el) el.style.display = p === page ? "" : "none";
    });

    // Update nav active state
    document.querySelectorAll(".nav-link[data-page]").forEach(l => {
      l.classList.toggle("active", l.dataset.page === page);
    });

    // Reset PDF viewer when leaving academic
    if (page !== "academic") {
      const pdfSec = document.getElementById("pdf-viewer-section");
      if (pdfSec) { pdfSec.style.display = "none"; }
      const pdfIframe = document.getElementById("pdf-iframe");
      if (pdfIframe) pdfIframe.src = "";
      const acadSec = document.getElementById("academic-section");
      if (acadSec) acadSec.style.display = "flex";
    }

    if (page === "apps")          renderCards();
    if (page === "tools")         renderTools();
    if (page === "academic")      renderAcademic();
    if (page === "design-sheets") renderDesignSheets();

    // Scroll main content to top
    const mc = document.getElementById("main-content");
    if (mc) mc.scrollTop = 0;

    // Update URL hash
    history.replaceState(null, "", page === "home" ? location.pathname : `#${page}`);
  }

  // Expose globally for footer links
  window.switchPage = switchPage;

  // Wire all [data-page] links (nav + hero + footer)
  document.querySelectorAll("[data-page]").forEach(el => {
    if (el.tagName === "A" || el.tagName === "BUTTON") {
      el.addEventListener("click", e => {
        const page = el.dataset.page;
        if (["home", "apps", "tools", "design-sheets", "academic"].includes(page)) {
          e.preventDefault();
          switchPage(page);
          const navLinks = document.getElementById("navLinks");
          if (navLinks) navLinks.classList.remove("open");
        }
      });
    }
  });

  // Tool modal — close buttons
  const toolModalClose    = document.getElementById("tool-modal-close");
  const toolModalCloseBtn = document.getElementById("tool-modal-close-btn");
  const toolModalOverlay  = document.getElementById("tool-modal-overlay");
  if (toolModalClose)    toolModalClose.addEventListener("click",    closeToolModal);
  if (toolModalCloseBtn) toolModalCloseBtn.addEventListener("click", closeToolModal);
  if (toolModalOverlay)  toolModalOverlay.addEventListener("click",  e => { if (e.target === e.currentTarget) closeToolModal(); });

  // Restore page from URL hash on load
  const hashPage = location.hash.replace("#", "");
  const validPages = ["apps", "tools", "design-sheets", "academic"];
  const initialPage = validPages.includes(hashPage) ? hashPage : "home";
  switchPage(initialPage);

  // Sidebar category filter
  document.querySelectorAll(".nav-item[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      activeFilter = link.dataset.filter;
      document.querySelectorAll(".nav-item[data-filter]").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      updateSectionTitle();
      renderCards();
    });
  });

  // Search
  document.getElementById("search-input").addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderCards();
  });

  // Modal close — X button
  document.getElementById("modal-close").addEventListener("click", closeModal);

  // Modal close — footer "Close" button
  document.getElementById("modal-btn-close-action").addEventListener("click", closeModal);

  // Modal close — click on backdrop
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Design sheet modal — close button only (no backdrop click)
  const dsMClose = document.getElementById("ds-modal-close");
  if (dsMClose) dsMClose.addEventListener("click", closeDsModal);

  // Modal close — ESC key (all modals)
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
      closeToolModal();
      closeDsModal();
    }
  });

  // PDF viewer — back button
  document.getElementById("pdf-back-btn").addEventListener("click", showAcademicGrid);

  // Initial render (switchTab above handles renderCards / renderDesignSheets / renderAcademic)
  updateCounts();

  // Initialise inline tool UIs
  initLandAreaConverter();
});

/* ─────────────────────────────────────────────
   Land Area Converter Tool
───────────────────────────────────────────── */
function initLandAreaConverter() {
  const ROPANI  = 508.7371;
  const BIGHA   = 6772.63;
  const SQFT    = 0.092903038757389;
  const THRESH  = 0.998;

  const LABELS = {
    sqm:  { badge: "Sq.m",  multi: null },
    sqft: { badge: "Sq.ft", multi: null },
    rapd: { badge: null,    multi: ["R", "A", "P", "D"] },
    bkdk: { badge: null,    multi: ["B", "K", "D", "Ka"] },
  };

  function isMulti(u) { return u === "rapd" || u === "bkdk"; }

  function numVal(id) {
    const v = parseFloat(document.getElementById(id)?.value);
    return isNaN(v) ? 0 : Math.max(0, v);
  }

  function toSqm(unit, vals) {
    if (unit === "sqm")  return vals[0];
    if (unit === "sqft") return vals[0] * SQFT;
    if (unit === "rapd") {
      const [r, a, p, d] = vals;
      return (r + ((d / 4 + p) / 4 + a) / 16) * ROPANI;
    }
    // bkdk
    const [b, k, d, kw] = vals;
    return (b + ((kw / 16 + d) / 20 + k) / 20) * BIGHA;
  }

  function decompose(sqm, base, divs) {
    let val = sqm / base;
    const parts = [];
    for (const div of divs) {
      const whole = Math.floor(val);
      const frac  = val - whole;
      parts.push(whole);
      val = frac >= THRESH ? div : frac * div;
    }
    parts.push(+val.toFixed(3));
    return parts;
  }

  function fromSqm(unit, sqm) {
    if (unit === "sqm")  return [+sqm.toFixed(3)];
    if (unit === "sqft") return [+(sqm / SQFT).toFixed(3)];
    if (unit === "rapd") return decompose(sqm, ROPANI, [16, 4, 4]);
    return decompose(sqm, BIGHA, [20, 20, 16]);
  }

  function convert() {
    const from = document.getElementById("lac-from")?.value;
    const to   = document.getElementById("lac-to")?.value;
    if (!from || !to) return;

    const fromMulti = isMulti(from);
    const toMulti   = isMulti(to);

    // Toggle input panels
    document.getElementById("lac-input-single").style.display = fromMulti ? "none" : "";
    document.getElementById("lac-input-multi").style.display  = fromMulti ? ""     : "none";

    // Toggle output panels
    document.getElementById("lac-output-single").style.display = toMulti ? "none" : "";
    document.getElementById("lac-output-multi").style.display  = toMulti ? ""     : "none";

    // Update labels
    if (!fromMulti) {
      const el = document.getElementById("lac-val-unit");
      if (el) el.textContent = LABELS[from].badge;
    } else {
      LABELS[from].multi.forEach((lbl, i) => {
        const el = document.getElementById(`lac-l${i + 1}`);
        if (el) el.textContent = lbl;
      });
    }
    if (!toMulti) {
      const el = document.getElementById("lac-result-unit");
      if (el) el.textContent = LABELS[to].badge;
    } else {
      LABELS[to].multi.forEach((lbl, i) => {
        const el = document.getElementById(`lac-rl${i + 1}`);
        if (el) el.textContent = lbl;
      });
    }

    // Read input
    const inputVals = fromMulti
      ? [numVal("lac-m1"), numVal("lac-m2"), numVal("lac-m3"), numVal("lac-m4")]
      : [numVal("lac-val")];

    // Convert
    const sqm    = toSqm(from, inputVals);
    const result = fromSqm(to, sqm);

    // Render output
    if (!toMulti) {
      const el = document.getElementById("lac-result");
      if (el) el.textContent = result[0].toLocaleString();
    } else {
      result.forEach((v, i) => {
        const el = document.getElementById(`lac-r${i + 1}`);
        if (el) el.textContent = v;
      });
    }
  }

  // Wire events
  ["lac-from", "lac-to"].forEach(id =>
    document.getElementById(id)?.addEventListener("change", convert)
  );
  ["lac-val", "lac-m1", "lac-m2", "lac-m3", "lac-m4"].forEach(id =>
    document.getElementById(id)?.addEventListener("input", convert)
  );

  convert(); // initial render
}

// When browser restores page from bfcache (back/forward navigation),
// refresh design sheet counts so the updated number is shown immediately.
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    designSheets.forEach(s => { delete downloadCounts[s.id]; });
    loadAllDsCounts();
  }
});


/* ================================================================
   LEVEL SURVEY TOOL
   Full-screen modal, HI + Rise & Fall, change-point BS+FS,
   chainage inheritance, row insertion, keyboard shortcuts.
   Exposes window.openLevelSurveyModal() called by launchTool().
   ================================================================ */
(function () {
  "use strict";

  let rows             = [];
  let nextId           = 1;
  let selectedRowId    = null;
  let modalOpen        = false;
  let chartDebounce    = null;
  let profileChartInst = null;  // small chart in modal (unused — charts open in viewer)
  let xsChartInst      = null;
  let viewerChart      = null;  // large chart in viewer modal
  let currentView      = null;  // "profile" | "xs"

  /* ── helpers ─────────────────────────────────────────────── */
  function cssVar(n) {
    return getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  }

  function parseChainage(s) {
    if (!s) return NaN;
    const m = String(s).match(/^(\d+)\+(\d+(?:\.\d+)?)$/);
    if (m) return Number(m[1]) * 1000 + parseFloat(m[2]);
    return parseFloat(s);
  }

  function fmt3(v) { return v == null || isNaN(v) ? "—" : v.toFixed(3); }

  function escH(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ── RL calculation ──────────────────────────────────────── */
  function calculate() {
    const method  = document.getElementById("ls-method")?.value || "hi";
    const rawRL   = parseFloat(document.getElementById("ls-ref-rl")?.value);
    const startRL = isNaN(rawRL) ? 0 : rawRL;

    let curHI        = null;
    let curRL        = startRL;
    let prevReading  = null;    // R&F: last staff reading
    let lastChainage = "";      // for chainage inheritance

    return rows.map(row => {
      // Effective chainage: own value if filled, otherwise inherit
      const effectiveChainage = row.chainage !== "" ? row.chainage : lastChainage;
      if (row.chainage !== "") lastChainage = row.chainage;

      const bs  = row.bs !== "" ? parseFloat(row.bs)  : null;
      const is_ = row.is !== "" ? parseFloat(row.is)  : null;
      const fs  = row.fs !== "" ? parseFloat(row.fs)  : null;
      let hi = null, rise = null, fall = null, rl = null, err = "";

      // ── Count non-null readings ──────────────────────────
      const count = [bs, is_, fs].filter(v => v !== null).length;
      if (count === 0) return { ...row, effectiveChainage, hi, rise, fall, rl, err };

      // IS cannot co-exist with BS+FS simultaneously in one row
      if (is_ !== null && bs !== null && fs !== null) {
        err = "Cannot have BS, IS and FS all in one row";
        return { ...row, effectiveChainage, hi, rise, fall, rl, err };
      }

      if (method === "hi") {
        /* ── Height of Instrument method ─────────────────── */
        if (bs !== null && fs !== null) {
          // Change point: FS closes old setup → RL; BS opens new setup → new HI
          if (curHI === null) {
            err = "No HI established above this change point";
          } else {
            rl    = curHI - fs;
            hi    = rl + bs;
            curRL = rl;
            curHI = hi;
          }
        } else if (bs !== null && is_ !== null) {
          // BS+IS: set HI from curRL+BS, then IS gives a reading
          // Show a soft warning but still compute: RL = curRL for BS row
          rl    = curRL;
          hi    = rl + bs;
          curHI = hi;
          // IS computed from the new HI
          const rlIS = curHI - is_;
          curRL = rlIS;
          err = "BS+IS in same row: consider splitting for standard leveling form";
        } else if (bs !== null) {
          rl    = curRL;
          hi    = rl + bs;
          curHI = hi;
        } else if (is_ !== null) {
          if (curHI === null) { err = "No HI — add a BS row first"; }
          else { rl = curHI - is_; curRL = rl; }
        } else if (fs !== null) {
          if (curHI === null) { err = "No HI — add a BS row first"; }
          else { rl = curHI - fs; curRL = rl; }
        }
      } else {
        /* ── Rise & Fall method ──────────────────────────── */
        if (bs !== null && fs !== null) {
          // Change point: FS → rise/fall → RL; BS becomes next prevReading (same RL)
          if (prevReading !== null) {
            const diff = prevReading - fs;
            rise  = diff >= 0 ? diff : 0;
            fall  = diff <  0 ? -diff : 0;
            rl    = curRL + rise - fall;
            curRL = rl;
          } else {
            rl = curRL;
          }
          prevReading = bs;  // BS value is used for next row comparison
        } else if (bs !== null) {
          rl = curRL;         // carry RL forward — no rise/fall for pure BS
          prevReading = bs;
        } else {
          const reading = is_ ?? fs;
          if (prevReading === null) {
            err = "No preceding reading — add a BS row first";
            rl  = curRL;
          } else {
            const diff = prevReading - reading;
            rise  = diff >= 0 ? diff : 0;
            fall  = diff <  0 ? -diff : 0;
            rl    = curRL + rise - fall;
            curRL = rl;
          }
          prevReading = reading;
        }
      }

      return { ...row, effectiveChainage, hi, rise, fall, rl, err };
    });
  }

  /* ── table render ────────────────────────────────────────── */
  function renderTable(computed) {
    const tbody = document.getElementById("ls-tbody");
    if (!tbody) return;
    const method = document.getElementById("ls-method")?.value || "hi";

    tbody.innerHTML = computed.map((row, i) => {
      const isSel    = selectedRowId === row.id;
      const isCP     = row.bs !== "" && row.fs !== "";  // change point marker
      const chainageDisplay = row.chainage !== ""
        ? escH(row.chainage)
        : `<span class="ls-td-chainage-inherit" title="Inherited: ${escH(row.effectiveChainage)}">${escH(row.effectiveChainage) || "—"}</span>`;

      return `
        <tr class="ls-data-row${row.err ? " ls-row-error" : ""}${isSel ? " ls-row-selected" : ""}"
            data-id="${row.id}" tabindex="-1">
          <td style="padding:0 0.2rem;"><div class="ls-td-sel-dot"></div></td>
          <td class="ls-td-num">${i + 1}</td>
          <td>
            <input class="form-control ls-input" data-id="${row.id}" data-field="chainage"
                   value="${escH(row.chainage)}" placeholder="0+000" />
          </td>
          <td>
            <input class="form-control ls-input" type="number" step="any"
                   data-id="${row.id}" data-field="pDist"
                   value="${escH(row.pDist)}" placeholder="0.000" />
          </td>
          <td>
            <input class="form-control ls-input" type="number" step="any"
                   data-id="${row.id}" data-field="bs"
                   value="${escH(row.bs)}" placeholder="" />
          </td>
          <td>
            <input class="form-control ls-input" type="number" step="any"
                   data-id="${row.id}" data-field="is"
                   value="${escH(row.is)}" placeholder="" />
          </td>
          <td>
            <input class="form-control ls-input" type="number" step="any"
                   data-id="${row.id}" data-field="fs"
                   value="${escH(row.fs)}" placeholder="" />
          </td>
          <td class="ls-td-calc ls-col-hi">${fmt3(row.hi)}</td>
          <td class="ls-td-calc ls-col-rf">${row.rise != null ? row.rise.toFixed(3) : "—"}</td>
          <td class="ls-td-calc ls-col-rf">${row.fall != null ? row.fall.toFixed(3) : "—"}</td>
          <td class="ls-td-rl">${fmt3(row.rl)}${row.err ? `<span class="ls-row-warn" title="${escH(row.err)}"> ⚠</span>` : ""}${isCP ? `<span style="color:var(--sub-color);font-size:0.6rem;margin-left:3px;" title="Change point">CP</span>` : ""}</td>
          <td>
            <input class="form-control ls-input" data-id="${row.id}" data-field="remarks"
                   value="${escH(row.remarks)}" placeholder="remark…" />
          </td>
          <td>
            <button class="ls-del-btn" data-id="${row.id}" title="Delete row (Del)">✕</button>
          </td>
        </tr>
      `;
    }).join("");

    // Wire input events
    tbody.querySelectorAll(".ls-input").forEach(inp => {
      inp.addEventListener("input", () => {
        const row = rows.find(r => r.id === parseInt(inp.dataset.id));
        if (row) { row[inp.dataset.field] = inp.value; update(); }
      });
      // Clicking inside an input selects its row
      inp.addEventListener("focus", () => {
        const id = parseInt(inp.dataset.id);
        if (selectedRowId !== id) { selectedRowId = id; highlightSelected(); }
      });
    });

    // Wire delete buttons
    tbody.querySelectorAll(".ls-del-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        deleteRow(parseInt(btn.dataset.id));
      });
    });

    // Row click (non-input target) → select for XS + keyboard ops
    tbody.querySelectorAll(".ls-data-row").forEach(tr => {
      tr.addEventListener("click", e => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;
        const id = parseInt(tr.dataset.id);
        selectedRowId = (selectedRowId === id) ? null : id;
        highlightSelected();
      });
    });

    // Apply column visibility
    applyMethodVisibility();
  }

  function highlightSelected() {
    document.querySelectorAll("#ls-tbody .ls-data-row").forEach(tr => {
      const sel = parseInt(tr.dataset.id) === selectedRowId;
      tr.classList.toggle("ls-row-selected", sel);
    });
  }

  /* ── arithmetic check (inline in ctrl bar) ───────────────── */
  function renderCheck(computed) {
    const method = document.getElementById("ls-method")?.value || "hi";

    const sumBS    = computed.reduce((a, r) => a + (r.bs !== "" ? (parseFloat(r.bs)  || 0) : 0), 0);
    const sumFS    = computed.reduce((a, r) => a + (r.fs !== "" ? (parseFloat(r.fs)  || 0) : 0), 0);
    const diffBSFS = sumBS - sumFS;

    const valid   = computed.filter(r => r.rl != null && !isNaN(r.rl));
    const firstRL = valid.length > 0 ? valid[0].rl                 : null;
    const lastRL  = valid.length > 0 ? valid[valid.length - 1].rl  : null;
    const diffRL  = (firstRL != null && lastRL != null) ? lastRL - firstRL : null;
    const closErr = diffRL != null ? diffBSFS - diffRL : null;

    const hasBSFS = computed.some(r => r.bs !== "" || r.fs !== "");
    setText("ls-sum-bs",    hasBSFS ? sumBS.toFixed(3)    : "—");
    setText("ls-sum-fs",    hasBSFS ? sumFS.toFixed(3)    : "—");
    setText("ls-diff-bsfs", hasBSFS ? diffBSFS.toFixed(3) : "—");
    setText("ls-diff-rl",   diffRL != null ? diffRL.toFixed(3) : "—");

    const errEl = document.getElementById("ls-error-val");
    if (errEl) {
      if (closErr != null) {
        errEl.textContent = closErr.toFixed(4);
        errEl.style.color = Math.abs(closErr) < 0.001
          ? (cssVar("--success-color") || "#4ec94e")
          : "var(--error-color)";
      } else {
        errEl.textContent = "—";
        errEl.style.color = "";
      }
    }

    if (method === "rf") {
      const sumRise = computed.reduce((a, r) => a + (r.rise ?? 0), 0);
      const sumFall = computed.reduce((a, r) => a + (r.fall ?? 0), 0);
      const hasRF   = computed.some(r => r.rise != null);
      setText("ls-sum-rise",      hasRF ? sumRise.toFixed(3)             : "—");
      setText("ls-sum-fall",      hasRF ? sumFall.toFixed(3)             : "—");
      setText("ls-diff-risefall", hasRF ? (sumRise - sumFall).toFixed(3) : "—");
    }
  }

  /* ── column visibility ───────────────────────────────────── */
  function applyMethodVisibility() {
    const isRF = (document.getElementById("ls-method")?.value || "hi") === "rf";
    document.querySelectorAll(".ls-col-hi").forEach(el => el.style.display = isRF ? "none" : "");
    document.querySelectorAll(".ls-col-rf").forEach(el => el.style.display = isRF ? ""     : "none");
  }

  /* ── chart helpers ───────────────────────────────────────── */
  function cd() {
    return {
      main:   cssVar("--main-color")    || "#e2b714",
      text:   cssVar("--text-color")    || "#d1d0c5",
      sub:    cssVar("--sub-color")     || "#646669",
      bg:     cssVar("--sub-alt-color") || "#2c2e31",
      border: cssVar("--border-color")  || "#3a3c40",
      font:   cssVar("--font")          || "Roboto Mono, monospace",
    };
  }

  function baseOpts(c, xTitle) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 200 },
      plugins: {
        legend: { labels: { color: c.text, font: { family: c.font, size: 11 } } },
        tooltip: {
          backgroundColor: c.bg, borderColor: c.border, borderWidth: 1,
          titleColor: c.text, bodyColor: c.sub, padding: 10,
        },
      },
      scales: {
        x: {
          ticks: { color: c.sub, font: { size: 10, family: c.font } },
          grid:  { color: c.border },
          title: xTitle ? { display: true, text: xTitle, color: c.sub, font: { size: 10, family: c.font } } : undefined,
        },
        y: {
          ticks: { color: c.sub, font: { size: 10, family: c.font }, callback: v => (+v).toFixed(2) },
          grid:  { color: c.border },
          title: { display: true, text: "RL (m)", color: c.sub, font: { size: 10, family: c.font } },
        },
      },
    };
  }

  function profileDataset(computed, c) {
    const pts = computed
      .filter(r => r.rl != null && !isNaN(r.rl)
               && (r.pDist === "" || Math.abs(parseFloat(r.pDist) || 0) < 0.001))
      .map(r => ({ x: parseChainage(r.effectiveChainage), y: r.rl, lbl: r.effectiveChainage || "—" }))
      .filter(p => !isNaN(p.x))
      .sort((a, b) => a.x - b.x);
    return { pts, dataset: {
      label: "Ground RL",
      data: pts.map(p => p.y),
      borderColor: c.main, backgroundColor: c.main + "18",
      pointBackgroundColor: c.main, pointBorderColor: c.main,
      pointRadius: 5, pointHoverRadius: 7,
      fill: true, tension: 0.15,
    }, labels: pts.map(p => p.lbl) };
  }

  function xsData(computed, rowId) {
    const selRow = computed.find(r => r.id === rowId);
    if (!selRow) return null;
    const chainageLbl = selRow.effectiveChainage || "—";

    const xsPts = computed
      .filter(r => r.effectiveChainage === selRow.effectiveChainage
               && r.rl != null && !isNaN(r.rl) && r.pDist !== "")
      .map(r => ({ x: parseFloat(r.pDist) || 0, y: r.rl }));

    // Include centerline (pDist blank or 0)
    computed
      .filter(r => r.effectiveChainage === selRow.effectiveChainage
               && r.rl != null && !isNaN(r.rl)
               && (r.pDist === "" || parseFloat(r.pDist) === 0))
      .forEach(r => {
        if (!xsPts.find(p => Math.abs(p.x) < 0.001)) xsPts.push({ x: 0, y: r.rl });
      });

    xsPts.sort((a, b) => a.x - b.x);
    return { chainageLbl, xsPts };
  }

  /* ── main update ─────────────────────────────────────────── */
  function update() {
    // Preserve focused input
    const foc = document.activeElement;
    const fId  = foc?.dataset?.id;
    const fFld = foc?.dataset?.field;
    const cS   = foc?.selectionStart;
    const cE   = foc?.selectionEnd;

    const computed = calculate();
    renderTable(computed);
    renderCheck(computed);
    applyMethodVisibility();

    // Debounce chart-viewer refresh if open
    if (currentView) {
      clearTimeout(chartDebounce);
      chartDebounce = setTimeout(() => {
        if (currentView === "profile") openProfileViewer(computed);
        else openXSViewer(computed, selectedRowId);
      }, 350);
    }

    // Restore focus
    if (fId && fFld) {
      const el = document.querySelector(`#ls-tbody [data-id="${fId}"][data-field="${fFld}"]`);
      if (el) { el.focus(); try { el.setSelectionRange(cS, cE); } catch (_) {} }
    }
  }

  /* ── chart viewer modal ──────────────────────────────────── */
  function openProfileViewer(computed) {
    currentView = "profile";
    const overlay = document.getElementById("ls-chart-overlay");
    const titleEl = document.getElementById("ls-chart-dialog-title");
    const canvas  = document.getElementById("ls-modal-chart");
    if (!overlay || !canvas || typeof Chart === "undefined") return;

    if (titleEl) titleEl.textContent = "// longitudinal profile";
    overlay.classList.add("open");

    if (viewerChart) { viewerChart.destroy(); viewerChart = null; }

    const c   = cd();
    const { pts, dataset, labels } = profileDataset(computed, c);

    if (pts.length === 0) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `13px ${c.font}`; ctx.fillStyle = c.sub; ctx.textAlign = "center";
      ctx.fillText("no centerline data (pDist = 0) found", canvas.width / 2, canvas.height / 2);
      return;
    }

    const opts = baseOpts(c, "chainage");
    opts.plugins.tooltip.callbacks = { label: ctx => `  RL: ${ctx.parsed.y.toFixed(3)}` };

    viewerChart = new Chart(canvas, { type: "line", data: { labels, datasets: [dataset] }, options: opts });
  }

  function openXSViewer(computed, rowId) {
    currentView = "xs";
    const overlay = document.getElementById("ls-chart-overlay");
    const titleEl = document.getElementById("ls-chart-dialog-title");
    const canvas  = document.getElementById("ls-modal-chart");
    if (!overlay || !canvas || typeof Chart === "undefined") return;

    const result = rowId ? xsData(computed, rowId) : null;

    if (titleEl) titleEl.textContent = result
      ? `// cross-section @ ${result.chainageLbl}`
      : "// cross-section (no row selected)";

    overlay.classList.add("open");
    if (viewerChart) { viewerChart.destroy(); viewerChart = null; }

    const c = cd();

    if (!result || result.xsPts.length === 0) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `13px ${c.font}`; ctx.fillStyle = c.sub; ctx.textAlign = "center";
      ctx.fillText(rowId ? "no cross-section data at this chainage" : "click a row first, then View XS",
                   canvas.width / 2, canvas.height / 2);
      return;
    }

    const blue = "#88c0d0";
    const opts = baseOpts(c, "partial distance (m)");
    opts.scales.x = {
      type:  "linear",
      ticks: { color: c.sub, font: { size: 10, family: c.font }, callback: v => v + " m" },
      grid:  { color: c.border },
      title: { display: true, text: "partial distance (m)", color: c.sub, font: { size: 10, family: c.font } },
    };
    opts.plugins.tooltip.callbacks = {
      title: ctx => `  dist: ${ctx[0].parsed.x.toFixed(2)} m`,
      label: ctx => `  RL: ${ctx[0].parsed.y.toFixed(3)}`,
    };

    viewerChart = new Chart(canvas, {
      type: "line",
      data: { datasets: [{
        label: `XS @ ${result.chainageLbl}`,
        data: result.xsPts,
        borderColor: blue, backgroundColor: blue + "18",
        pointBackgroundColor: blue, pointBorderColor: blue,
        pointRadius: 6, pointHoverRadius: 8, fill: true, tension: 0.1,
      }] },
      options: opts,
    });
  }

  function closeViewer() {
    const overlay = document.getElementById("ls-chart-overlay");
    if (overlay) overlay.classList.remove("open");
    currentView = null;
    if (viewerChart) { viewerChart.destroy(); viewerChart = null; }
  }

  /* ── row management ──────────────────────────────────────── */
  function addRow() {
    const newRow = { id: nextId++, chainage: "", pDist: "", bs: "", is: "", fs: "", remarks: "" };
    if (selectedRowId != null) {
      const idx = rows.findIndex(r => r.id === selectedRowId);
      if (idx >= 0) { rows.splice(idx + 1, 0, newRow); }
      else           { rows.push(newRow); }
    } else {
      rows.push(newRow);
    }
    selectedRowId = newRow.id;
    update();
    setTimeout(() => {
      const inp = document.querySelector(`#ls-tbody [data-id="${newRow.id}"][data-field="chainage"]`);
      if (inp) inp.focus();
    }, 10);
  }

  function deleteRow(id) {
    const idx = rows.findIndex(r => r.id === id);
    if (idx < 0) return;
    rows.splice(idx, 1);
    // Select adjacent row
    if (selectedRowId === id) {
      selectedRowId = rows[idx]?.id ?? rows[idx - 1]?.id ?? null;
    }
    update();
  }

  function clearAll() {
    if (rows.length > 0 && !confirm("Clear all survey data?")) return;
    rows = []; nextId = 1; selectedRowId = null;
    for (let i = 0; i < 5; i++) {
      rows.push({ id: nextId++, chainage: "", pDist: "", bs: "", is: "", fs: "", remarks: "" });
    }
    closeViewer();
    update();
  }

  /* ── keyboard shortcuts ──────────────────────────────────── */
  function onKeydown(e) {
    if (!modalOpen) return;
    const inInput = document.activeElement?.tagName === "INPUT"
                 || document.activeElement?.tagName === "SELECT"
                 || document.activeElement?.tagName === "TEXTAREA";

    // Escape closes chart viewer (not main modal)
    if (e.key === "Escape") {
      if (document.getElementById("ls-chart-overlay")?.classList.contains("open")) {
        closeViewer(); e.preventDefault();
      }
      return;
    }

    // Keys below only when NOT typing in an input
    if (inInput) return;

    if (e.key === "Delete" || e.key === "Backspace") {
      if (selectedRowId != null) { deleteRow(selectedRowId); e.preventDefault(); }
    }
    if (e.key === "+" || e.key === "Insert") {
      addRow(); e.preventDefault();
    }
    if (e.key === "ArrowDown") {
      const idx = rows.findIndex(r => r.id === selectedRowId);
      if (idx < rows.length - 1) { selectedRowId = rows[idx + 1].id; highlightSelected(); e.preventDefault(); }
    }
    if (e.key === "ArrowUp") {
      const idx = rows.findIndex(r => r.id === selectedRowId);
      if (idx > 0) { selectedRowId = rows[idx - 1].id; highlightSelected(); e.preventDefault(); }
    }
  }

  /* ── modal open/close ────────────────────────────────────── */
  function openModal() {
    const overlay = document.getElementById("ls-full-overlay");
    if (!overlay) return;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    modalOpen = true;
    document.addEventListener("keydown", onKeydown);
    update();
  }

  function closeModal() {
    const overlay = document.getElementById("ls-full-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
    modalOpen = false;
    document.removeEventListener("keydown", onKeydown);
    closeViewer();
  }

  /* ── init (called once when DOM is ready) ────────────────── */
  function init() {
    // Seed demo data
    rows = [
      { id: nextId++, chainage: "0+000", pDist: "0",   bs: "1.250", is: "",      fs: "",      remarks: "BM (RL = 100.000)" },
      { id: nextId++, chainage: "0+020", pDist: "0",   bs: "",      is: "0.850", fs: "",      remarks: "" },
      { id: nextId++, chainage: "0+020", pDist: "-5",  bs: "",      is: "1.100", fs: "",      remarks: "Left XS" },
      { id: nextId++, chainage: "0+020", pDist: "5",   bs: "",      is: "0.620", fs: "",      remarks: "Right XS" },
      { id: nextId++, chainage: "0+040", pDist: "0",   bs: "",      is: "0.720", fs: "",      remarks: "" },
      { id: nextId++, chainage: "0+060", pDist: "0",   bs: "",      is: "",      fs: "1.100", remarks: "TP1" },
      { id: nextId++, chainage: "0+060", pDist: "0",   bs: "0.950", is: "",      fs: "",      remarks: "TP1" },
      { id: nextId++, chainage: "0+080", pDist: "0",   bs: "",      is: "0.650", fs: "",      remarks: "" },
      { id: nextId++, chainage: "0+100", pDist: "0",   bs: "",      is: "",      fs: "0.980", remarks: "End" },
    ];

    // Close button
    document.getElementById("ls-full-close")?.addEventListener("click", closeModal);

    // Controls
    document.getElementById("ls-add-row")       ?.addEventListener("click",  addRow);
    document.getElementById("ls-clear")          ?.addEventListener("click",  clearAll);
    document.getElementById("ls-ref-rl")         ?.addEventListener("input",  update);
    document.getElementById("ls-method")         ?.addEventListener("change", update);

    // Chart viewer buttons
    document.getElementById("ls-view-profile")?.addEventListener("click", () => {
      openProfileViewer(calculate());
    });
    document.getElementById("ls-view-xs")?.addEventListener("click", () => {
      openXSViewer(calculate(), selectedRowId);
    });

    // Chart viewer close
    document.getElementById("ls-chart-close")?.addEventListener("click", closeViewer);

    // NO background-click handler on ls-full-overlay (intentional)
  }

  /* ── public entry point ──────────────────────────────────── */
  window.openLevelSurveyModal = function () {
    if (!document.getElementById("ls-full-overlay")) return;  // HTML not loaded yet
    const isFirstOpen = rows.length === 0;
    if (isFirstOpen) init();
    openModal();
  };
}());
