# Mazidul Portfolio

A static, data-driven portfolio for GitHub Pages.

## Edit content
For normal updates, edit only `site.data.js`. Add projects/writing entries there and create the referenced content HTML.

## Structure
- `index.html` — homepage shell
- `pages/` — reusable page shells
- `site.data.js` — content/configuration
- `render.js` — rendering logic
- `styles.css` — the ONLY stylesheet
- `content/` — project and writing content
- `assets/images/` — images/files
- `incoming/` — future document-to-page workflow
- `.github/workflows/` — optional automation

## Photo
Replace `assets/images/profile-placeholder.svg` with your own photo, or change `profile.photo` in `site.data.js`.

## Important: admin/backend
GitHub Pages does not provide a secure server-side login or database. Do not put passwords/API secrets in browser JavaScript. This repository therefore does not fake an admin login.

For automatic DOCX/PDF publishing, the recommended next step is GitHub Actions: upload a document to `incoming/writings/` or `incoming/projects/`, have an action convert it, update `site.data.js`, and commit the generated page. The workflow is intentionally kept as a separate extension so the public site stays simple and secure.
