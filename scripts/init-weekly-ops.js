#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function getMonday(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function toIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function toIsoMonth(date) {
  return date.toISOString().slice(0, 7);
}

function appendIfMissing(filePath, marker, block) {
  const exists = fs.existsSync(filePath);
  if (!exists) {
    throw new Error(`Missing required file: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf8");
  if (content.includes(marker)) {
    console.log(`Already initialized: ${filePath}`);
    return false;
  }

  const appendText = `\n---\n\n${block}\n`;
  fs.writeFileSync(filePath, content + appendText, "utf8");
  console.log(`Initialized: ${filePath}`);
  return true;
}

function run() {
  const targetArg = process.argv[2];
  const targetRoot = targetArg ? path.resolve(targetArg) : process.cwd();

  const monday = getMonday(new Date());
  const weekIso = toIsoDate(monday);
  const monthIso = toIsoMonth(new Date());

  const trackerPath = path.join(targetRoot, "docs", "WEEKLY_EXECUTION_TRACKER.md");
  const auditPath = path.join(targetRoot, "docs", "ACCOUNTABILITY_AUDIT_LOG.md");

  const trackerMarker = `## Week Of: ${weekIso}`;
  const auditMarker = `### Week Of: ${weekIso}`;

  const trackerBlock = `## Week Of: ${weekIso}

### Planned Availability
- Monday: X hours
- Tuesday: X hours
- Wednesday: X hours
- Thursday: X hours
- Friday: X hours
- Saturday: 1-2 hours (30-min review + optional flex build)
- Sunday: 0-1 hours (optional or rest)

### Weekly Capacity Targets
- Weekday planned total (Mon-Fri): 20+ hours
- Weekday actual total (Mon-Fri):
- Weekday variance hours:
- Weekday variance percent:
- Weekly target band check (20+ weekday hours): pass/fail

### Daily Plan (Before Week Starts)
- Monday (Deep Build): top objective
- Tuesday (Deep Build): top objective
- Wednesday (Design/Planning): top objective
- Thursday (Deep Build): top objective
- Friday (Community/Business): top objective
- Saturday (Review/Planning + Flex): run quick audit + lock next week
- Sunday (Optional/Rest): rest or light cleanup
- Saturday flex intent after planning: catch-up / work-ahead / rest

### Weekly Quick Audit Verdict (Saturday)
- Verdict: Green/Yellow/Red
- Timeline impact: on track/slight risk/off track
- Top 2 behavior issues:
- Required corrective actions (next week):
- Scope freeze needed this week: yes/no`;

  const auditBlock = `## Weekly Audit Entry (Saturday)

### Week Of: ${weekIso}
- Quick verdict: TBD on Saturday
- Timeline impact: TBD on Saturday
- Planned hours (week):
- Actual hours (week):
- Variance percent:
- Must-ship completed: yes/no
- Tasks started:
- Tasks finished:
- Finish rate:

### Habit Signal Scores (0/1/2)
- Scope creep:
- Time drift:
- Context switching:
- Avoidance:
- Finish rate quality:
- Energy fit:
- Total risk score:

### Top Findings
- Finding 1:
- Finding 2:

### Required Corrective Actions (Next Week)
- Action 1:
- Action 2:

### Compliance Check (from prior week)
- Prior action 1 completed: yes/no
- Prior action 2 completed: yes/no
- If no, why:

## Monthly Deep Audit Entry (Last Saturday)

### Month: ${monthIso}
- Trend verdict: improving/flat/slipping
- Full-time trajectory verdict: on track/slight risk/off track
- 4-week planned hours total:
- 4-week actual hours total:
- 4-week variance percent:
- 4-week finish rate trend:
- 4-week risk score trend:
- Scope creep pattern:
- Top blocker aging:`;

  appendIfMissing(trackerPath, trackerMarker, trackerBlock);
  appendIfMissing(auditPath, auditMarker, auditBlock);

  console.log("Weekly ops initialization complete.");
}

run();
