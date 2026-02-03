 🌍 Vanilla JavaScript SPA – Countries Explorer

A fully functional **Single Page Application (SPA)** built with **pure Vanilla JavaScript**, HTML, and CSS — **no frameworks, no libraries**.

This project demonstrates how modern frontend features such as routing, state management, theming, filtering, and dynamic rendering can be implemented **from scratch**, using only the Web Platform.

---

## ✨ Features

- ⚡ **Single Page Application** without frameworks
- 🧭 **Hash-based routing** (`#/country/:name`)
- 🌗 **Light / Dark mode** using CSS variables
- 🔍 **Search countries by name** (live filtering)
- 🌍 **Filter by region**
- 🧱 **Dynamic component rendering**
- 🧠 **Centralized state management**
- 🚀 **Optimized DOM rendering** with `DocumentFragment`
- ❌ **Error handling & fallback routes**
- 📱 **Fully responsive layout**

---

## 🛠️ Tech Stack

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3** (Flexbox, Media Queries, CSS Variables)
- **REST Countries API**

> No React, no Vue, no Angular. Just JavaScript.

---

## 🧠 Architecture Overview

### State Management

```js
let countriesData = [];
const filters = { name: '', region: '' };
```

- A single source of truth
- Filters are composable and scalable
- Rendering is driven by state changes

---

### Routing

Hash-based routing implemented manually:

```txt
#/                → Countries list
#/country/spain   → Country detail view
```

The router:
- Parses the URL
- Decodes parameters
- Validates routes
- Handles 404 states

---

### Rendering Strategy

- HTML templates are generated with pure functions
- DOM updates are batched using `DocumentFragment`
- No unnecessary reflows or repaints

---

### Event Handling

- Event delegation for dynamic elements
- Clean separation between UI logic and rendering
- Predictable navigation through URL changes

---

## 🌗 Theming System

Light and Dark modes are implemented using **CSS custom properties**:

```css
body.light-mode
body.dark-mode
```

Switching themes only requires toggling a class on `<body>`.

---

## 📦 API

Data is fetched from:

- **REST Countries API**

```txt
https://restcountries.com/v3.1/all
```

Only required fields are requested to reduce payload size.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/will26developer/web-projects.git
```

### 2. Open the project

```bash
cd vanilla-js-countries-spa
```

Simply open `index.html` in your browser.

> No build step. No dependencies. No setup required.

---

## 🎯 Project Goals

- Understand how SPAs work internally
- Avoid framework abstraction
- Master JavaScript, DOM APIs, and browser behavior
- Build scalable frontend architecture from first principles

---

## 🧪 Possible Improvements

- Add unit tests
- Improve accessibility (ARIA roles)
- Normalize search input for edge cases
- Persist theme preference with `localStorage`
- Modularize code using ES modules

---

## 🧑‍💻 Author

Built by a JavaScript Engineer in progress, focused on **deep platform knowledge**, not framework dependency.

---

## 📄 License

This project is open source and available under the **MIT License**.
