// --- language ---------------------------------------------------------------------------------
const STR = {
  en: {
    banner: "Demo with sample data. Nothing is saved.", brand: "Houses Demo", home: "Home", attendance: "Attendance", files: "Files",
    signOut: "Sign out", settings: "Settings", language: "Language", close: "Close", cancel: "Cancel", add: "Add", name: "Name",
    signIn: "Sign in", username: "Username", password: "Password", cont: "Continue", codeIntro: "Enter the 6-digit code from your authenticator app.", code: "Code",
    loginNote: "Simulated sign in: any values work. The real app checks the password and a time-based code.",
    overview: "Overview", glance: "Houses at a glance", goals: "Goals completed this week", licenses: "Staff due to renew licenses (next 30 days)",
    avgAtt: "Average attendance this month", followUps: "Pending follow-ups", addHouse: "+ House", addStaff: "+ Staff", addPatient: "+ Patient",
    notSaved: "(sample, not saved)", patientsN: "{n} patients", staffN: "{n} staff",
    addHouseT: "Add house", addStaffT: "Add staff member", addPatientT: "Add patient", houseName: "House name", staffName: "Staff name", patientName: "Patient name", house: "House",
    enterName: "Enter a name.", max8: "The demo shows up to 8 houses.", full12: "{h} already has 12 active patients.",
    toastHouse: 'House "{n}" added', toastPatient: "Patient added to {h}", toastStaff: "Staff member added to {h}",
    chatTitle: "Statistics assistant", chatHello: "Ask about patients, attendance or follow-ups. Answers use sample counts only.", chatPh: "For example: which house has the best attendance?", send: "Send",
    ansAtt: "{h} has the highest sample attendance this month ({p}%). Lowest: {l} ({lp}%).", ansFu: "Pending follow-ups (sample): {list}.",
    ansPat: "There are {t} patients in {n} houses (sample): {list}.", ansOther: "In this demo I can answer about patients, attendance and follow-ups. The real assistant only sees counts and rates, never names or notes.",
    houseNames: ["House One", "House Two", "House Three", "House Four"],
    sampleHouse: "Sample House", activePatients: "Active patients", subsToday: "Submissions today", attMonth: "Attendance this month", byDay: "This month, by day",
    day: "Day", submissions: "Submissions", present: "Present", readOnly: "Read only. Select a day to see who was present.",
    patient: "Patient", inT: "In", out: "Out", followUp: "Follow-up", yes: "Yes", no: "No", required: "Required", noRecords: "No records for this day.", samplePatients: "Sample data. Patient names are fictitious.",
    month: "month", filesN: "{n} files", download: "Download sample", sampleFiles: "Sample files. Downloads are placeholders, not real spreadsheets.",
    newsTitle: "Latest news", tagDocument: "Document", tagPending: "Pending", tagFollowup: "Follow-up", tagStaff: "Staff", tagPatient: "Patients", tagHouse: "House",
    thisWeek: "This week", agoNow: "just now", agoMin1: "1 minute ago", agoMinN: "{n} minutes ago", agoHour1: "1 hour ago", agoHourN: "{n} hours ago", yesterday: "yesterday", agoDayN: "{n} days ago",
    newsDoc: "Last document completed at {h} by {who}", newsCall: "Call {who} to verify the credentials that expire on {date}.",
    newsFollow: "Follow-up required at {h} after an absence", newsStaff: "New staff member added to {h}: {who}", newsRemoved: "Patient removed from {h}, effective {date}",
    bedsTitle: "Beds", bedsOccupied: "beds occupied", bedsCapacity: "Capacity", bedsOccupiedL: "Occupied", bedsFree: "Available", full: "Full",
    patientsTitle: "Patients", locTitle: "Location", phone: "Phone", mapAlt: "Map of the house location (sample)", mapNote: "Sample map and address.",
    zoomIn: "Zoom in", zoomOut: "Zoom out", zoomReset: "Center map", staffTitle: "Staff", license: "License",
    docsTitle: "Documents", folderPath: "Folder path", notFound: "House not found.", backHome: "Back to home", houseT: "House",
    vFiles: "files", vDays: "Days {a} to {b}", vDay1: "Day {a}", vPresentOf: "Present {p} of {n}", vHere: "Present", vAbsent: "Absent", vHours: "{a} to {b}",
    calendar: "Calendar", calTitle: "Supervisor calendar", calPill: "Supervisor", calPrev: "Previous month", calNext: "Next month", calToday: "Today",
    calNone: "No events on this day.", calUpcoming: "Next 30 days", calUpNone: "Nothing scheduled.", calAllDay: "All day", calMore: "+{n} more",
    calGrid: "Calendar of {m}", calEvents1: "1 event", calEventsN: "{n} events", calLegend: "Event types",
    calTagVisit: "Visit", calTagLicense: "License", calTagReview: "Review",
    calVisit: "Site visit: {h}", calCall: "Call {who} to verify credentials", calCallShort: "Call {who}", calFollow: "Follow-up call about an absence at {h}",
    calLicense: "License renewal due: {who} ({lic})", calReview: "Monthly documentation review, all houses", calSample: "Sample events. Not connected to a real calendar.",
  },
  es: {
    banner: "Demo con datos de ejemplo. No se guarda nada.", brand: "Houses Demo", home: "Inicio", attendance: "Asistencia", files: "Archivos",
    signOut: "Cerrar sesión", settings: "Configuración", language: "Idioma", close: "Cerrar", cancel: "Cancelar", add: "Añadir", name: "Nombre",
    signIn: "Iniciar sesión", username: "Usuario", password: "Contraseña", cont: "Continuar", codeIntro: "Introduce el código de 6 dígitos de tu app de autenticación.", code: "Código",
    loginNote: "Inicio de sesión simulado: sirve cualquier valor. La app real comprueba la contraseña y un código temporal.",
    overview: "Resumen", glance: "Las casas de un vistazo", goals: "Objetivos completados esta semana", licenses: "Personal que debe renovar licencia (próximos 30 días)",
    avgAtt: "Asistencia media este mes", followUps: "Seguimientos pendientes", addHouse: "+ Casa", addStaff: "+ Personal", addPatient: "+ Paciente",
    notSaved: "(ejemplo, no se guarda)", patientsN: "{n} pacientes", staffN: "{n} de personal",
    addHouseT: "Añadir casa", addStaffT: "Añadir miembro del personal", addPatientT: "Añadir paciente", houseName: "Nombre de la casa", staffName: "Nombre del personal", patientName: "Nombre del paciente", house: "Casa",
    enterName: "Escribe un nombre.", max8: "La demo muestra hasta 8 casas.", full12: "{h} ya tiene 12 pacientes activos.",
    toastHouse: 'Casa "{n}" añadida', toastPatient: "Paciente añadido a {h}", toastStaff: "Miembro del personal añadido a {h}",
    chatTitle: "Asistente de estadísticas", chatHello: "Pregunta por pacientes, asistencia o seguimientos. Las respuestas usan solo recuentos de ejemplo.", chatPh: "Por ejemplo: ¿qué casa tiene mejor asistencia?", send: "Enviar",
    ansAtt: "{h} tiene la mayor asistencia de ejemplo este mes ({p}%). La menor: {l} ({lp}%).", ansFu: "Seguimientos pendientes (ejemplo): {list}.",
    ansPat: "Hay {t} pacientes en {n} casas (ejemplo): {list}.", ansOther: "En esta demo puedo responder sobre pacientes, asistencia y seguimientos. El asistente real solo ve recuentos y porcentajes, nunca nombres ni notas.",
    houseNames: ["Casa Uno", "Casa Dos", "Casa Tres", "Casa Cuatro"],
    sampleHouse: "Casa de ejemplo", activePatients: "Pacientes activos", subsToday: "Envíos de hoy", attMonth: "Asistencia este mes", byDay: "Este mes, por día",
    day: "Día", submissions: "Envíos", present: "Presentes", readOnly: "Solo lectura. Elige un día para ver quién estuvo presente.",
    patient: "Paciente", inT: "Entrada", out: "Salida", followUp: "Seguimiento", yes: "Sí", no: "No", required: "Requerido", noRecords: "No hay registros para este día.", samplePatients: "Datos de ejemplo. Los nombres de pacientes son ficticios.",
    month: "mes", filesN: "{n} archivos", download: "Descargar ejemplo", sampleFiles: "Archivos de ejemplo. Las descargas son marcadores, no hojas de cálculo reales.",
    newsTitle: "Últimas noticias", tagDocument: "Documento", tagPending: "Pendiente", tagFollowup: "Seguimiento", tagStaff: "Personal", tagPatient: "Pacientes", tagHouse: "Casa",
    thisWeek: "Esta semana", agoNow: "ahora mismo", agoMin1: "hace 1 minuto", agoMinN: "hace {n} minutos", agoHour1: "hace 1 hora", agoHourN: "hace {n} horas", yesterday: "ayer", agoDayN: "hace {n} días",
    newsDoc: "Último documento completado en la {h} por {who}", newsCall: "Llamar a {who} para verificar sus credenciales, que vencen el {date}.",
    newsFollow: "Seguimiento requerido en la {h} tras una ausencia", newsStaff: "Nuevo miembro del personal en la {h}: {who}", newsRemoved: "Paciente dado de baja en la {h}, a partir del {date}",
    bedsTitle: "Camas", bedsOccupied: "camas ocupadas", bedsCapacity: "Capacidad", bedsOccupiedL: "Ocupadas", bedsFree: "Disponibles", full: "Completa",
    patientsTitle: "Pacientes", locTitle: "Ubicación", phone: "Teléfono", mapAlt: "Mapa de la ubicación de la casa (ejemplo)", mapNote: "Mapa y dirección de ejemplo.",
    zoomIn: "Acercar", zoomOut: "Alejar", zoomReset: "Centrar mapa", staffTitle: "Personal", license: "Licencia",
    docsTitle: "Documentos", folderPath: "Ruta de carpetas", notFound: "Casa no encontrada.", backHome: "Volver al inicio", houseT: "Casa",
    vFiles: "archivos", vDays: "Días {a} a {b}", vDay1: "Día {a}", vPresentOf: "Presentes {p} de {n}", vHere: "Presente", vAbsent: "Ausente", vHours: "{a} a {b}",
    calendar: "Calendario", calTitle: "Calendario del supervisor", calPill: "Supervisor", calPrev: "Mes anterior", calNext: "Mes siguiente", calToday: "Hoy",
    calNone: "No hay eventos este día.", calUpcoming: "Próximos 30 días", calUpNone: "No hay nada programado.", calAllDay: "Todo el día", calMore: "+{n} más",
    calGrid: "Calendario de {m}", calEvents1: "1 evento", calEventsN: "{n} eventos", calLegend: "Tipos de evento",
    calTagVisit: "Visita", calTagLicense: "Licencia", calTagReview: "Revisión",
    calVisit: "Visita a la {h}", calCall: "Llamar a {who} para verificar credenciales", calCallShort: "Llamar a {who}", calFollow: "Llamada de seguimiento por una ausencia en la {h}",
    calLicense: "Vence la licencia de {who} ({lic})", calReview: "Revisión mensual de documentos, todas las casas", calSample: "Eventos de ejemplo. No está conectado a un calendario real.",
  },
};
let LANG = "en";
try { LANG = localStorage.getItem("demo-lang") === "es" ? "es" : "en"; } catch (e) { LANG = "en"; }
document.documentElement.lang = LANG;
function t(key, vars) {
  let v = STR[LANG][key]; if (v === undefined) v = STR.en[key]; if (v === undefined) return key;
  return vars ? v.replace(/\{(\w+)\}/g, (m, k) => (vars[k] === undefined ? m : vars[k])) : v;
}
function setLang(l) { try { localStorage.setItem("demo-lang", l); } catch (e) {} location.reload(); }
function houseName(h) { const i = ["house-1", "house-2", "house-3", "house-4"].indexOf(h.id); return i >= 0 ? STR[LANG].houseNames[i] : h.name; }
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
function fmtDate(isoDate) { return new Intl.DateTimeFormat(LANG === "es" ? "es-ES" : "en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(isoDate)); }

// Sample data and shared helpers for the simulated demo. Nothing here talks to a server.
const HOUSE = { name: "Sample House" };
const HOUSES = [
  { id: "house-1", name: "House One", patients: 8, attendance: 91, followUps: 2 },
  { id: "house-2", name: "House Two", patients: 11, attendance: 87, followUps: 4 },
  { id: "house-3", name: "House Three", patients: 6, attendance: 94, followUps: 0 },
  { id: "house-4", name: "House Four", patients: 12, attendance: 83, followUps: 5 },
];
// Sample details of each house, all fictitious. The house page reads them; `salt` makes each house's attendance differ.
const DETAILS = {
  "house-1": { street: "1420 Oakwood Lane", city: "Springfield", phone: "(555) 555-0142", tel: "+15555550142", beds: 12, pin: [200, 130], salt: 0,
    patients: ["Ann A.", "Ben B.", "Cleo C.", "Dan D.", "Eve E.", "Finn F.", "Gus G.", "Hana H."],
    team: [{ name: "Maria Lopez", license: "LIC-204517" }, { name: "Carlos Ruiz", license: "LIC-198832" }, { name: "Sofia Herrera", license: "LIC-221064" }] },
  "house-2": { street: "88 Riverside Drive", city: "Springfield", phone: "(555) 555-0143", tel: "+15555550143", beds: 12, pin: [110, 75], salt: 10007,
    patients: ["Ivy I.", "Jack J.", "Kira K.", "Leo L.", "Mia M.", "Noah N.", "Opal O.", "Pete P.", "Quin Q.", "Rosa R.", "Sam S."],
    team: [{ name: "Laura Diaz", license: "LIC-187405" }, { name: "Pedro Navarro", license: "LIC-232918" }, { name: "Elena Castro", license: "LIC-205771" }] },
  "house-3": { street: "305 Cedar Court", city: "Springfield", phone: "(555) 555-0144", tel: "+15555550144", beds: 12, pin: [290, 185], salt: 20011,
    patients: ["Tara T.", "Uma U.", "Vic V.", "Wes W.", "Xena X.", "Yara Y."],
    team: [{ name: "Juan Perez", license: "LIC-176340" }, { name: "Irene Mendez", license: "LIC-219086" }, { name: "Luis Ortega", license: "LIC-243152" }] },
  "house-4": { street: "2711 Willow Creek Road", city: "Springfield", phone: "(555) 555-0145", tel: "+15555550145", beds: 12, pin: [200, 75], salt: 30029,
    patients: ["Abel A.", "Bea B.", "Cruz C.", "Dara D.", "Elan E.", "Faye F.", "Gael G.", "Hugo H.", "Ines I.", "Jude J.", "Kai K.", "Lena L."],
    team: [{ name: "Marta Gil", license: "LIC-190627" }, { name: "Diego Vargas", license: "LIC-226489" }, { name: "Paula Rios", license: "LIC-211733" }] },
};
const PATIENTS = ["Ann A.", "Ben B.", "Cleo C.", "Dan D.", "Eve E.", "Finn F.", "Gus G.", "Hana H."];

function rng(seed) { // mulberry32: same numbers on every visit
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pad = (n) => String(n).padStart(2, "0");
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const TODAY = new Date();

// One record per patient per day, from the 1st of the month up to today.
function monthRecords(year, month, names = PATIENTS, salt = 0) {
  const last = year === TODAY.getFullYear() && month === TODAY.getMonth() ? TODAY.getDate()
    : new Date(year, month + 1, 0).getDate();
  const out = [];
  for (let day = 1; day <= last; day++) {
    names.forEach((name, i) => {
      const r = rng(year * 10000 + (month + 1) * 100 + day + i * 7919 + salt)();
      const present = r < 0.9;
      const followUp = !present && r > 0.93;
      out.push({ date: `${year}-${pad(month + 1)}-${pad(day)}`, patient: name, present, followUp,
        timeIn: present ? "08:0" + (i % 6) : "", timeOut: present ? "16:" + pad((10 + i * 5) % 60) : "" });
    });
  }
  return out;
}
const THIS_MONTH = () => monthRecords(TODAY.getFullYear(), TODAY.getMonth());

// Attendance and pending follow-ups of each house come from the same sample records the house pages show,
// so the home, the chat and the house pages always agree.
(function () {
  const since = iso(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 5));
  HOUSES.forEach((h) => {
    const d = DETAILS[h.id], recs = monthRecords(TODAY.getFullYear(), TODAY.getMonth(), d.patients, d.salt);
    h.attendance = Math.round((recs.filter((r) => r.present).length / recs.length) * 100);
    h.followUps = recs.filter((r) => r.followUp && r.date >= since).length;
  });
})();

function guard() { // simulated session: set by the login page
  let ok = false;
  try { ok = sessionStorage.getItem("demo-signed-in") === "1"; } catch (e) { ok = false; }
  if (!ok) location.replace("index.html");
}
function signOut() { try { sessionStorage.removeItem("demo-signed-in"); } catch (e) {} location.href = "index.html"; }
function shell(active, titleKey) {
  document.title = t(titleKey || active) + " | Houses Demo";
  const link = (href, key, label) => `<a href="${href}" class="${active === key ? "on" : ""}">${label}</a>`;
  document.body.insertAdjacentHTML("afterbegin",
    `<div class="banner">${t("banner")}</div>
     <aside class="side"><div class="brand">${t("brand")}</div>
       <nav>${link("home.html", "home", t("home"))}${link("calendar.html", "calendar", t("calendar"))}${link("dashboard.html", "attendance", t("attendance"))}${link("files.html", "files", t("files"))}</nav>
       <div class="who"><div class="avatar" aria-hidden="true">SU</div><div class="who-mail note">supervisor@example.com</div>
         <div class="who-actions"><button class="secondary" onclick="openSettings()">${t("settings")}</button><button class="secondary" onclick="signOut()">${t("signOut")}</button></div></div></aside>
     <dialog id="settings"><h2>${t("settings")}</h2><label for="lang">${t("language")}</label>
       <select id="lang" onchange="setLang(this.value)"><option value="en">English</option><option value="es">Español</option></select>
       <div class="actions"><button type="button" class="secondary" onclick="document.getElementById('settings').close()">${t("close")}</button></div></dialog>`);
  document.getElementById("lang").value = LANG;
  const main = document.querySelector("main"); if (main) main.classList.add("content");
}
function openSettings() { document.getElementById("settings").showModal(); }
function download(name, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  a.download = name; document.body.appendChild(a); a.click(); a.remove();
}
