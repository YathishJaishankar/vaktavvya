# Deploy Samriddhi’s Portfolio

## Option A: Netlify (drag‑and‑drop, fastest)

1. Run `npm run build` (already done). The `dist/` folder is ready.
2. Go to [netlify.com](https://netlify.com) and sign in/up.
3. Drag the entire `dist/` folder onto the “Sites” page.
4. Your site will be live at a random `.netlify.app` URL.
5. (Optional) Add a custom domain under Site settings > Domain management.

## Option B: Vercel (CLI)

1. Install Vercel CLI if you haven’t:
   ```bash
   npm i -g vercel
   ```
2. From the project root:
   ```bash
   vercel --prod
   ```
3. Follow the prompts; your site will be live at a `*.vercel.app` URL.

## Option C: GitHub + Netlify/Vercel (auto‑deploy)

1. Push this repo to GitHub.
2. In Netlify/Vercel, import the GitHub repo.
3. Enable auto‑deploy on pushes to `main`.

## Notes

- The build output is in `dist/`.
- `netlify.toml` is included for SPA routing.
- All assets are bundled; no server required.
