# 🌌 Harshith — 3D Interactive Portfolio

> A cinematic, moving 3D portfolio built with **HTML, CSS, Bootstrap, and Three.js** — no frameworks, no build tools, no npm.

🔗 **Live Demo:**
https://wondrous-travesseiro-81ae61.netlify.app/

---

## 📖 About

This is my personal portfolio website, designed to give recruiters an immersive and memorable first impression.

Instead of a traditional static portfolio, the website features an interactive 3D experience with a live animated robot avatar, rotating data core, particle starfield, mouse parallax, and scroll-driven camera animations.

The entire experience is built with **zero frameworks and zero build tools** — using core web technologies and a CDN-loaded Three.js library.

---

## ✨ Features

| Feature                      | Description                                                                       |
| ---------------------------- | --------------------------------------------------------------------------------- |
| 🤖 **Animated 3D Robot**     | Procedurally generated robot that waves, blinks, bobs, and looks around           |
| 🧊 **Rotating Data Core**    | Wireframe icosahedron with inner glow, surrounded by 14 orbiting technology nodes |
| 🌟 **Particle Starfield**    | 1,800 color-varied particles rotating slowly to create depth                      |
| 🎥 **Scroll-Driven Camera**  | Camera flies through 8 keyframes as you scroll using smoothstep easing            |
| 🖱️ **Mouse Parallax**       | 3D scene subtly reacts to cursor movement                                         |
| 💎 **Glassmorphism Cards**   | Frosted-glass cards with mouse-follow glow effects                                |
| 📊 **Full Resume Content**   | Summary, skills, experience, projects, education, and certifications              |
| 📱 **Fully Responsive**      | Bootstrap 5 grid adapts to mobile, tablet, and desktop                            |
| ⚡ **Zero Build Step**        | No npm, webpack, React, or other build tools required                             |
| 🌐 **CDN-Only Dependencies** | Bootstrap, Three.js, Google Fonts, and Bootstrap Icons                            |

---

## 🛠️ Tech Stack

| Layer             | Technology                           |
| ----------------- | ------------------------------------ |
| **Structure**     | HTML5                                |
| **Styling**       | CSS3, Bootstrap 5.3                  |
| **3D Graphics**   | Three.js (r147, classic build)       |
| **Interactivity** | Vanilla JavaScript (ES6+)            |
| **Icons**         | Bootstrap Icons                      |
| **Fonts**         | Google Fonts — Space Grotesk + Inter |
| **Form Handling** | FormSubmit — serverless email        |
| **Hosting**       | Netlify                              |

---

## 📁 Folder Structure

```text
harshith-portfolio/
├── index.html             # Main HTML — structure and all sections
├── style.css              # Custom styling, animations, and glassmorphism
├── main.js                # Three.js scene, robot, camera, and scroll logic
├── Harshith_Resume.pdf    # Downloadable resume
└── README.md              # Project documentation
```

---

# 🛠️ Setup & Deployment Guide

This section explains how to run the portfolio locally and deploy it to the internet for free.

---

## 🖥️ Part 1: Run Locally Using VS Code + Live Server

The easiest way to run the project locally is using **Visual Studio Code** and the **Live Server** extension.

No terminal, npm, or build tools are required.

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/) installed
* Project files downloaded or cloned to your computer

---

### Step 1: Install Live Server

1. Open **VS Code**
2. Press `Ctrl + Shift + X` on Windows/Linux
3. Search for **Live Server**
4. Install **Live Server by Ritwick Dey**

---

### Step 2: Open the Project Folder

In VS Code:

```text
File → Open Folder → harshith-portfolio
```

Make sure your folder contains:

```text
index.html
style.css
main.js
Harshith_Resume.pdf
README.md
```

---

### Step 3: Launch the Website

1. Open `index.html`
2. Right-click anywhere inside the file
3. Select:

```text
Open with Live Server
```

Your browser should open automatically at:

```text
http://127.0.0.1:5500/
```

✅ Your portfolio is now running locally.

> ⚠️ **Important:** Do not simply double-click `index.html`.
> Using Live Server is recommended because browser security restrictions can prevent some JavaScript modules and resources from working correctly when opening the file directly.

---

### To Stop the Server

In VS Code, use the **Port: 5500** option in the status bar and stop the running server.

---

# 🌐 Part 2: Deploy for Free Using Netlify Drop

You can deploy the portfolio to the internet using **Netlify** without configuring a traditional server.

### Step 1: Open Netlify Drop

Go to:

https://app.netlify.com/drop

---

### Step 2: Upload Your Project

Drag your complete project folder onto the Netlify Drop page.

Your folder should look like:

```text
harshith-portfolio/
├── index.html
├── style.css
├── main.js
├── Harshith_Resume.pdf
└── README.md
```

> 💡 Upload the **entire project folder** so that all files remain together.

---

### Step 3: Wait for Deployment

Netlify will upload and deploy your website.

After deployment, Netlify will provide a public URL similar to:

```text
https://your-site-name.netlify.app/
```

---

### Step 4: Open Your Live Website

Copy the generated URL and open it in your browser.

Your portfolio is now publicly accessible on the internet. 🚀

---

# 🎯 Portfolio Sections

The portfolio contains sections designed to showcase professional experience and technical skills:

* 🏠 **Home / Hero**
* 👩‍💻 **About Me**
* 🛠️ **Technical Skills**
* 💼 **Professional Experience**
* 🚀 **Projects**
* 🎓 **Education**
* 📜 **Certifications**
* 📩 **Contact**

---

# 🚀 Future Improvements

Possible future enhancements include:

* 🌐 Custom domain integration
* 🌙 Light/Dark theme switching
* 🧠 AI-powered portfolio assistant
* 📊 Interactive project analytics
* 🎨 More 3D animations
* 📱 Further mobile optimization
* 🔗 GitHub API integration
* 📄 Online resume preview
* ✉️ Improved contact form backend

---



---


