# React Portfolio - Sithum Imesh

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project showcases professional experience, skills, projects, and contact information with smooth animations and an elegant design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Video Background**: Atmospheric background with opacity overlay
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Component-Based**: Modular architecture for easy maintenance
- **Fast Performance**: Optimized with Vite's lightning-fast build tool

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── VideoBackground.jsx
│   │   ├── PageLoader.jsx
│   │   ├── LeftSidebar.jsx
│   │   └── CircularNavigation.jsx
│   └── sections/
│       ├── Introduce.jsx
│       ├── About.jsx
│       ├── Resume.jsx
│       ├── Certificate.jsx
│       ├── Skills.jsx
│       ├── Project.jsx
│       ├── Assignment.jsx
│       ├── Gallery.jsx
│       ├── Services.jsx
│       └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#28e98c', // Change this to your preferred color
    },
  },
}
```

### Update Content

- **Personal Info**: Edit `src/components/layout/LeftSidebar.jsx`
- **Projects**: Update the `projects` array in `src/components/sections/Project.jsx`
- **Skills**: Modify `src/components/sections/Skills.jsx`
- **Contact Form**: Customize `src/components/sections/Contact.jsx`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sithum Imesh**

- GitHub: [@Sithum1220](https://github.com/Sithum1220)
- Twitter: [@SithumImesh](https://twitter.com/SithumImesh)
- Facebook: [Sithum Imesh](https://web.facebook.com/sithum.imesh.75)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Fonts from Google Fonts (Inter, Josefin Sans)
