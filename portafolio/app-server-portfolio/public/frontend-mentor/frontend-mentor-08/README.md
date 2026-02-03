# Bookmark Landing Page

A modern and responsive landing page for a bookmark management application. This project features a clean design with smooth animations and complete interactive functionality.

## 🌟 Features

- **Responsive Design**: Optimized for mobile devices (375px) and desktop (1440px+)
- **Hamburger Menu**: Mobile navigation with full-screen overlay
- **Interactive Tabs**: Tab system to showcase different features
- **FAQ Accordion**: Frequently asked questions with smooth animations
- **Email Validation**: Contact form with real-time validation
- **Animations & Transitions**: Hover effects and smooth transitions throughout
- **Smooth Navigation**: Smooth scroll between sections

## 🎨 Design

### Colors

- **Primary Blue**: `hsl(231, 69%, 60%)` - #5267DF
- **Primary Red**: `hsl(0, 94%, 66%)` - #FA5959
- **Neutral Grey**: `hsl(0, 0%, 97%)` - #F7F7F7
- **Dark Blue**: `hsl(229, 31%, 21%)` - #242A45
- **Grey Text**: `hsl(229, 8%, 60%)` - #9194A2

### Typography

- **Font**: Rubik
- **Weights**: 400 (Regular), 500 (Medium)
- **Base Size**: 18px

## 📁 Project Structure

```
bookmark-landing-page/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── images/             # Image assets folder
    ├── favicon-32x32.png
    ├── logo-bookmark.svg
    ├── logo-bookmark-white.svg
    ├── icon-facebook.svg
    ├── icon-twitter.svg
    ├── icon-arrow.svg
    ├── icon-error.svg
    ├── illustration-hero.svg
    ├── illustration-features-tab-1.svg
    ├── illustration-features-tab-2.svg
    ├── illustration-features-tab-3.svg
    ├── logo-chrome.svg
    ├── logo-firefox.svg
    ├── logo-opera.svg
    └── bg-dots.svg
```

## 🚀 Getting Started

### Prerequisites

No dependencies or build tools required! This is a pure HTML, CSS, and JavaScript project.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bookmark-landing-page.git
```

2. Navigate to the project directory:
```bash
cd bookmark-landing-page
```

3. Make sure all images are in the `images/` folder

4. Open `index.html` in your browser:
```bash
# Using a simple HTTP server (recommended)
python -m http.server 8000
# or
npx serve

# Or simply open the file
open index.html
```

## 💻 Usage

### Navigation

- Click on navigation links to smoothly scroll to sections
- On mobile, use the hamburger menu to access navigation
- Click the X button or any link to close the mobile menu

### Features Section

- Click on tabs (Simple Bookmarking, Speedy Searching, Easy Sharing) to view different features
- Each tab displays a unique illustration and description

### FAQ Section

- Click on any question to reveal the answer
- Only one answer is shown at a time
- Click again to collapse the answer

### Contact Form

- Enter your email address in the input field
- Click "Contact Us" to submit
- Invalid emails will show an error message with visual feedback

## 🎯 Sections

1. **Hero Section**: Main headline with call-to-action buttons
2. **Features Section**: Interactive tabs showcasing key features
3. **Download Section**: Browser extension cards for Chrome, Firefox, and Opera
4. **FAQ Section**: Accordion-style frequently asked questions
5. **CTA Section**: Email signup form with validation
6. **Footer**: Site links and social media icons

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and CSS Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Rubik font family

## ✨ JavaScript Features

### Mobile Menu Toggle
```javascript
// Opens and closes the mobile navigation menu
// Prevents body scroll when menu is open
```

### Tab System
```javascript
// Switches between different feature tabs
// Shows/hides content based on selected tab
```

### FAQ Accordion
```javascript
// Toggles FAQ answers with smooth animations
// Closes other answers when opening a new one
```

### Email Validation
```javascript
// Real-time email validation with regex
// Shows/hides error messages and icons
```

### Smooth Scroll
```javascript
// Smooth scrolling to anchor links
// Works with all internal navigation
```

## 🎨 CSS Highlights

- **CSS Variables**: Organized color system
- **Flexbox & Grid**: Modern layout techniques
- **Transitions**: Smooth hover and state changes
- **Media Queries**: Responsive design
- **Custom Shapes**: Decorative background elements

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --blue-600: hsl(231, 69%, 60%);
  --red-400: hsl(0, 94%, 66%);
  /* Add your custom colors */
}
```

### Modifying Content

All content is in `index.html`. Simply find the section you want to edit and update the text.

### Adding New Features

1. Add HTML markup to `index.html`
2. Style it in `styles.css`
3. Add interactivity in `script.js` if needed

## 📸 Screenshots

### Desktop View
- Full navigation bar
- Side-by-side hero section
- Three-column browser cards

### Mobile View
- Hamburger menu
- Stacked layout
- Touch-friendly buttons

## 🐛 Known Issues

None at the moment. If you find any bugs, please open an issue!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).



## 🙏 Acknowledgments

- Design inspired by Frontend Mentor challenges
- Icons and illustrations from the design files
- Google Fonts for the Rubik font family



---

⭐ **If you found this project helpful, please give it a star!** ⭐