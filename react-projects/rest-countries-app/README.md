# 🌍 REST Countries – Fullstack SPA

A production-ready **Single Page Application** built with **React** on the frontend and a custom **Backend-for-Frontend (BFF)** powered by **Node.js + Express** on the backend.

This project demonstrates that modern web architecture is about **deliberate decisions**, not framework dependency. Every layer has a clear responsibility, and every pattern was chosen for a reason.

---

## 🚀 Live Demo

[View Live App](https://web-projects-onrq.onrender.com)

---

## ✨ Features

- ⚡ **Single Page Application** with client-side routing via React Router
- 🧠 **Global state management** using Context API + useReducer pattern
- 🔁 **Custom hooks** encapsulating all business and data logic
- 🌗 **Light / Dark mode** with localStorage persistence
- 🔍 **Search by name** with debounced input to minimize API calls
- 🌍 **Filter by region** with composable filter state
- 🚀 **BFF layer** that fetches, transforms, and caches external API data
- 🛡️ **Differentiated error handling** — API errors vs global server errors
- 📱 **Fully responsive layout**

---

## 🛠️ Tech Stack

### Frontend
- **React** — functional components, hooks, JSX
- **React Router** — client-side SPA navigation
- **Context API + useReducer** — predictable global state
- **Custom Hooks** — encapsulated data fetching and business logic
- **CSS3** — Flexbox, CSS Variables, Media Queries

### Backend
- **Node.js + Express** — HTTP server and API layer
- **CORS** — controlled cross-origin access
- **In-memory cache** — Map-based caching to reduce redundant external calls
- **Custom error handler** — differentiates between external API failures and global server errors

---

## 🧠 Architecture Overview

### Backend-for-Frontend (BFF)

The server acts as an intermediary between the React client and the external REST Countries API. It does not simply proxy requests — it **transforms, cleans, and normalizes** the data before serving it as structured endpoints.

```
React Client → Express BFF → REST Countries API (external)
                ↓
         Transforms & cleans data
                ↓
         Serves normalized endpoints
                ↓
         Caches responses in memory
```

This keeps the frontend free from raw API complexity and makes the data contract predictable and stable.

---

### In-Memory Cache

Responses from the external API are cached using a native JavaScript **Map**. This eliminates redundant network calls for data that rarely changes.

```js
const cache = new Map();

if (cache.has(key)) return cache.get(key);
const data = await fetchFromExternalAPI();
cache.set(key, data);
```

A Map was chosen over Redis deliberately — the app runs in a single Node.js process and the data is static enough that distributed caching would be overengineering. This is a conscious architectural decision, not a limitation.

---

### Error Handling

The server distinguishes between two error types:

- **External API errors** — failures when fetching from REST Countries API, returned with context-specific messages
- **Global server errors** — unexpected runtime errors, caught by a centralized Express error handler middleware

This separation keeps error responses meaningful and debuggable on both client and server.

---

### Frontend State Management

Global state is managed with **Context API + useReducer**, avoiding unnecessary third-party dependencies for a predictable and auditable state machine.

```
useReducer → dispatches actions → reducer updates state → Context provides state to tree
```

Business logic and data fetching are fully extracted into **custom hooks**, keeping components clean and focused on rendering.

---

### Routing

Client-side navigation is handled by **React Router**. The Express server is configured with a catch-all fallback route that serves the React app for any unmatched path, enabling full History API support without 404s on direct URL access.

---

### Debounced Search

The search input uses a **debounce function** to delay API calls until the user stops typing, preventing redundant requests on every keystroke.

---



---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/will26developer/web-projects.git
cd rest-countries-fullstack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

```bash
cp .env.example .env
```

### 4. Run in development

```bash
npm run dev
```

### 5. Build and run in production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

The app is deployed on **Render** as a single service:

- Express serves the React build from the `public/` folder
- All unknown routes fall back to `index.html` for SPA support
- Environment variables are configured via Render's dashboard

---

## 🎯 Project Goals

- Build a production-grade fullstack architecture without unnecessary complexity
- Demonstrate that **frameworks are choices, not requirements**
- Apply separation of concerns across every layer — client, server, and data
- Make deliberate architectural decisions and be able to defend each one

---

## 🧪 Possible Improvements

- Add unit and integration tests with Vitest
- Implement cache invalidation strategy with TTL
- Add loading skeletons for better UX
- Improve accessibility with ARIA roles

---

## 🧑‍💻 Author

**William**
Frontend / Full-Stack Developer — focused on deep platform knowledge and clean architecture.

[Portfolio](https://web-projects-wr3v.vercel.app) · [GitHub](https://github.com/will26developer)

---

## 📄 License

This project is open source and available under the **MIT License**.
