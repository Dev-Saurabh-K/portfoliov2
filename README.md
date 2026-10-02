# IDE Portfolio

A self-contained developer portfolio website with a VS Code-inspired interface.

## Run it

Open `index.html` in any modern browser. No installation or build step is required.

For a local server, from this folder run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Personalize before publishing

Update `portfolio.env.js`. It controls the profile text, email, GitHub address, skills (including percentages), project descriptions, tags, and project links. The static page loads this browser-safe environment file directly, so no build step is required.
