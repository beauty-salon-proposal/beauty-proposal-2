# Kalai's Beauty Salon & Spa — website

This folder holds the website in **two parts**. Open the one you need, ignore the other.

| Folder | What it is | Do you touch it? |
|---|---|---|
| **`react-web/`** | The **live website** (React + Tailwind). This is the real project. | **Yes — start here.** |
| **`astro-legacy/`** | The **old original version** (Astro). Kept only for reference. | No. Not used, not deployed. |

Everything else at the top here (`vercel.json`, `.nvmrc`, `.gitignore`) is shared setup for hosting. You can leave it alone.

---

## Start here

1. Read **`react-web/START-HERE.md`** — it explains what every file is in plain English.
2. Then read **`react-web/README.md`** — how to run the project on your computer.

## Run the website

```powershell
cd react-web
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Deploy

The site deploys from **`react-web/`** — the `vercel.json` in this folder already points there, so no changes are needed. Details are in `react-web/README.md`.

---

## The old version (`astro-legacy/`)

This is the previous Astro build of the same site. It is **not** part of the live website and is not maintained. It is kept only so we can look back at the original. To run it you would need to install its own dependencies first:

```powershell
cd astro-legacy
npm install
```

Its own notes live in `astro-legacy/README.md`.
