```markdown
# 🌍 Countries Explorer App

A fullstack web application built with **Node.js, Express, and Vanilla JavaScript** that consumes the REST Countries API through a custom Backend-for-Frontend (BFF) layer.

This project demonstrates clean architecture, server-side filtering, caching strategies, state-driven UI rendering, and SPA-style routing without frontend frameworks.

---

## 🚀 Features

- 🔎 Search countries by name  
- 🌎 Filter countries by region  
- 📄 Detailed country view  
- ⚡ Express backend acting as BFF  
- 🧠 Server-side filtering logic  
- 🗄 In-memory caching with configurable TTL  
- 🌗 Light / Dark theme toggle with persistence  
- 🔁 Hash-based SPA routing  
- ⏳ Loading overlay spinner  
- ❌ Dedicated error state view  
- 🧩 Modular backend architecture  

---

## 🏗 Architecture

Frontend → Express API (BFF) → REST Countries API

### Backend Responsibilities

- Fetch external API data
- Cache responses in memory
- Apply filtering (`name`, `region`)
- Return structured JSON responses

### Frontend Responsibilities

- Manage UI state
- Render dynamic views
- Handle routing via URL hash
- Display loading and error states
- Persist theme preference

---

## 📂 Project Structure

```

portafolio/app-server-portfolio/
│
├── controllers/
│   ├── api-controllers/
│   └── web-controllers/
│
├── services/
│   └── apiCountriesServices.js
│
├── routes/
│   └── apiRoutes/
│
├── configs/
│
├── public/
│   └── frontend-mentor/frontend-mentor-03/
│       ├── assets/
│       │   ├── css/
│       │   └── js/
│       └── index.html
│
├── app.js
└── package.json

```

---

## 🛠 Technologies Used

### Backend
- Node.js
- Express
- REST Countries API
- In-memory caching
- Environment variables

### Frontend
- Vanilla JavaScript (SPA architecture)
- HTML5
- CSS3
- Hash-based routing
- State-driven rendering

---

## ⚙️ Installation

Clone the repository:

```

git clone [https://github.com/will26developer/web-projects.git](https://github.com/will26developer/web-projects.git)
cd web-projects/portafolio/app-server-portfolio

```

Install dependencies:

```

npm install

```

Create a `.env` file:

```

PORT=3300
COUNTRIES_CACHE_TTL=600000

```

Start the server:

```

npm start

```

Open in browser:

```

[http://localhost:3300](http://localhost:3300)

```

---

## 🔄 API Endpoint

```

GET /api/countries

```

Optional query parameters:

- `name`
- `region`

Examples:

```

/api/countries?name=spain
/api/countries?region=Europe
/api/countries?name=united&region=Americas

```

---

## 🧠 Caching Strategy

The backend uses in-memory caching:

- First request fetches data from the external API
- Subsequent requests use cached data
- Cache expires after the configured TTL

This reduces API calls and improves performance.

---

## 📌 Concepts Demonstrated

- Backend filtering instead of frontend filtering
- Separation of concerns
- Modular server architecture
- Defensive programming practices
- Loading state management
- Error state rendering
- SPA-style navigation without frameworks

---

## 👨‍💻 Author

William

---

## 📄 License

MIT
```
