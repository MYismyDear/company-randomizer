### 📄 `README.md`

```markdown
# Company Randomizer

A simple web platform where companies can **submit their websites**, and users can **randomly discover** new company websites.  
Deployed on [Vercel](https://vercel.com) with backend API integration (supports Supabase for persistence).

---

## 🚀 Features
- Submit your company (name, website, industry)
- Randomly pick one submitted company
- Clean and modern UI
- Supports persistent storage via Supabase
- Fully deployed on Vercel (works even if your computer is off)

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, Vanilla JS  
- **Backend**: Node.js (Vercel Serverless Functions)  
- **Database**: [Supabase](https://supabase.com) (PostgreSQL)  
- **Deployment**: [Vercel](https://vercel.com)  

---

## 📂 Project Structure
```

company-randomizer/
├── public/
│   └── index.html   # Frontend page
├── api/
│   └── companies.js # Backend API (submit & randomize companies)
├── package.json     # Project metadata
└── README.md        # Project documentation

````

---

## ⚡ Setup & Deployment

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/company-randomizer.git
cd company-randomizer
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
vercel dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Deploy to Vercel

```bash
vercel
```

---

## 🔑 Environment Variables (for Supabase)

If you want persistent storage, set these in your Vercel **Project Settings → Environment Variables**:

```
SUPABASE_URL = your-supabase-url
SUPABASE_KEY = your-service-role-key
```

---

## 🌐 Live Demo

👉 [Visit the deployed site](https://your-vercel-deployment-url.vercel.app)

---

## 📌 Roadmap

* [ ] Improve UI/UX with animations
* [ ] Add company categories filter
* [ ] Show list of all submitted companies
* [ ] Add social sharing features

---

## 👤 Author

* **MYismyDear**
* 📧 [pohjunwei0704@gmail.com](mailto:pohjunwei0704@gmail.com)
* 🌟 If you like this project, give it a **star** on GitHub!

```

---


