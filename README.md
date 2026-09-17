# ClassSpinner 🎰

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue.svg)](manifest.json)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://ikuswardayan.github.io/ClassSpinner/)

**ClassSpinner** is a modern, responsive, and offline-first Progressive Web Application (PWA) designed for gamified, equitable random participant selection and classroom participation management. It combines a slot-machine-style animated draw wheel with automated participation tracking and session-based temporal exclusion to eliminate selection bias and boost student engagement.

🌐 **Live Web Application**: [https://ikuswardayan.github.io/ClassSpinner/](https://ikuswardayan.github.io/ClassSpinner/)  
📦 **Source Code Repository**: [https://github.com/ikuswardayan/ClassSpinner](https://github.com/ikuswardayan/ClassSpinner)

---

## 🚀 Key Features

* **🎰 Slot-Machine Draw Engine**: Features an animated 3-reel rolling wheel (with a ~2-second suspense cycle) that creates excitement and focus before revealing the selected winner.
* **🎯 Temporal Exclusion Mechanism**: Automatically unchecks selection eligibility (`isIncluded = false`) for drawn participants so everyone gets a turn before starting a new cycle. Easily reset via the **Reset Inclusion** action.
* **📊 Longitudinal Participation Tracking**: Manages attendee details inline and automatically logs participation counters:
  * `timesSelected`: Automatically incremented when picked by the draw engine.
  * `timesAnswered`: Manually logged count of response attempts.
  * `timesCorrect`: Manually logged count of accurate answers.
* **💾 Local-First & Offline-Ready (PWA)**: Powered by Service Workers (`sw.js`) and Web Manifest (`manifest.json`). Stores all rosters and interaction logs locally in the browser via `LocalStorage` with an in-memory cache fallback. No installation or backend server is required, ensuring complete student data privacy.
* **📂 Data Portability (CSV Import & Export)**:
  * **Export**: Save roster data and full tracking statistics as a `.csv` file using the modern **File System Access API** (`showSaveFilePicker`) with anchor-download fallbacks.
  * **Import**: Load external student or participant lists via standard CSV parsing instantly.
* **🔊 Procedural Web Audio Feedback**: Integrates the standard Web Audio API to procedurally generate mechanical reel clicking and celebratory fanfare chords directly via browser oscillators—eliminating external audio downloads. Includes a one-click audio mute/unmute control.
* **⚡ Glassmorphism & Responsive UX**: Built with Bootstrap 5 and custom CSS glassmorphism styling, a floating control action bar, and automatic view-focus scrolling targeting the drawn winner's row.

---

## 🛠️ Technology Stack

* **Core & Styling**: HTML5, Vanilla CSS3 (Custom Glassmorphism design system & micro-animations)
* **UI Components & Icons**: Bootstrap 5.3, Bootstrap Icons
* **Logic & Animation**: JavaScript (ES6+), jQuery 3.x
* **Audio Engine**: W3C Web Audio API (procedural synthesis using `AudioContext`, oscillators, and gain envelopes)
* **PWA & Storage**: Service Worker API, Web App Manifest, HTML5 Web Storage API (`LocalStorage`)
* **File Operations**: W3C File System Access API (`showSaveFilePicker`) with Blob download fallbacks

---

## 📦 Getting Started

### Quick Start (Live Web App)
Open the live application directly in any modern browser:  
👉 **[https://ikuswardayan.github.io/ClassSpinner/](https://ikuswardayan.github.io/ClassSpinner/)**

### Running Locally (100% Offline, Zero Server Required)
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/ikuswardayan/ClassSpinner.git
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
| `timesSelected` | Integer | Total times selected by the draw engine. |
| `timesAnswered` | Integer | Total times the participant responded to questions. |
| `timesCorrect` | Integer | Total correct responses logged by the instructor. |

---

## 🎓 Research & Citation

ClassSpinner is developed as an open-source software artifact to promote equitable classroom participation and support active learning research.

### Empirical Evaluation Highlights
In a 3-week classroom evaluation with 53 students across university courses, ClassSpinner received positive Likert-scale ratings (1 to 5 scale):
* **User-Friendly Interface**: `4.42` (SD = 0.66, Median = 5.0)
* **Fairness & Unbiased Selection**: `4.21` (SD = 0.69)
* **Student Engagement**: `4.38` (SD = 0.71)
* **Educational Value**: `4.40` (SD = 0.88, Median = 5.0)
* **Response Rate**: Achieved a **100% response rate** among selected students during Q&A sessions (compared to ~62% baseline voluntary hand-raising).

### Citation
If you use ClassSpinner in your teaching, research, or publication, please cite our work:

```bibtex
@article{ClassSpinner2026,
  title     = {ClassSpinner: A Gamified Random Selection Tool for Classroom Participation Management},
  author    = {Kuswardayan, Imam and Yuhana, Umi Laili and Shiddiqi, Ary Mazharuddin and Fabroyir, Hadziq and Anwar, Misita and Liliana, Dewi Yanti},
  journal   = {SoftwareX},
  year      = {2026},
  publisher = {Elsevier},
  url       = {https://github.com/ikuswardayan/ClassSpinner}
}
```

---

## 📄 License & Support

* **License**: Open-source under the [MIT License](LICENSE).
* **Support & Contact**: Imam Kuswardayan (`imam@its.ac.id`) — Department of Informatics, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia.
