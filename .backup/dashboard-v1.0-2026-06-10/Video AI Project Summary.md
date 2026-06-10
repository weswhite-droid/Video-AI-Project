# Video AI Project – Master Summary
**Cobalt Video Analytics · Tier 1 Global Office Rollout**
Last updated: June 5, 2026

---

## Project Overview

Deploy Cobalt Video Analytics integrated with Salesforce's physical security stack across Tier 1 office locations globally. The system transforms security operations from reactive surveillance to proactive, AI-enabled threat detection by automatically analyzing alarm signals, filtering nuisance alarms, and escalating genuine threats to the Global Operations Center (GOC).

---

## Key Stakeholders

| Role | Name |
|------|------|
| Project Sponsor | Bill Inzeo |
| Program Manager | Jeff Toler |
| Program Lead | Jerry Wu / Wes White |
| Project Manager / Coordinator | Wes White (PMP, FTE, ~20 hrs/wk) |
| SecOps Director | Robert Mirakaj |
| GOC Director | Suzanne Paleologos |
| H&S Senior Manager | Aaron Patkin |
| VP Resilience | Stasha Wyskiel |
| PhySec Lead | Kory Turnbow |
| Security Technology Director | Gary Lunetta |
| GS&S Financial Ops | James Herrera |
| SecTech SOW Worker 1 | Steven Hord |
| SecTech SOW Worker 2 | TBD ⚠ Show Stopper |

---

## Budget

| Period | Amount |
|--------|--------|
| FY27 Budget | $400,140 |
| FY28 Full Scale | $1,612,800 TCV |

- Cobalt FY27 Quote (Q2–Q4): ~$754,620
- AWS Hosting: ~$500k/year at full global scale
- Lenel OpenAccess License: $3k–$5k/year per regional server

---

## Pilot Results (SF Tower)

| Metric | Result |
|--------|--------|
| Automated alarm resolution rate | 98% |
| Reduction in guard dispatches | 80% |
| Nuisance alarms eliminated (at scale) | 780,000+/year across 5,177 cameras |

---

## Rollout Phasing

| Phase | Quarter | Sites | Status |
|-------|---------|-------|--------|
| Phase 1 | Q2 FY27 | Hyderabad, Bangalore, Tokyo, Sydney, San Francisco, Seattle / Bellevue | In Progress — SF & Seattle Live |
| Phase 2 | Q3 FY27 | Chicago, Indianapolis, New York, Toronto, Atlanta | Not Started |
| Phase 3 | Q4 FY27 | Dublin, London, Paris, Bangalore Tower | Not Started — GDPR sign-off required |
| Phase 4 | FY28 | Full global rollout | Not Started |

---

## Integration Architecture

| Integration | Description | Status |
|-------------|-------------|--------|
| Cobalt → Lenel OnGuard | Alarm monitoring — Cobalt ingests and analyzes OnGuard alarm signals | Completed |
| Cobalt → Milestone VMS | Video management via Milestone Open Network Bridge | In Progress |
| Cobalt → ADA Door Systems | Door system integration for access control event correlation | Not Started |
| Cobalt → Service Cloud | Case creation and incident tracking for policy violations | Completed |
| Cobalt → Agentforce | AI-powered automated response and case routing | In Progress |
| Cobalt → Slack | Real-time notifications to GOC / SecOps channels | Completed |

---

## Business Objectives

| ID | Objective | Status |
|----|-----------|--------|
| BO-01 | Transform security operations from reactive to proactive AI-enabled threat detection | In Progress |
| BO-02 | Achieve 98%+ automated alarm resolution rate | Completed |
| BO-03 | 80%+ reduction in guard dispatches to non-genuine alarms | Completed |
| BO-04 | Eliminate 780,000+ nuisance alarms annually across 5,177 cameras at full scale | In Progress |
| BO-05 | Support Salesforce's commitment to employee safety at global scale | In Progress |

---

## Functional Requirements

### Alarm Monitoring & Web Application Portal

| ID | Requirement | Status |
|----|-------------|--------|
| AM-01 | Automated root cause analysis for all security events | Completed |
| AM-02 | AI-based nuisance alarm filtering before escalation to GOC | Completed |
| AM-03 | Real-time escalation to GO Center within 30–60 seconds of genuine threat detection | Completed |
| AM-04 | Human review required for all legitimate violation detections — cases must NOT auto-close | ⚠ At Risk |
| AM-05 | Web application portal dashboard must contain only alarms escalated to GOC | In Progress |

### Violation / Incident Detection & Response

| Violation Type | Workflow Status |
|----------------|----------------|
| Tailgating / Piggybacking | In Progress — workflow defined |
| Weapons Detection | In Progress — workflow defined |
| Unauthorized Access Attempts | Not Started — workflow TBD |
| Medical Emergency (Fall / Trip) | Not Started — workflow TBD |
| Doors Forced / Propped Open | Completed |
| After-Hours Access Anomalies | Not Started — workflow TBD |
| Loitering in Restricted Areas | Not Started — workflow TBD |
| Object Left Behind / Removed | Not Started — workflow TBD |
| Crowd Detection & Density Anomalies | Not Started — workflow TBD |

#### Tailgating Workflow (Defined)
1. Tailgating event → Office Agent → local Slack channel; Office Agent creates Service Cloud Case (Non-Compliance Tracking)
2. Vendor identifies tailgator & tailgatee using ACS → pings Office Agent → updates case and Slack
3. Office Agent sends Slack message to tailgatee (1st through door): *Do you know the tailgator? (Yes / No)*
   - **YES:** tailgatee enters name → reminders sent to both parties → case auto-closed in Service Cloud
   - **NO:** Office Agent notifies SecOps + GOC via Slack → guard dispatched → human handles final resolution and case closure

#### Weapons Detection Workflow (Defined)
1. Weapon identified by video analytics → Office Agent → local Slack channel; Office Agent creates Service Cloud Case
2. Office Agent notifies SecOps + GOC via Slack → guard dispatched → human handles final resolution and case closure

### Case Management (Salesforce Service Cloud)

| ID | Requirement | Status |
|----|-------------|--------|
| CM-01 | Auto-create Salesforce cases with video/image evidence attached for policy violations | Completed |
| CM-02 | Cases must NOT auto-close without human disposition for genuine violations | ⚠ At Risk |
| CM-03 | Priority tiering: High / Medium / Low based on violation type and location | In Progress |
| CM-04 | Response time SLAs defined per priority level | In Progress |
| CM-05 | Escalation for repeat offenders — 3rd offense notification must include reporting manager | In Progress |
| CM-06 | Case data retained per Salesforce data retention policy | In Progress |

### Agentforce Integration

| ID | Requirement | Status |
|----|-------------|--------|
| AF-01 | Live integration required at all active deployments (SF Tower + Seattle Data 1 as baseline) | In Progress |
| AF-02 | Automated case routing and dispatch workflows | In Progress |
| AF-03 | Agentforce actions must support: case triage, investigator assignment, and status updates | In Progress |

### Slack Notifications

| ID | Requirement | Status |
|----|-------------|--------|
| SL-01 | Real-time alerts to GOC and SecOps channels upon genuine threat detection | Completed |
| SL-02 | Notification format must include: violation type, location, timestamp, image/video evidence link | In Progress |
| SL-03 | Escalation alerts for SLA breaches — automatic Slack notification to team lead | Not Started |

---

## Non-Functional Requirements

| Requirement | Target | Status |
|-------------|--------|--------|
| Availability | 24/7, no shift limitations | Completed |
| Scalability | Must support full 5,177-camera global footprint | Not Started |
| Alert Performance | Detection-to-alert within seconds of event | Completed |
| Case Assignment | Within defined SLA per priority tier | In Progress |
| Audit / Logging | All detections logged with full audit trail | In Progress |
| Compliance | Pattern analysis and reporting for repeat offenders | In Progress |
| Data Privacy | Must comply with regional data privacy laws (GDPR, CCPA, etc.) | ⚠ At Risk |

---

## Operational Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| OP-01 | GOC staffing assessment: validate team capacity for daily legitimate violations requiring human review | ⚠ At Risk |
| OP-02 | Change management plan for GOC, SecOps, and GuardForce required before go-live | In Progress |
| OP-03 | Training for 100% of affected security personnel prior to each site activation | Not Started |
| OP-04 | Global SOP documentation required, including per violation type | Not Started |
| OP-05 | Ongoing Cobalt model tuning process defined — feedback loop for false positives/negatives | Not Started |
| OP-06 | SecOps to own Employee Success escalation & process for excessive tailgating | Not Started |

---

## RAID Risk Summary (15 Risks)

| ID | Risk | Owner | Status |
|----|------|-------|--------|
| R-01 | VP sign-off | Jeff Toler | ✔ Closed |
| R-02 | GOC capacity | Suzanne Paleologos | Open |
| R-03 | Cobalt Human Agent SLA chain | Jerry Wu | Open |
| R-04 | GDPR/CCPA EU/CA sites | Jerry Wu | In Progress |
| R-05 | Lenel logical device structure | Timothy Ohtake | In Progress |
| R-06 | OnGuard connectivity | Alen Cheng / Lukasz Skorowski | In Progress |
| R-07 | 95–97% alarms auto-closed | Suzanne Paleologos | Open |
| R-08 | Vendor contract | Jeff Toler | ✔ Closed |
| R-09 | Model tuning feedback loop | Jerry Wu | Not Started |
| R-10 | Ambient AI Hyderabad withdrawal | Jerry Wu | Open |
| R-11 | InfoSec/Privacy per region | Jerry Wu | Open |
| R-12 | H&S integration | Aaron Patkin / Prescott Delaware | Not Started |
| R-13 | Budget ambiguity | Jeff Toler | ✔ Closed |
| R-14 | OCM resource gap | Jerry Wu | Open |
| R-15 | Cobalt leadership departure / Alejandro Ramirez | Jeff Toler / Jerry Wu | Watching |

---

## Dashboard Files (Desktop & Documents)

| File | Purpose |
|------|---------|
| video-ai-dashboard.html | Master Project Dashboard — main hub |
| video-ai-requirements.html | System Requirements — all sections |
| video-ai-raci.html | RACI Matrix — 6 sections |
| video-ai-raid-log.html | RAID Log — 15 risks |

> All HTML files are self-contained and editable in-browser. Use ✏️ Edit → 💾 Save to File to update and replace the saved copy.
