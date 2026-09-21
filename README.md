# Freebbonize

A simple, open-source **Twibbon generator** — let people overlay their photo with an event frame, add a personalized caption, and download the result. Built as a lightweight alternative to Twibbonize that you can fork and re-skin for your own campaign in minutes.

## ✨ Features

- **Upload & preview** — drop in a photo and see it composited with the event frame instantly
- **Adjust** — scale and rotate the photo with sliders, or drag it directly on the canvas to reposition
- **Personalized caption** — auto-fills a caption template with fields the visitor enters (e.g. name, school), with copy-to-clipboard
- **Download** — export the final composited image as a PNG
- **Easy to re-brand** — swap the frame image and edit one JSON file to launch a Twibbon for a different event, no other code changes needed

## 🖥️ How it works

The app walks visitors through three steps, controlled by a single `sidebarState` in `App.tsx`:

1. **Landing** — visitor uploads a photo
2. **Adjust** — visitor scales/rotates/drags the photo over the frame on an HTML5 `<canvas>`
3. **Download** — the canvas is flattened to a PNG for download, alongside a caption generated from a template

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (with the React Compiler enabled)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- [pnpm](https://pnpm.io/) as the package manager

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/GithubFarelAlghazali/freebbonize.git
cd freebbonize

# install dependencies
pnpm install

# start the dev server
pnpm dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

### Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------- |
| `pnpm dev`      | Start the Vite dev server             |
| `pnpm build`    | Type-check and build for production   |
| `pnpm preview`  | Preview the production build locally  |
| `pnpm lint`     | Run ESLint                            |

## 🎨 Customizing for your own event

This project is designed to be forked and re-themed quickly:

1. **Replace the frame** — swap `public/twibbon.png` with your own event frame (a transparent PNG works best, since the user's photo is drawn *underneath* it).
2. **Edit the campaign data** — update `src/campaign-data.json`:

   ```json
   {
     "frameSrc": "/twibbon.png",
     "caption": "Hello my name is [name] from [school] and i am ready to be part of FancyEvent 2026!",
     "props": ["name", "school"]
   }
   ```

   - `caption` is the template shown on the download step. Anything in `[brackets]` is a placeholder.
   - `props` lists which placeholders the visitor gets input fields for — add or remove fields here and they'll automatically appear in the "Adjust caption" form.
3. **Update copy** — change the headline and description text in `src/components/landing-page.tsx` to match your event.

No other code changes are required to launch a new campaign.

## 📁 Project Structure

```
freebbonize/
├── public/
│   └── twibbon.png          # the event frame overlay
├── src/
│   ├── components/
│   │   ├── landing-page.tsx     # step 1: photo upload
│   │   ├── adjust-page.tsx      # step 2: scale/rotate controls
│   │   ├── download-page.tsx    # step 3: caption + download
│   │   └── twibbon-canvas.tsx   # canvas compositing + drag logic
│   ├── campaign-data.json   # frame path, caption template, fields
│   ├── App.tsx               # top-level state machine (landing/adjust/ready)
│   └── main.tsx
└── package.json
```

## 🤝 Contributing

Issues and pull requests are welcome — feel free to fork the repo and submit improvements.

## 📄 License

Licensed under the [MIT License](./LICENSE).
