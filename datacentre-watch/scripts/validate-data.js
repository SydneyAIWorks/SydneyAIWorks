// Validates data.js. Run: node scripts/validate-data.js
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data.js");
const src = fs.readFileSync(file, "utf8");
const sandbox = {};
new Function("sandbox", src + "\nsandbox.LAST_UPDATED = LAST_UPDATED; sandbox.PROJECTS = PROJECTS;")(sandbox);

const STATUS = ["operating", "building", "approved", "proposed", "contested", "cancelled"];
const CONF = ["high", "medium", "low"];
const STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const errors = [];
const ids = new Set();

if (!DATE.test(sandbox.LAST_UPDATED)) errors.push(`LAST_UPDATED "${sandbox.LAST_UPDATED}" is not YYYY-MM-DD`);

sandbox.PROJECTS.forEach((p, i) => {
  const tag = `[${i}] ${p.id || "(no id)"}`;
  if (!p.id) errors.push(`${tag}: missing id`);
  if (ids.has(p.id)) errors.push(`${tag}: duplicate id`);
  ids.add(p.id);
  ["name", "location", "state", "summary", "community"].forEach(k => {
    if (!p[k] || typeof p[k] !== "string") errors.push(`${tag}: missing ${k}`);
  });
  if (!STATES.includes(p.state)) errors.push(`${tag}: state "${p.state}" not one of ${STATES.join(", ")}`);
  if (!STATUS.includes(p.status)) errors.push(`${tag}: status "${p.status}" not allowed`);
  if (!CONF.includes(p.confidence)) errors.push(`${tag}: confidence "${p.confidence}" not allowed`);
  if (typeof p.lat !== "number" || p.lat < -44 || p.lat > -10) errors.push(`${tag}: lat ${p.lat} outside Australia`);
  if (typeof p.lng !== "number" || p.lng < 112 || p.lng > 154) errors.push(`${tag}: lng ${p.lng} outside Australia`);
  if (p.capacity_mw !== null && typeof p.capacity_mw !== "number") errors.push(`${tag}: capacity_mw must be a number or null`);
  if (!DATE.test(p.updated || "")) errors.push(`${tag}: updated "${p.updated}" is not YYYY-MM-DD`);
  if (!Array.isArray(p.sources)) errors.push(`${tag}: sources must be an array`);
  else {
    p.sources.forEach((s, j) => {
      if (!s.label || !/^https?:\/\//.test(s.url || "")) errors.push(`${tag}: source ${j} needs label and http(s) url`);
    });
    if (p.confidence === "high" && p.sources.length < 2) errors.push(`${tag}: confidence high needs at least 2 sources`);
    if (p.confidence !== "low" && p.sources.length < 1) errors.push(`${tag}: needs at least 1 source unless confidence is low`);
  }
});

if (errors.length) {
  console.error(`${errors.length} problem(s):`);
  errors.forEach(e => console.error("  - " + e));
  process.exit(1);
}
console.log(`OK: ${sandbox.PROJECTS.length} projects, last updated ${sandbox.LAST_UPDATED}`);
