# Omar Becerra Sierra — Professional Portfolio

Personal website for **Omar Alexis Becerra Sierra**: Senior Data Engineer working on Azure Databricks Lakehouse platforms for Latin American financial services, and an independent researcher in robust nonparametric statistics and spatial analysis.

**LinkedIn:** [omarbecerrasierra](https://www.linkedin.com/in/omarbecerrasierra)

**Live site:** [omarbecerrasierra.github.io](https://omarbecerrasierra.github.io)

## Purpose

The site pairs production engineering experience with peer-reviewed research, linking to publications, ORCID, Google Scholar, and open-source work.

Every institutional statement is limited to what a public record supports. The independent research practice claims no current institutional affiliation, appointment, or position: Universidad EAFIT appears as `alumniOf` in the structured data in the education timeline, and as a past consulting employer, and publication affiliations are explicitly labelled as the information printed in each article at the time of publication.

Client names for staffing engagements are deliberately withheld; roles describe the client's sector instead. Research described as applied to citizen security phenomena names no data-providing entity, and the site publishes no maps, figures, or microdata derived from that work.

## Structure

```text
.
├── index.html                 # Main profile: research, engineering, publications
├── 404.html                   # GitHub Pages error page
├── assets/
│   ├── cv/HVOmarEspanol.pdf    # Spanish CV, downloadable from hero and Engineering
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

- Edit research, publications, projects, engineering roles, and profile links in `index.html`.
- Keep DOI and institutional links as the source of truth.
- Update the `lastmod` date in `sitemap.xml` after material changes.
- Do not add a `CNAME` file unless a custom domain is intentionally restored.

## Technical principles

- Semantic HTML and keyboard-accessible navigation
- Responsive layout with light and dark themes
- Reduced-motion and print support
- Structured person metadata (schema.org `Person`) for search engines and AI agents
- No analytics, cookies, frameworks, or external font dependencies

## Follow-up

- Keep `assets/cv/HVOmarEspanol.pdf` up to date with the site's roles and dates. The hero and Engineering section link directly to this Spanish CV.
- Add MMA to LinkedIn Projects: **Geospatial deep learning · Remote sensing**. Repository: https://github.com/omarbecerrasierra/MMA. Technologies: PyTorch, U-Net, Remote sensing, Satellite imagery, Semantic segmentation.
- Future work: an open-data geospatial case study, a methodological note on spatial privacy, and a Spanish version of the site.
