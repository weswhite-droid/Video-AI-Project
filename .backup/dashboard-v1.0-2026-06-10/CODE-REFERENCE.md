# 📚 Video AI Dashboard - Code Reference

## Quick Lookup Guide for Common Modifications

---

## 🎨 Colors & Theme

### **Main Colors**
```css
/* Background */
#0f1117 - Main dark background
#1a1f2e - Card/section background
#2d3748 - Borders

/* Text */
#e2e8f0 - Primary text
#a0aec0 - Secondary text
#718096 - Muted text

/* Status Colors */
#fc8181 - Red (At Risk, Open)
#68d391 - Green (In Progress, Active)
#63b3ed - Blue (Completed, Done)
#718096 - Grey (Not Started)
#ecc94b - Yellow (In Progress alt)
#f6ad55 - Orange (Watching, On Hold)
#b794f4 - Purple (Not Started alt)
```

**Location:** Lines 6-423 (CSS section)

---

## 📊 Key Sections & Line Numbers

### **Dashboard Structure**

| Section | Lines | Description |
|---------|-------|-------------|
| **CSS Styles** | 6-423 | All styling |
| **Header** | 426-443 | Project title, meta info |
| **Legend** | 436-441 | Status key |
| **RAID Summary** | 444-467 | Donut chart + sync |
| **Video AI Plan** | 469-502 | Milestones table |
| **Stats Bar** | 504-521 | 4 stat cards |
| **Task Sections** | 523-900 | All project tasks |
| **Modals** | 938-1390 | Sync overlays |
| **JavaScript** | 982-1354 | All functions |

---

## 🔧 Common Edit Locations

### **1. Update Risk Counts**
**Line 458-462**
```html
<span class="dl-count">6</span>  <!-- Change numbers here -->
```

### **2. Update Stats (At Risk, In Progress, etc.)**
**Lines 470-481**
```html
<div class="num">1</div>  <!-- At Risk -->
<div class="num">9</div>  <!-- In Progress -->
<div class="num">13</div> <!-- Completed -->
<div class="num">5</div>  <!-- Not Started -->
```

### **3. Change Canvas URLs**
**Line 448** (RAID):
```html
<a href="https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4"
```

**Line 476** (Video AI Plan):
```html
<a href="https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q"
```

### **4. Add New Task**
**After line 582** (in any section):
```html
<div class="task green">
  <div class="task-status"></div>
  <div class="task-body">
    <div class="task-name">Your Task Name</div>
    <div class="task-sub">Your description</div>
  </div>
  <div class="badge green">In Progress</div>
</div>
<div class="divider"></div>
```

### **5. Change Project Title**
**Line 428**
```html
<h1>Video AI – <span>Master Project Dashboard</span></h1>
```

### **6. Update Footer**
**Line 935**
```html
Generated from #proj-gss-video-ai-working-group Master Project Plan · Last updated Jun 5, 2026
```

---

## ⚙️ JavaScript Functions

### **RAID Sync Functions** (Lines 982-1177)

| Function | Line | Purpose |
|----------|------|---------|
| `openSyncModal()` | 996 | Opens RAID sync modal |
| `closeSyncModal()` | 1004 | Closes modal |
| `parseCanvasText()` | 1012 | Parses pasted canvas data |
| `countByStatus()` | 1107 | Counts risks by status |
| `previewSync()` | 1119 | Shows preview table |
| `applySync()` | 1166 | Applies sync to dashboard |
| `escapeHtml()` | 989 | Sanitizes user input |

### **Milestones Sync Functions** (Lines 1179-1354)

| Function | Line | Purpose |
|----------|------|---------|
| `openMilestonesModal()` | 1214 | Opens milestones sync modal |
| `closeMilestonesModal()` | 1222 | Closes modal |
| `parseMilestonesText()` | 1230 | Parses milestone data |
| `previewMilestones()` | 1295 | Shows preview table |
| `applyMilestones()` | 1339 | Applies milestones to table |

---

## 🎯 Status Mappings

### **RAID Status Map** (Line 983)
```javascript
var STATUS_MAP = {
  'open': 'open',
  'in progress': 'inprog',
  'closed': 'closed',
  'not started': 'notstart',
  'watching': 'watching'
};
```

### **Milestone Status Map** (Line 1181)
```javascript
var MS_STATUS_MAP = {
  'not started': { key: 'notstarted', label: 'Not Started', cls: 'grey' },
  'in progress': { key: 'inprog', label: 'In Progress', cls: 'green' },
  'complete': { key: 'done', label: 'Completed', cls: 'blue' },
  'at risk': { key: 'atrisk', label: 'At Risk', cls: 'red' },
  'on hold': { key: 'onhold', label: 'On Hold', cls: 'orange' }
};
```

---

## 🔍 CSS Class Reference

### **Task Status Classes**
```css
.task.red    - At Risk (red border)
.task.green  - In Progress (green border)
.task.blue   - Completed (blue border)
.task.grey   - Not Started (grey border)
```

### **Badge Classes**
```css
.badge.red    - At Risk badge
.badge.green  - In Progress badge
.badge.blue   - Completed badge
.badge.grey   - Not Started badge
```

### **Stat Card Classes**
```css
.stat-card.red-card    - At Risk card
.stat-card.green-card  - In Progress card
.stat-card.blue-card   - Completed card
.stat-card.grey-card   - Not Started card
```

---

## 📦 HTML Structure Templates

### **Section Template**
```html
<div class="section">
  <details open>
    <summary>
      <span class="section-icon">📋</span>
      <span class="section-title">SECTION NAME</span>
      <span class="section-count">X items</span>
      <span class="chevron">▼</span>
    </summary>
    <div class="task-list">
      <!-- Tasks go here -->
    </div>
  </details>
</div>
```

### **Task Template**
```html
<div class="task STATUS-CLASS">
  <div class="task-status"></div>
  <div class="task-body">
    <div class="task-name">Task Name</div>
    <div class="task-sub">Description</div>
  </div>
  <div class="badge STATUS-CLASS">Status Label</div>
</div>
```

### **Divider**
```html
<div class="divider"></div>
```

---

## 🔗 Important IDs & Elements

### **Updateable Elements**

| ID | Purpose | Line |
|----|---------|------|
| `raidTotalLabel` | Total risks count | 445 |
| `syncLastLabel` | Last RAID sync time | 449 |
| `milestonesCountLabel` | Milestones count | 474 |
| `milestonesLastLabel` | Last milestone sync | 477 |
| `milestonesEmpty` | Empty state message | 480 |
| `milestonesTableBody` | Table rows container | 498 |
| `syncOverlay` | RAID modal overlay | 938 |
| `milestonesOverlay` | Milestones modal | 1356 |

### **Donut Chart Elements**
```javascript
document.querySelector('.donut')           // Main chart
document.querySelectorAll('.dl-count')     // Legend counts
document.getElementById('donutChart')      // Chart container
```

---

## 🎨 Style Sections (CSS)

| Lines | Section | Purpose |
|-------|---------|---------|
| 7-68 | Global & Header | Body, header, meta grid |
| 70-88 | Legend | Status key styling |
| 90-200 | Sections | Task sections, collapsible |
| 201-250 | Task Styles | Task rows, badges |
| 251-330 | Stats Bar | 4 stat cards |
| 331-425 | RAID Chart | Donut chart, legend |
| 426-500 | Milestones | Table styling |

---

## 🔐 Security Functions

### **HTML Escaping** (Line 989)
```javascript
function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;  // Uses textContent for safety
  return div.innerHTML;
}
```

**Always use before inserting user content!**

---

## 📝 Quick Edit Checklist

When making changes, check:

- [ ] Line numbers match (code may shift)
- [ ] All HTML tags properly closed
- [ ] Quotes matched (`"` or `'`)
- [ ] JavaScript syntax correct (semicolons, braces)
- [ ] CSS property values valid
- [ ] IDs and classes match
- [ ] Functions called correctly
- [ ] User input escaped
- [ ] Test sync functionality
- [ ] Check browser console for errors

---

## 🚀 Testing Process

1. **Save changes** to `video-ai-dashboard.html`
2. **Open in browser** (Ctrl+O or double-click file)
3. **Check console** (F12 → Console tab)
4. **Test sync buttons** (both RAID and Milestones)
5. **Verify visual changes** (colors, layout, text)
6. **Test responsive** (resize browser window)
7. **Commit to git** if all working

---

## 📊 Data Flow

### **RAID Sync:**
```
Canvas Table
    ↓
User copies (Ctrl+C)
    ↓
Paste in modal textarea
    ↓
parseCanvasText() → Parse rows
    ↓
countByStatus() → Get counts
    ↓
previewSync() → Show preview
    ↓
User clicks Apply
    ↓
applySync() → Update donut chart
```

### **Milestones Sync:**
```
Canvas Table
    ↓
User copies (Ctrl+C)
    ↓
Paste in modal textarea
    ↓
parseMilestonesText() → Parse rows
    ↓
previewMilestones() → Show preview
    ↓
User clicks Apply
    ↓
applyMilestones() → Populate table
```

---

## 🎯 Canvas Integration Points

### **RAID Canvas**
- **URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
- **Button:** Line 447
- **Modal:** Lines 938-980
- **Functions:** Lines 982-1177

### **Video AI Plan Canvas**
- **URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q
- **Button:** Line 475
- **Modal:** Lines 1356-1390
- **Functions:** Lines 1179-1354

---

**For detailed modification instructions, see `MODIFICATION-GUIDE.md`**
