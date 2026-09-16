# Resume-Building-Website
# 🌌 Harshith — 3D Interactive Portfolio

> A cinematic, moving 3D portfolio built with **HTML, CSS, Bootstrap, and Three.js** — no frameworks, no build tools, no npm.

🔗 **Live Demo:** [https://wondrous-travesseiro-81ae61.netlify.app/](https://wondrous-travesseiro-81ae61.netlify.app/)

---

## 📖 About

This is my personal portfolio website, designed to give recruiters an immersive, memorable first impression. Instead of a static page, the site features a **live 3D animated robot avatar**, a **rotating wireframe data core**, a **1,800-particle starfield**, and a **scroll-driven cinematic camera** that flies through sections as you explore.

The entire experience is built with **zero frameworks** — just core web technologies and a CDN-loaded Three.js library.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **Animated 3D Robot** | Procedurally generated robot that waves, blinks, bobs, and looks around |
| 🧊 **Rotating Data Core** | Wireframe icosahedron with inner glow, surrounded by 14 orbiting tech nodes |
| 🌟 **Particle Starfield** | 1,800 color-varied particles rotating slowly for depth |
| 🎥 **Scroll-Driven Camera** | Camera flies through 8 keyframes as you scroll, following smoothstep easing |
| 🖱️ **Mouse Parallax** | Scene subtly reacts to cursor movement for immersion |
| 💎 **Glassmorphism Cards** | Frosted-glass cards with mouse-follow glow effects |
| 📊 **Full Resume Content** | Summary, skills, experience, projects, education, certifications |
| 📱 **Fully Responsive** | Bootstrap 5 grid adapts perfectly to mobile, tablet, and desktop |
| ⚡ **Zero Build Step** | No npm, no webpack, no React — just open and run |
| 🌐 **CDN-Only Dependencies** | Bootstrap, Three.js, Google Fonts, Bootstrap Icons — nothing to install |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Structure** | HTML5 |
| **Styling** | CSS3, Bootstrap 5.3 |
| **3D Graphics** | Three.js (r147, classic build) |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Icons** | Bootstrap Icons |
| **Fonts** | Google Fonts — Space Grotesk + Inter |
| **Form** | FormSubmit (serverless email) |
| **Hosting** | Netlify (free tier) |

---

## 📁 Folder Structure
```text
harshith-portfolio/
├── index.html              # Main HTML — structure + all sections
├── style.css               # All custom styling, animations, glassmorphism
├── main.js                 # Three.js scene, robot, camera, scroll logic
├── Harshith_Resume.pdf    # Downloadable resume (linked from hero button)
└── README.md               # Project documentation (this file)
---

## 🛠️ Setup & Deployment Guide

This section explains how to run this portfolio locally on your machine, and how to deploy it to the internet for free.

---

### 🖥️ Part 1: Run Locally (VS Code + Live Server)

The easiest way — no terminal, no npm, no build tools.

**Prerequisites:** [Visual Studio Code](https://code.visualstudio.com/) installed.

**Steps:**

1. **Install the Live Server extension**
   - Open VS Code
   - Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
   - Search for **"Live Server"** by *Ritwick Dey*
   - Click **Install**

2. **Open the project folder**
   - In VS Code: **File → Open Folder → harshitha-portfolio**

3. **Launch the site**
   - Right-click **`index.html`** in the file list
   - Click **"Open with Live Server"**
   - Browser opens at **`http://127.0.0.1:5500`** ✅

**To stop the server:** Click **Port: 5500** in the VS Code status bar → click Stop.

> ⚠️ **Do not double-click `index.html`.** It won't work due to browser security restrictions on ES modules. Always use Live Server.

---

### 🌐 Part 2: Deploy for Free (Netlify Drop)

Get a public URL in 60 seconds — no account required to start.

**Steps:**

1. **Go to** 👉 [https://app.netlify.com/drop](https://app.netlify.com/drop)

2. **Drag your entire `harshitha-portfolio` folder** onto the page
   - Do **NOT** zip it first
   - Do **NOT** drag individual files — drag the whole folder

3. **Wait ~10 seconds** — you'll see: ✅ *"Your site is deployed"*

4. **Copy your live URL** — it looks like:
   ```
   https://random-name-123.netlify.app
   ```


