# My Portfolio (2026 Major Update)

Simple personal portfolio website.

Website: [https://www.elpis.cc/](https://www.elpis.cc/)

My Resumes:
- [Back-end](https://drive.google.com/file/d/127RxKJi5uK3BXk3Q_ccdLGD1OdD7KWXy/view?usp=sharing)
- [Front-end](https://drive.google.com/file/d/16vQEazygxCaO3bnAoXv9h9_GUErs4gDw/view?usp=sharing)
- [Full Stack](https://drive.google.com/file/d/1epo1MRhzLvO5u7gDaOSRH0Ppm8FSUPsV/view?usp=sharing)

## Deploying to Cloudflare Workers

The site builds with [OpenNext](https://opennext.js.org/cloudflare) and deploys as a Worker named `elpis-portfolio`.

```bash
npx wrangler login
```

```bash
npm run deploy
```

`npm run preview` builds the same bundle and serves it locally in the Workers runtime at http://localhost:8787.

The contact form's `NEXT_PUBLIC_EMAILJS_*` keys are read at build time, so they need to be in `.env` before you deploy (or in the build variables if you connect the repo to Workers Builds, with build command `npx opennextjs-cloudflare build` and deploy command `npx opennextjs-cloudflare deploy`).

To serve the site from `www.elpis.cc`, uncomment the `routes` entry in `wrangler.jsonc` once the domain's DNS is on Cloudflare, then deploy again.
