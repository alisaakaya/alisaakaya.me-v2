# Personal Portfolio Website

A simple **static portfolio site** built with HTML + Tailwind (via CDN), no frameworks, no build step.  
Deploys instantly on [Netlify](https://www.netlify.com).

---

## 🚀 Quick Start

1. Clone this repo or download the files.
2. Edit `index.html` — update your **name, projects, skills, experience, and contact info**.
3. Drop your PDF resume into the `assets/` folder and update the nav link if needed.
4. Deploy to Netlify:
   - **Drag & Drop:** Go to [Netlify → Add New Site → Deploy manually](https://app.netlify.com/start), drag your folder.
   - **From Git:** Push to GitHub and connect the repo in Netlify.

That’s it — no build pipeline required.

---

## Demo

<img width="1490" height="807" alt="Screenshot 2025-09-02 at 11 33 10 AM" src="https://github.com/user-attachments/assets/6d4215ad-e199-4609-903d-a30ff508f30e" />

---

## 📁 Project Structure
portfolio-netlify/
├── index.html        # main page with all sections
├── styles.css        # optional extra styles (most via Tailwind classes)
├── script.js         # mobile nav toggle, smooth scroll, footer year
├── netlify.toml      # Netlify config (static publish + headers)
├── assets/           # static assets (resume, headshot, etc.)
└── README.md         # project documentation

---

## 📝 Notes

- **Forms:** Contact form submissions show up in your Netlify dashboard (Forms tab).
- **Custom Domain:** Add via Netlify → Domain settings.
- **HTTPS:** Free SSL via Let’s Encrypt is automatic.

---

## 📜 License

Feel free to use and modify for your own personal site.
