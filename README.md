# IDE Portfolio

A self-contained developer portfolio website with a VS Code-inspired interface, all in a single `index.html` file.

## Run it

Open `index.html` directly in any modern browser. No installation or build step is required.

For a local server, from this folder run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Personalize before publishing

All styles, data, and scripts are consolidated in `index.html`.
To personalize your portfolio, edit the `window.PORTFOLIO_ENV` configuration object located at the top of the `<script>` block inside `index.html`. It controls:
- Profile details (headline, title, summary, email, GitHub)
- Skills toolkit and proficiency levels
- Featured projects, links, tech tags, and case studies
