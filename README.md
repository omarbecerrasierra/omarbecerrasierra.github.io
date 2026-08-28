# Omar Becerra Sierra — Research Portfolio

Personal academic website for **Omar Alexis Becerra Sierra**, focused on applied mathematics, robust statistics, synthetic data, optimization, and machine learning.

**Live site:** [omarbecerrasierra.github.io](https://omarbecerrasierra.github.io)

## Purpose

The site presents a research-first professional identity with verifiable links to publications, ORCID, Google Scholar, a Universidad EAFIT email and repository record, and open-source work. Institutional roles are described conservatively and no formal PI title is claimed.

## Structure

```text
.
├── index.html                 # Main research profile
├── 404.html                   # GitHub Pages error page
├── assets/
│   ├── css/styles.css         # Responsive design, themes, and print styles
│   ├── images/favicon.svg     # Site identity mark
│   └── js/main.js             # Theme, navigation, and progressive motion
├── robots.txt                 # Search crawler rules
├── sitemap.xml                # Search index map
├── site.webmanifest           # Browser/app metadata
└── .nojekyll                  # Serve the static files directly
```

## Publishing

GitHub Pages publishes the repository directly from the `main` branch. No build process or third-party package is required.

To preview locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Updating content

- Edit research, publications, projects, and profile links in `index.html`.
- Keep DOI and institutional links as the source of truth.
- Update the `lastmod` date in `sitemap.xml` after material changes.
- Do not add a `CNAME` file unless a custom domain is intentionally restored.

## Technical principles

- Semantic HTML and keyboard-accessible navigation
- Responsive layout with light and dark themes
- Reduced-motion and print support
- Structured person metadata for search engines
- No analytics, cookies, frameworks, or external font dependencies
