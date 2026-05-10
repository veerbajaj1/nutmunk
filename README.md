# Nutmunk Premium Static Website v2

This is a mobile-friendly static website for Nutmunk, built for GitHub Pages.

## Quick Deployment on GitHub Pages

1. Create a public GitHub repository, for example `nutmunk-website`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Save.
6. Add your domain DNS settings and keep the `CNAME` file as `nutmunk.com`.

## Future Updates

Most routine updates can be made in:

```text
site-config.js
```

Edit this file to change:

- Phone number
- WhatsApp number
- Email
- Location
- Product categories
- Product cards
- WhatsApp pre-filled messages
- Benefits

## Logo Fix

The included logo files are transparent SVG/PNG assets extracted from your uploaded Nutmunk logo files. They do not include a beige/white background.

## Image Updates

Replace images inside:

```text
assets/images/
```

Keep the same filenames if you do not want to update the HTML/config.

## Main Files

- `index.html` — page structure
- `site-config.js` — editable content
- `assets/css/style.css` — design and mobile responsiveness
- `assets/js/script.js` — menu, WhatsApp links, editable sections
- `assets/logo/` — transparent Nutmunk logo assets
- `assets/images/` — website product/packaging visuals
