# EduConnect — Responsive Frontend Website

A responsive education-course landing website built with **HTML5, CSS3 and JavaScript**.

## Features
- Responsive layout using CSS Grid, Flexbox and media queries
- Reusable course cards generated from JavaScript data
- Course search and category filters
- Mobile navigation menu
- Accessibility: semantic landmarks, skip link, labels, keyboard focus styles, accessible button states and live status messages
- Performance: lightweight vanilla JavaScript, deferred script loading, optimized CSS, no frontend framework dependency, reduced-motion support

## Folder structure
```text
complete_HTML_using_website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Run locally
Open this folder in VS Code. You can open `index.html` in a browser, or use the VS Code **Live Server** extension and choose **Open with Live Server**.

## Git and GitHub
Create an empty repository on GitHub named `complete-HTML-using-website`. Open the VS Code terminal in this folder and run:

```bash
git init
git add .
git commit -m "Create responsive EduConnect website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/complete-HTML-using-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. For later changes:

```bash
git add .
git commit -m "Update website"
git push
```

## Deployment using GitHub Pages
1. Push your project to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then click **Save**.
6. Wait for the deployment to finish. GitHub Pages will show your public website URL in the Pages section.

## Demo note
The contact form is frontend-only. It validates required fields and displays a confirmation message but does not send data to a server.
