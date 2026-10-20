#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, "..", "data");

const CSV_DOMAINS = {
  style: "styles.csv",
  color: "colors.csv",
  chart: "charts.csv",
  landing: "landing.csv",
  product: "products.csv",
  ux: "ux-guidelines.csv",
  typography: "typography.csv",
  icons: "icons.csv",
  motion: "motion.csv",
  app: "app-interface.csv",
  reasoning: "ui-reasoning.csv",
};

function parseCSV(content) {
  const lines = content.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  // Parse header
  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === headers.length) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h.trim()] = values[idx]?.trim() || "";
      });
      rows.push(obj);
    }
  }
  return rows;
}

function parseCSVLine(text) {
  const result = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      result.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  result.push(cur);
  return result;
}

function searchRows(rows, queryTerms, maxResults = 5) {
  const scored = rows.map((row) => {
    let score = 0;
    const rowText = Object.values(row).join(" ").toLowerCase();

    for (const term of queryTerms) {
      const termLower = term.toLowerCase();
      if (rowText.includes(termLower)) {
        score += 2;
        // Exact field bonus
        for (const v of Object.values(row)) {
          if (v.toLowerCase() === termLower) score += 5;
          else if (v.toLowerCase().includes(termLower)) score += 1;
        }
      }
    }
    return { row, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((s) => s.row);
}

// CLI Argument Parsing
const args = process.argv.slice(2);
if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(`
UI/UX Pro Max Search (Node.js version)
Usage:
  node search.mjs "<query>" [--domain <domain>] [--stack <stack>] [--max-results <n>]

Domains: ${Object.keys(CSV_DOMAINS).join(", ")}
Stacks: react, nextjs, shadcn, html-tailwind, vue, svelte, astro, flutter, swiftui...

Examples:
  node search.mjs "real estate luxury" --domain color
  node search.mjs "minimalist modern" --domain style
  node search.mjs "card" --domain ux
  node search.mjs "nextjs" --stack nextjs
`);
  process.exit(0);
}

const query = args[0] || "";
let domain = null;
let stack = null;
let maxResults = 3;

for (let i = 1; i < args.length; i++) {
  if (args[i] === "--domain" && args[i + 1]) {
    domain = args[i + 1].toLowerCase();
    i++;
  } else if (args[i] === "--stack" && args[i + 1]) {
    stack = args[i + 1].toLowerCase();
    i++;
  } else if (args[i] === "--max-results" && args[i + 1]) {
    maxResults = parseInt(args[i + 1], 10) || 3;
    i++;
  }
}

// 1. Stack Guideline Lookup
if (stack) {
  const stackFile = path.join(DATA_DIR, "stacks", `${stack}.md`);
  if (fs.existsSync(stackFile)) {
    console.log(`\n=== STACK GUIDE: ${stack.toUpperCase()} ===\n`);
    console.log(fs.readFileSync(stackFile, "utf8"));
  } else {
    console.log(`No stack guide found for '${stack}'. Available stacks:`);
    const files = fs.readdirSync(path.join(DATA_DIR, "stacks")).map((f) => f.replace(".md", ""));
    console.log(files.join(", "));
  }
  if (!domain && (!query || query === stack)) process.exit(0);
}

// 2. CSV Domain Search
const targetDomains =
  domain && domain !== "all" ? [domain] : Object.keys(CSV_DOMAINS);

const terms = query.split(/\s+/).filter((t) => t.length > 0);

console.log(`\n🔍 Searching UI/UX Pro Max for: "${query}" (Domains: ${targetDomains.join(", ")})\n`);

let totalFound = 0;
for (const d of targetDomains) {
  const fileName = CSV_DOMAINS[d];
  if (!fileName) continue;

  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, "utf8");
  const rows = parseCSV(content);
  const results = searchRows(rows, terms, maxResults);

  if (results.length > 0) {
    totalFound += results.length;
    console.log(`\n--- [Domain: ${d.toUpperCase()}] (${results.length} matches) ---`);
    for (const r of results) {
      console.log(JSON.stringify(r, null, 2));
    }
  }
}

if (totalFound === 0) {
  console.log("No matching design entries found. Try a broader term (e.g., 'minimal', 'luxury', 'hero', 'glass').");
}
