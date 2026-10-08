# TechAdda — QA & Automation Testing Learning Platform

> Comprehensive QA engineering, test automation, study materials, and interview preparation platform created and mentored by **Ankit Mittal**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=flat-square&logo=github)](https://ankit11191.github.io/techadda/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Server-Express%204.x-blue?style=flat-square&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features & Modules](#-key-features--modules)
- [Study Resource Vault (82+ Direct Cloud Links)](#-study-resource-vault-82-direct-cloud-links)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Technology Stack](#-technology-stack)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Available Scripts](#-available-scripts)
- [Live Deployments](#-live-deployments)
- [Author & Contact](#-author--contact)

---

## 🚀 Overview

**TechAdda** is an enterprise-grade learning and preparation portal designed for manual testers, QA engineers, and SDET aspirants transitioning into modern test automation. 

It provides structured learning tracks, interactive mock tests, product case studies, daily interview questions, and a vast repository of downloadable study materials covering Manual Testing, Core Java, Selenium WebDriver, API Testing, Python, SQL, DevOps, and Agile Scrum.

All study notes and interview question sets are directly linked to high-availability Google Drive cloud storage, keeping the repository lightweight (~20 MB vs ~165 MB originally) while providing fast, instant PDF previews in the browser.

---

## 🌟 Key Features & Modules

### 1. 🏠 Home Page (`index.html`)
- Interactive banner and course overview.
- Quick navigation to all platform areas.
- Course offerings overview: Manual Testing, Core Java, Selenium Automation, API Testing, Python Selenium, and TestNG.
- Mentor introduction and contact channels.

### 2. 📥 Download Vault (`downloads.html`)
- **82+ Curated Files** mapped directly to individual Google Drive document links.
- Interactive category tabs and tables:
  - **Manual Testing**: Test case design, defect life cycle, Agile STLC, bug reports, and interview questions (Set 1 to 5).
  - **Core Java**: Java fundamentals, OOPs, Collections, Exception Handling, Multithreading, String manipulation, and coding interview guides (Set 1 to 10).
  - **Selenium Automation**: WebDriver architecture, locators, TestNG, Page Object Model (POM), data-driven testing, and Selenium interview sets (Set 1 to 10).
  - **API Testing**: RESTful web services, HTTP methods, Postman, RestAssured, JSON/XML validation, and API interview questions (Set 1 to 5).
  - **Domain Testing**: Banking/Finance, E-Commerce, Healthcare, and Telecom domain workflows and business rules.
  - **DevOps & Docker**: CI/CD pipelines, Jenkins, Git/GitHub, Docker containerization for test grids, and Linux fundamentals.
  - **Python Automation**: Python basics, PyTest framework, and Selenium with Python interview questions (Set 1 to 5).
  - **Agile & JIRA**: Scrum rituals, User Stories, Acceptance Criteria, JQL queries, and sprint defect triage.
  - **SQL & Databases**: DDL/DML queries, Joins, Aggregations, Subqueries, and database testing interview questions.
- Direct download and Google Drive viewer integration (`target="_blank"`).

### 3. ❓ Daily Interview Questions (`dailyInterviewQuestions.html`)
- Comprehensive collection of daily interview questions across manual QA and automation frameworks.
- Real-world technical answers, code snippets, and scenario-based explanations.

### 4. 📝 Practice Exams & Mock Tests (`moketest.html`)
- Self-paced interactive quizzes and mock examination papers.
- Evaluates readiness across Core Java, Selenium locators, TestNG assertions, and STLC fundamentals.

### 5. 💼 Product Case Studies (`productcasestudy.html`)
- End-to-end product case studies analyzing real applications.
- Domain workflow diagrams, boundary value scenarios, and exploratory test charters.

### 6. 🎯 Interview Details & Preparation (`interviewdetails.html`)
- Step-by-step interview strategy guides.
- Technical rounds, live coding scenarios, and framework design walkthroughs.

### 7. 👨‍🏫 About the Mentor (`aboutme.html`)
- Background and professional profile of **Ankit Mittal**.
- Course syllabi downloads for Core Java, Selenium, and Manual Testing.
- Training methodologies, student testimonials, and inquiry forms.

---

## 📂 Study Resource Vault (82+ Direct Cloud Links)

The repository uses cloud-hosted Google Drive links for all documents:

| Category | Topics Covered | Link Target |
| :--- | :--- | :--- |
| **Core Java** | OOPs, Collections, Multithreading, Exceptions, String Programs | Direct Google Drive File Viewer |
| **Manual Testing** | SDLC, STLC, Test Scenarios, Defect Lifecycle, Agile | Direct Google Drive File Viewer |
| **Selenium WebDriver** | Architecture, Locators, Waits, TestNG, POM Framework | Direct Google Drive File Viewer |
| **API Testing** | REST, HTTP Status Codes, Postman, RestAssured, JSON | Direct Google Drive File Viewer |
| **Python Selenium** | Python Basics, PyTest, Selenium WebDriver Python | Direct Google Drive File Viewer |
| **SQL & Database** | Joins, Group By, Subqueries, Normalization, Data Verification | Direct Google Drive File Viewer |
| **DevOps & Docker** | Git, Jenkins CI/CD, Docker Grid Setup, Linux Commands | Direct Google Drive File Viewer |
| **Domain Testing** | Banking Domain, E-Commerce, Payment Gateways | Direct Google Drive File Viewer |

---

## 🏗 Project Architecture & Directory Structure

```text
techadda/
├── assets/
│   ├── css/
│   │   ├── all.min.css              # FontAwesome 5 icon library
│   │   ├── animate.css              # CSS keyframe animations
│   │   ├── bootstrap.min.css        # Bootstrap 4 grid & styling
│   │   ├── myStyle.css              # Custom platform styling
│   │   ├── plugins/                 # Carousel and slider plugins
│   │   └── style.css                # Base theme stylesheet
│   ├── fonts/                       # RedRose web typography
│   ├── images/
│   │   ├── courses/                 # Course banners & topic icons
│   │   ├── team/                    # Instructor & mentor photos
│   │   └── ...                      # UI illustrations and badges
│   ├── js/
│   │   ├── bootstrap.min.js         # Bootstrap UI components
│   │   ├── jquery-3.2.1.min.js      # jQuery core library
│   │   ├── popper.min.js            # Tooltip & dropdown positioning
│   │   ├── plugins/                 # Owl Carousel slider scripts
│   │   └── script.js                # Custom frontend interactivity
│   ├── scss/                        # Modular SCSS source stylesheets
│   └── webfonts/                    # FontAwesome font files
│
├── aboutme.html                     # Instructor profile & syllabus downloads
├── dailyInterviewQuestions.html     # Daily interview questions & answers
├── downloads.html                   # Central study notes & PDF resource hub
├── index.html                       # TechAdda main home page
├── interviewdetails.html            # Detailed interview preparation tracks
├── moketest.html                    # Mock test & practice exam module
├── productcasestudy.html            # Product case study & scenario analysis
│
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore file (excludes node_modules, temp files)
├── metadata.json                    # Project metadata & capabilities
├── package.json                     # Node.js project manifest & run scripts
├── README.md                        # Complete project documentation
└── server.js                        # Node.js Express static server
```

---

## 💻 Technology Stack

- **Frontend Core**: HTML5, Semantic Elements, CSS3, Modern Responsive Layouts
- **CSS Framework**: [Bootstrap 4.x](https://getbootstrap.com/), SCSS Preprocessor
- **Icons & Fonts**: [FontAwesome 5](https://fontawesome.com/), Google Fonts (RedRose, Roboto, Inter)
- **JavaScript & Plugins**: [jQuery 3.2.1](https://jquery.com/), [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
- **Server Runtime**: [Node.js](https://nodejs.org/) with [Express.js 4.x](https://expressjs.com/)
- **Document Storage**: Google Drive Cloud Storage (direct file IDs with instant viewer support)
- **Version Control**: Git & GitHub

---

## 🛠 Getting Started & Local Setup

### Prerequisites

Ensure you have Node.js and npm installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

Check your installed versions:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankit11191/techadda.git
   cd techadda
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📜 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Express server locally on port 3000 |
| `npm start` | Production start command for Node.js environments |
| `npm run build` | Builds and verifies static assets for deployment |

---

## 🌐 Live Deployments

- **Production / GitHub Pages**: [https://ankit11191.github.io/techadda/](https://ankit11191.github.io/techadda/)
- **AI Studio Cloud Instance**: Available via the development and preview container endpoints.

---

## 👤 Author & Contact

**Ankit Mittal**  
*Senior QA Architect & Test Automation Mentor*

- 📧 **Email**: [mittal.ankit2016@gmail.com](mailto:mittal.ankit2016@gmail.com)
- 🐙 **GitHub**: [@ankit11191](https://github.com/ankit11191)
- 🌐 **Website**: [TechAdda](https://ankit11191.github.io/techadda/)

---

*Contributions, issues, and feature requests are welcome! Feel free to check the repository issues page.*
