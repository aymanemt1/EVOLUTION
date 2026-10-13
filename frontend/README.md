# EVOLUTION frontend

React 18 UI for Evolution, created with Create React App (`react-scripts` 5). The product overview, features, and full setup are in the [root README](../README.md).

## Setup

```bash
npm install
npm start
```

The dev server uses port 3000. API requests in the source go to `http://127.0.0.1:8000/api` (a few calls use `http://localhost:8000`).

Environment variable names:

- `REACT_APP_API_URL` — defined in `.env`. The source does not read `process.env.REACT_APP_API_URL`.

## Scripts

| Script | Command | What it does |
| --- | --- | --- |
| `start` | `npm start` | Dev server |
| `build` | `npm run build` | Production bundle in `build/` |
| `test` | `npm test` | Jest (`src/App.test.js`, `src/setupTests.js`) |
| `eject` | `npm run eject` | Copy the Create React App config into this project (one way) |

## Layout

`src/Router/router.jsx` defines the routes. Feature folders: `LandingPage`, `Auth`, `Home`, `Exercices`, `CaloriesCalCulator`, `Store`, `SellerHome`, `Context`.
