# ClassSpinner 🎰

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue.svg)](manifest.json)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://ikuswardayan.github.io/ClassSpinner/)

**ClassSpinner** is a modern, responsive, and offline-first Progressive Web Application (PWA) designed for gamified, equitable random participant selection and classroom participation management. It combines a slot-machine-style animated draw wheel with automated participation tracking and session-based temporal exclusion to eliminate selection bias and boost student engagement.

🌐 **Live Web Application**: [https://ikuswardayan.github.io/ClassSpinner/](https://ikuswardayan.github.io/ClassSpinner/)  
📦 **Source Code Repository**: [https://github.com/ikuswardayan/ClassSpinner](https://github.com/ikuswardayan/ClassSpinner)

---

## 🚀 Key Features

* **🎰 Slot-Machine Draw Engine**: Features an animated 3-reel rolling wheel (with a ~2-second suspense cycle) that creates excitement and focus before revealing the selected participant. Supports OS-level `prefers-reduced-motion` for instant, non-flicker selection.
* **🎯 Temporal Exclusion Mechanism**: Automatically unchecks selection eligibility (`isIncluded = false`) for drawn participants so everyone receives an equal opportunity within each cycle. Easily reset via the **Reset Inclusion** action.
* **📊 Aggregate Cumulative Participation Tracking**: Manages attendee details inline and logs aggregate cumulative counters:
  * `timesSelected`: Automatically incremented when picked by the draw engine.
  * `timesAnswered`: Formatively logged count of verbal response attempts on the podium console.
  * `timesCorrect`: Formatively logged count of accurate answers.
  *(Note: ClassSpinner maintains aggregate cumulative counters in roster state; timestamped multi-session relational event logging is planned for future work).*
* **💾 Local-First & Offline-Ready (PWA)**: Powered by Service Workers (`sw.js`) and Web Manifest (`manifest.json`). Stores all rosters and interaction records locally in the browser via `LocalStorage` with an in-memory cache fallback. The client-side architecture avoids server-side transmission and storage of student data, thereby reducing external data exposure while operating without institutional IT overhead.
* **📂 Data Portability (CSV Import & Export)**:
  * **Export**: Save roster data and full tracking statistics as a standard RFC 4180 `.csv` file using the modern **File System Access API** (`showSaveFilePicker`) with anchor-download fallbacks.
  * **Import**: Load external student or participant lists via standard CSV parsing with safety confirmation dialogs.
* **🔊 Procedural Web Audio Feedback**: Integrates the standard Web Audio API to procedurally generate mechanical reel clicking and celebratory fanfare chords directly via browser oscillators—eliminating external audio downloads. Includes a one-click audio mute/unmute control.
* **♿ Accessibility & Reduced Motion**: Keyboard-navigable (`Space` to spin, `Esc` to close modal), semantic ARIA live regions and labels, high-contrast UI (contrast >= 4.5:1), and native `@media (prefers-reduced-motion: reduce)` support.

---

## 🛠️ Technology Stack

* **Core & Styling**: HTML5, Vanilla CSS3 (Custom Glassmorphism design system, high-contrast tables & micro-animations)
* **UI Components & Icons**: Bootstrap 5.3, Bootstrap Icons
* **Logic & Animation**: JavaScript (ES6+), jQuery 3.x
* **Audio Engine**: W3C Web Audio API (procedural synthesis using `AudioContext`, oscillators, and gain envelopes)
* **PWA & Storage**: Service Worker API, Web App Manifest, HTML5 Web Storage API (`LocalStorage` with in-memory fallback)
* **File Operations**: W3C File System Access API (`showSaveFilePicker`) with Blob download fallbacks

---

## 📦 Getting Started

### Quick Start (Live Web App)
Open the live application directly in any modern browser:  
👉 **[https://ikuswardayan.github.io/ClassSpinner/](https://ikuswardayan.github.io/ClassSpinner/)**  
Official Release: **[v1.0.0](https://github.com/ikuswardayan/ClassSpinner/releases/tag/v1.0.0)** (commit `0a7bfc3`)

### Running Locally (100% Offline, Zero Server Required)
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/ikuswardayan/ClassSpinner.git
   cd ClassSpinner
   git checkout v1.0.0
   ```
2. **Direct Execution (Zero Setup)**:
   Simply **open `index.html`** directly in any modern web browser (Google Chrome 90+, Microsoft Edge 90+, Mozilla Firefox 88+, Apple Safari 14+) by double-clicking the file or via `file:///...`.
   * **Fully Self-Contained**: All third-party libraries (Bootstrap 5, jQuery, Bootstrap Icons), custom styles, and fonts are bundled locally in the `assets/` directory.
   * **Zero Server Dependency**: All core features—including slot-machine animation, procedural Web Audio synthesis, `localStorage` persistence, and CSV import/export—operate **100% offline without requiring Node.js, Python, or any HTTP web server**.
3. **Local HTTP Server (Optional — for PWA Installation Testing Only)**:
   A web server context is *only* necessary if you wish to test the browser's PWA "Install App" prompt or Service Worker caching lifecycle locally:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

---

## 🛡️ Boundary Conditions & Error Handling Behavior

To ensure resilient operation in dynamic classroom environments, ClassSpinner implements systematic client-side defensive handling across key boundary conditions:

1. **Malformed CSV Input**: The parser splits records adhering to RFC 4180 rules (handling nested commas, line breaks, and quotes). If a CSV lacks required headers (`name` or `idNumber`) or contains unparseable syntax, a warning toast alerts the instructor, and the invalid dataset is safely rejected without corrupting existing records.
2. **Dataset Replacement Safeguard**: When importing a new CSV file while a class roster is already active in memory, the system interrupts the action with a modal confirmation dialog (`#modalConfirm`), explicitly prompting the instructor before overwriting active data.
3. **Empty Eligible Selection Pool**: If all attendees have already been chosen within the current cycle (`isIncluded == false`), or if no students are marked as present (`isPresent == false`), initiating a draw triggers an immediate error notification toast instructing the user to reset the inclusion pool rather than freezing the animation.
4. **Local Storage Failures & Quota Limits**: In environments where browser storage is restricted (e.g., Strict Private/Incognito browsing modes or storage quota exhaustion), all read/write operations execute within `try...catch` blocks that fall back transparently to an in-memory session cache (`inMemoryData`), ensuring the classroom session continues uninterrupted.
5. **Duplicate Participant Identifiers**: During manual participant addition, duplicate ID numbers or blank names trigger validation alerts, preserving entity integrity across the active roster table.

---

## 📂 CSV Data Format

When importing or exporting participant lists via CSV, the file uses standard comma separation with the following header layout:

```csv
id,idNumber,name,isPresent,isIncluded,timesSelected,timesAnswered,timesCorrect
1,"7025241001","Achmad Bisri",1,1,0,0,0
2,"7025241002","Windi Eka Yulia Retnani",1,1,0,0,0
```

### Data Fields Specification
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer | Unique identifier for each participant record. |
| `idNumber` | String | Registration, Student, or Employee ID number. |
| `name` | String | Full name of the participant. |
| `isPresent` | Boolean (`1`/`0` or `true`/`false`) | Attendance flag (whether participant is present in class). |
| `isIncluded` | Boolean (`1`/`0` or `true`/`false`) | Eligibility flag for the next random draw cycle. |
| `timesSelected` | Integer | Total cumulative times selected by the draw engine. |
| `timesAnswered` | Integer | Formative tally of verbal response attempts logged by the instructor. |
| `timesCorrect` | Integer | Formative tally of accurate responses logged by the instructor. |

---

## 🎓 Research & Citation

ClassSpinner is developed as an open-source software artifact to promote equitable classroom participation and support active learning research.

### Empirical Evaluation Highlights
In a single-group observational field deployment with 53 undergraduate Computer Science students comprising 180 selection events, ClassSpinner demonstrated high perceived usability and technology acceptance (1 to 5 Likert scale):
* **User-Friendly Interface**: `4.42` (SD = 0.66, Median = 5.0)
* **Fairness & Unbiased Selection**: `4.21` (SD = 0.69)
* **Student Engagement**: `4.38` (SD = 0.71)
* **Educational Value**: `4.40` (SD = 0.88, Median = 5.0)
* **Response Compliance**: Achieved a **100% verbal response rate** among selected students during questioning sessions without peer-confrontation tension.

### Citation
If you use ClassSpinner in your teaching, research, or publication, please cite our work:

```bibtex
@article{ClassSpinner2026,
  title     = {ClassSpinner: A Gamified Random Selection Tool for Classroom Participation Management},
  author    = {Kuswardayan, Imam and Yuhana, Umi Laili and Shiddiqi, Ary Mazharuddin and Fabroyir, Hadziq and Anwar, Misita and Liliana, Dewi Yanti},
  journal   = {SoftwareX},
  year      = {2026},
  publisher = {Elsevier},
  url       = {https://github.com/ikuswardayan/ClassSpinner/tree/v1.0.0}
}
```

---

## 📄 License & Support

* **License**: Open-source under the [MIT License](LICENSE).
* **Release**: Official Release [v1.0.0](https://github.com/ikuswardayan/ClassSpinner/releases/tag/v1.0.0) (Git commit hash `0a7bfc3`).
* **Support & Contact**: Imam Kuswardayan (`imam@its.ac.id`) — Department of Informatics, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia.

