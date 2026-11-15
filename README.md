# The Spartabots website

Static website for FIRST Robotics Competition Team 2976 (Skyline High School, Sammamish, WA). Plain HTML, one stylesheet, one small script. No build step, no dependencies, no backend.

Production: https://spartabots.org

## Run locally

```
python -m http.server 8080
```

Then open http://localhost:8080. Any static file server works.

## Layout

```
index.html, about/, history/, sponsors/, join/, software/, purchase/   pages (each folder has an index.html)
404.html                                                              not-found page
css/site.css                                                          all styles (tokens at the top)
js/site.js                                                            mobile menu and click-to-load YouTube embeds
img/, fonts/                                                          self-hosted images and fonts
```

## Common edits

- **Change text:** edit the page's `index.html`.
- **Add or rename a nav link:** the header and footer are repeated in every page, so update them in all pages (search for `site-nav`).
- **Add a season:** add an `<article class="season">` to `history/index.html`. For a detail page, copy `history/2024/index.html`.
- **Replace the home video:** change `data-video-id` and `data-title` on the `.video` element in `index.html`, and update the caption link.
- **Add images:** export as WebP, about 1280px wide, into `img/`. Always write `alt` text.

## Design rules (keep the site consistent)

- Spacing comes only from the `--s-*` scale (4/8/16/24/32/48/64/96px).
- One radius (`--radius`), no shadows, one accent color. Do not add new colors, radii or fonts.
- Fonts: Barlow Condensed (headings) and Source Sans 3 (body), both SIL OFL, self-hosted.

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`, which publishes the site to GitHub Pages. `CNAME` points the custom domain at it. In the repository settings, set Pages source to "GitHub Actions".
