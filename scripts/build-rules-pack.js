#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const sourceRulesDir = path.join(repoRoot, ".cursor", "rules");
const packRulesDir = path.join(
  repoRoot,
  "starter",
  "rules-pack",
  ".cursor",
  "rules"
);
const packDocsDir = path.join(repoRoot, "starter", "rules-pack", "docs");

const filesToCopy = [
  "workflow-rulesheet.mdc",
  "coding-standards-general.mdc",
  "communication-style-general.mdc",
  "clarification-gate.mdc",
  "definition-of-done.mdc",
  "health-check.mdc",
  "forecasting-loop.mdc",
  "question-translator.mdc",
  "beginner-assist-mode.mdc",
];

const docsToCopy = [
  {
    from: path.join(
      repoRoot,
      "docs",
      "STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md"
    ),
    to: path.join(packDocsDir, "STANDARDS_PROTOCOLS_GUARDRAILS_TEMPLATE.md"),
  },
  {
    from: path.join(repoRoot, "docs", "ROADMAP_TIMELINE_TEMPLATE.md"),
    to: path.join(packDocsDir, "ROADMAP_TIMELINE_TEMPLATE.md"),
  },
  {
    from: path.join(repoRoot, "docs", "ESTIMATION_RETROSPECTIVE_TEMPLATE.md"),
    to: path.join(packDocsDir, "ESTIMATION_RETROSPECTIVE_TEMPLATE.md"),
  },
  {
    from: path.join(repoRoot, "docs", "FORECAST_BASELINES_TEMPLATE.md"),
    to: path.join(packDocsDir, "FORECAST_BASELINES_TEMPLATE.md"),
  },
  {
    from: path.join(repoRoot, "docs", "ASK_TEMPLATE.md"),
    to: path.join(packDocsDir, "ASK_TEMPLATE.md"),
  },
  {
    from: path.join(repoRoot, "docs", "STRATEGY_HORIZONS.md"),
    to: path.join(packDocsDir, "STRATEGY_HORIZONS.md"),
  },
  {
    from: path.join(repoRoot, "docs", "PLANNING_CADENCE.md"),
    to: path.join(packDocsDir, "PLANNING_CADENCE.md"),
  },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFile(fromPath, toPath) {
  if (!fs.existsSync(fromPath)) {
    throw new Error(`Missing source file: ${fromPath}`);
  }
  fs.copyFileSync(fromPath, toPath);
}

function run() {
  ensureDir(packRulesDir);
  ensureDir(packDocsDir);

  for (const fileName of filesToCopy) {
    const fromPath = path.join(sourceRulesDir, fileName);
    const toPath = path.join(packRulesDir, fileName);
    copyFile(fromPath, toPath);
    console.log(`Copied rule: ${fileName}`);
  }

  for (const pair of docsToCopy) {
    copyFile(pair.from, pair.to);
    console.log(`Copied doc: ${path.basename(pair.to)}`);
  }

  console.log("Rules pack build complete.");
}

run();
