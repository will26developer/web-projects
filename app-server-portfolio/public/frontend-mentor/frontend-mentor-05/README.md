# Single Price Grid Component

This project is a solution to the **Single Price Grid Component** challenge from **Frontend Mentor**.
The objective is to build a responsive pricing component that closely matches the provided design using only **HTML and CSS**.

---

## 📸 Preview

A responsive pricing grid composed of three sections:
- Community introduction
- Monthly subscription pricing
- Reasons to join

The layout adapts seamlessly from mobile to desktop using CSS Grid.

---

## 🛠️ Built With

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties (variables)
- Mobile-first workflow
- Custom font loading with `@font-face`

---

## 📐 Layout & Responsiveness

### Mobile (default)
- Single-column layout
- Sections stacked vertically
- Optimized for small screens (375px minimum)

### Desktop (≥ 800px)
- Grid-based layout
- Header section spans full width
- Pricing and benefits sections displayed side by side

```css
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);


🎯 Features

Fully responsive design

Clean and semantic HTML

Reusable design tokens using CSS variables

Grid + Flexbox combination for layout control

Call-to-action button styling

Consistent typography and spacing
