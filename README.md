# MohanRaaj S - Personal Website

A beautiful, responsive personal portfolio website showcasing projects and professional information.

## 🚀 Live Website
Visit: [mohanraajs.github.io](https://mohanraajs.github.io)

## ✨ Features
- Clean, modern design with smooth animations
- Responsive layout (mobile-first approach)
- Featured projects showcase
- Easy project management system
- SEO optimized
- Fast loading and accessible

## 📁 Project Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and project data
└── README.md          # This file
```

## 🔧 Adding New Projects

To add a new app/project to your website:

1. Open `script.js`
2. Find the `projectsData` array
3. Add your new project object:

```javascript
{
    id: 3, // Increment the ID
    name: "Your App Name",
    type: "Project Type (e.g., Android App, Web Tool)",
    description: "Brief description of what your app does and how it helps people.",
    technologies: ["Tech1", "Tech2", "Tech3"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=your.app.id",
    icon: "📱", // Emoji or you can use Font Awesome icons
    featured: true // Set to true to feature this project
}
```

## 🎯 Managing Featured Projects

Only 2-3 projects should be featured at a time. To update featured projects:

1. Set `featured: true` for projects you want to highlight
2. Set `featured: false` for others
3. Featured projects automatically appear first in the grid

## 🎨 Customization

### Colors
Main colors are defined in `styles.css`:
- Primary: `#2563eb` (Blue)
- Secondary: `#667eea` (Light Blue)
- Background: Various shades of gray and white

### Content
Update your information in `index.html`:
- Hero section: Name, title, location
- About section: Your personal story
- Contact section: Collaboration message

## 📱 Testing

To test your website locally:
1. Simply double-click `index.html` to open in your browser
2. Or right-click → "Open with" → your preferred browser

## 🚀 Deployment

This website is automatically deployed via GitHub Pages:
1. Push changes to the `main` branch
2. GitHub Pages will automatically update your live site
3. Changes may take a few minutes to appear

## 🛠️ Technical Details

- **No build process required** - Pure HTML, CSS, and JavaScript
- **No dependencies** - Uses CDN for fonts and icons only
- **Responsive design** - Works on all device sizes
- **Modern browser compatible** - Uses ES6+ features
- **Accessible** - Semantic HTML and ARIA labels where needed

## 📝 Future Enhancements

Easy additions you can make:
- Add project screenshots/images
- Include a blog section
- Add contact form functionality
- Integrate with analytics
- Add more interactive animations

---

Built with ❤️ for showcasing practical, helpful software solutions.