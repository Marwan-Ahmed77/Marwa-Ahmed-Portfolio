# Marwan Ahmed — ERP Consultant Portfolio

A world-class personal portfolio site built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed to position you as a high-value ERP Consultant and Project Manager.

---

## 🚀 Deploy to Vercel (5 minutes)

### Option A — GitHub + Vercel (Recommended)

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/marwan-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects Next.js — just click **Deploy**

4. Your site will be live at `https://marwan-portfolio.vercel.app` in ~2 minutes

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## ✏️ How to Update Content

All content is stored directly in the component files. Here's a quick map:

| What to change | File |
|---|---|
| Your name, headline, stats | `components/Hero.tsx` |
| About Me paragraphs & tags | `components/About.tsx` |
| Expertise areas & skills | `components/Expertise.tsx` |
| Case studies (projects) | `components/CaseStudies.tsx` |
| Work experience & education | `components/Timeline.tsx` |
| Why Hire Me points | `components/WhyMe.tsx` |
| Email, phone, LinkedIn | `components/Contact.tsx` + `components/Footer.tsx` |
| Profile photo | Replace `public/profile.png` |

### Update your email
Search for `marwan.ahmed@email.com` in:
- `components/Contact.tsx`
- `components/Footer.tsx`

Replace with your real email address.

### Update your LinkedIn
Search for `linkedin.com/in/marwan-ahmed` and replace with your actual LinkedIn URL.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
marwan-portfolio/
├── app/
│   ├── globals.css        # Design tokens, fonts, base styles
│   ├── layout.tsx         # SEO metadata, root layout
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Nav.tsx            # Sticky navigation
│   ├── Hero.tsx           # Hero section with photo
│   ├── About.tsx          # About / value proposition
│   ├── Expertise.tsx      # 6-area expertise grid
│   ├── CaseStudies.tsx    # Interactive case studies
│   ├── Timeline.tsx       # Experience & education
│   ├── WhyMe.tsx          # Differentiators & metrics
│   ├── Contact.tsx        # Contact CTA
│   └── Footer.tsx         # Footer
├── public/
│   └── profile.png        # Your profile photo
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎨 Design System

**Fonts**: Cormorant Garamond (display) + DM Sans (body) + DM Mono (labels)

**Colors** (edit in `app/globals.css`):
- `--gold: #C9A84C` — primary accent
- `--ink: #0A0A0F` — background
- `--surface: #0f1420` — card background
- `--text-primary: #f0ece3` — headings
- `--text-secondary: #8a90a0` — body text

---

## 📄 Custom Domain

In Vercel dashboard → Settings → Domains → Add your domain (e.g., `marwanfcih.com`)

---

Built with intention. Designed to convert.
