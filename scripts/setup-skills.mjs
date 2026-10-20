import fs from "node:fs";
import path from "node:path";

const REPO_SKILL_DIR = "E:\\RepoSkill\\ui-ux-pro-max-skill";
const TARGET_PROJECT_DIR = path.resolve(".");

const ASSETS_DIR = path.join(REPO_SKILL_DIR, "cli", "assets");
const AGENTS_DIR = path.join(TARGET_PROJECT_DIR, ".agents");
const SKILLS_DIR = path.join(AGENTS_DIR, "skills");
const UI_PRO_MAX_DIR = path.join(SKILLS_DIR, "ui-ux-pro-max");

console.log("--> Bắt đầu cài đặt UI/UX Pro Max Skills vào LumiNest Project...");
console.log("Nguồn Assets:", ASSETS_DIR);
console.log("Thư mục đích:", SKILLS_DIR);

if (!fs.existsSync(ASSETS_DIR)) {
  console.error("LỖI: Không tìm thấy thư mục nguồn tại:", ASSETS_DIR);
  process.exit(1);
}

// 1. Tạo các thư mục cần thiết
fs.mkdirSync(UI_PRO_MAX_DIR, { recursive: true });

// 2. Copy dữ liệu (79 styles, 192 color palettes, 74 typography, 119 UX guidelines, 105 icons...)
const srcData = path.join(ASSETS_DIR, "data");
const destData = path.join(UI_PRO_MAX_DIR, "data");
fs.cpSync(srcData, destData, { recursive: true });
console.log("✓ Đã sao chép thư mục data (CSV & Catalog) thành công.");

// 3. Copy scripts tìm kiếm Python
const srcScripts = path.join(ASSETS_DIR, "scripts");
const destScripts = path.join(UI_PRO_MAX_DIR, "scripts");
fs.cpSync(srcScripts, destScripts, { recursive: true });
console.log("✓ Đã sao chép thư mục scripts (search.py, core.py, design_system.py) thành công.");

// 4. Copy các sub-skills chuyên biệt (design-system, ui-styling, design, brand, banner-design, slides)
const srcSubSkills = path.join(ASSETS_DIR, "skills");
if (fs.existsSync(srcSubSkills)) {
  const subSkills = fs.readdirSync(srcSubSkills);
  for (const skillName of subSkills) {
    const subSrc = path.join(srcSubSkills, skillName);
    const subDest = path.join(SKILLS_DIR, skillName);
    if (fs.statSync(subSrc).isDirectory()) {
      fs.cpSync(subSrc, subDest, { recursive: true });
      console.log(`✓ Đã sao chép sub-skill: ${skillName}`);
    }
  }
}

// 5. Khởi tạo SKILL.md chuẩn Antigravity
const agentConfig = JSON.parse(
  fs.readFileSync(path.join(ASSETS_DIR, "templates", "platforms", "agent.json"), "utf8")
);
const baseContent = fs.readFileSync(
  path.join(ASSETS_DIR, "templates", "base", "skill-content.md"),
  "utf8"
);
const quickRef = fs.readFileSync(
  path.join(ASSETS_DIR, "templates", "base", "quick-reference.md"),
  "utf8"
);

// Tạo YAML Frontmatter
let frontmatter = "---\n";
for (const [k, v] of Object.entries(agentConfig.frontmatter)) {
  frontmatter += `${k}: "${v.replace(/"/g, '\\"')}"\n`;
}
frontmatter += "---\n\n";

// Thay thế biến template
let skillMdContent = baseContent
  .replace(/\{\{#QR\}\}([\s\S]*?)\{\{\/QR\}\}/g, "$1")
  .replace(/\{\{#NOQR\}\}[\s\S]*?\{\{\/NOQR\}\}/g, "")
  .replace(/\{\{TITLE\}\}/g, agentConfig.title)
  .replace(/\{\{DESCRIPTION\}\}/g, agentConfig.description)
  .replace(/\{\{SCRIPT_PATH\}\}/g, ".agents/skills/ui-ux-pro-max/scripts/search.py")
  .replace(/\{\{SKILL_OR_WORKFLOW\}\}/g, agentConfig.skillOrWorkflow)
  .replace(/\{\{QUICK_REFERENCE\}\}/g, "\n" + quickRef);

const fullSkillMd = frontmatter + skillMdContent;
fs.writeFileSync(path.join(UI_PRO_MAX_DIR, "SKILL.md"), fullSkillMd, "utf8");
console.log("✓ Đã sinh thành công .agents/skills/ui-ux-pro-max/SKILL.md (Tích hợp Quick Reference đầy đủ)");

console.log("--> Hoàn thành thiết lập toàn bộ Skill Suite vào project!");
