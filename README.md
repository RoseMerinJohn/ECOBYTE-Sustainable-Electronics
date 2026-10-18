# ECOBYTE — Sustainable Electronics Advertisement Website

A five-page responsive website created as a student UI/advertisement assignment aligned with **SDG 12: Responsible Consumption and Production**.

## Pages
1. `index.html` — Home / campaign landing page
2. `products.html` — Product catalogue with working category filters
3. `product-details.html` — Product detail advertisement
4. `sustainability.html` — SDG 12, e-waste and responsible use
5. `contact.html` — Contact form with client-side validation

## Run it
1. Extract the ZIP file.
2. Keep the folder structure unchanged.
3. Open `index.html` in a browser, or use VS Code's Live Server extension.
4. Internet is required for Bootstrap, Google Fonts and the remote product photography.

## Folder structure
```text
ecobyte-website/
├── index.html
├── products.html
├── product-details.html
├── sustainability.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Interactions
- All pages are connected through the shared navigation and footer.
- Product category buttons filter the catalogue.
- Product cards link to the product detail page.
- Contact form validates required fields and email format in the browser.

## Important project notes
- ECOBYTE is a fictional student-design brand.
- Product names, specifications and prices are illustrative, not real commercial offers.
- The contact form is front-end only; it does not send or store submissions.
- Images are loaded from Unsplash URLs and require an internet connection.
- To customize: edit the HTML content, `css/style.css` for design, and `js/main.js` for interactions.


## Ambient music and fluid motion update
- Includes an original, gentle ambient synth loop at `assets/ecobyte-ambient-loop.wav`.
- A floating music dock appears on all five pages with Play/Pause and volume controls.
- Music loops continuously while the page is open. After the user enables music once, the site remembers the preference and attempts to resume it on connected pages.
- Browser autoplay policies can block audio until the user clicks Play; this is expected. The site does not force sound on without a user gesture.
- Adds subtle page entrance, drifting orbit, floating note and hover transitions. Reduced-motion preferences are respected.
- Page navigation reloads each HTML page, so the track may briefly restart between pages; seamless cross-page audio requires a single-page app or a persistent player architecture.
