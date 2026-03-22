#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const sourcePackRoot = path.join(repoRoot, "starter", "rules-pack");

const targetArg = process.argv[2];
if (!targetArg) {
  console.error(
    "Usage: node scripts/install-rules-pack.js \"C:\\path\\to\\new-project\""
  );
  process.exit(1);
}

const targetRoot = path.resolve(targetArg);
const sourceRulesDir = path.join(sourcePackRoot, ".cursor", "rules");
const sourceDocsDir = path.join(sourcePackRoot, "docs");
const targetRulesDir = path.join(targetRoot, ".cursor", "rules");
const targetDocsDir = path.join(targetRoot, "docs");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDirectoryContents(sourceDir, destinationDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      ensureDir(destinationPath);
      copyDirectoryContents(sourcePath, destinationPath);
      continue;
    }

    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`Installed: ${destinationPath}`);
  }
}

function installDoc(sourceFileName, targetFileName) {
  const sourcePath = path.join(sourceDocsDir, sourceFileName);
  const targetPath = path.join(targetDocsDir, targetFileName);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Skipping missing doc: ${sourceFileName}`);
    return;
  }

  if (fs.existsSync(targetPath)) {
    // Preserve existing file — write template copy as .template.md instead
    const safeTargetPath = path.join(
      targetDocsDir,
      targetFileName.replace(".md", ".template.md")
    );
    fs.copyFileSync(sourcePath, safeTargetPath);
    console.log(`Preserved existing file. Template written to: ${safeTargetPath}`);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Installed: ${targetPath}`);
  }
}

function run() {
  if (!fs.existsSync(sourceRulesDir)) {
    throw new Error(
      "Rules pack not found. Run `node scripts/build-rules-pack.js` first."
    );
  }

  ensureDir(targetRulesDir);
  ensureDir(targetDocsDir);

  copyDirectoryContents(sourceRulesDir, targetRulesDir);

  installDoc(
    "STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md",
    "STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md"
  );
  installDoc("ROADMAP_TIMELINE_TEMPLATE.md", "ROADMAP_TIMELINE.md");
  installDoc(
    "ESTIMATION_RETROSPECTIVE_TEMPLATE.md",
    "ESTIMATION_RETROSPECTIVE.md"
  );
  installDoc("FORECAST_BASELINES_TEMPLATE.md", "FORECAST_BASELINES.md");
  installDoc("ASK_TEMPLATE.md", "ASK_TEMPLATE.md");
  installDoc("STRATEGY_HORIZONS.md", "STRATEGY_HORIZONS.md");
  installDoc("PLANNING_CADENCE.md", "PLANNING_CADENCE.md");
  installDoc("WEEKLY_EXECUTION_TRACKER_TEMPLATE.md", "WEEKLY_EXECUTION_TRACKER.md");
  installDoc("ACCOUNTABILITY_AUDIT_LOG_TEMPLATE.md", "ACCOUNTABILITY_AUDIT_LOG.md");
  installDoc(
    "SOLO_DEV_CAREER_MASTER_PLAN_TEMPLATE.md",
    "SOLO_DEV_CAREER_MASTER_PLAN.md"
  );
  installDoc("RESEARCH_ZERO_RUNTIME_GAMES_2026.md", "RESEARCH_ZERO_RUNTIME_GAMES_2026.md");
  installDoc("AI_FIRST_BUILD_STRATEGY.md", "AI_FIRST_BUILD_STRATEGY.md");

  console.log("Rules pack install complete.");
}

run();
