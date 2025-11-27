# Customization Guide

## 🎨 How to Customize Your Portfolio

### 1. Update Personal Information

#### **Hero Section** (`src/components/Hero.jsx`)
```jsx
// Line 15-17: Update your name and title
<h1>Hi, I'm <span className="text-primary">Your Name</span></h1>
<p>Your Job Title</p>
<p>Your brief description...</p>

// Line 35-37: Update resume link
href="YOUR_RESUME_URL"
```

#### **About Section** (`src/components/About.jsx`)
```jsx
// Line 25-35: Update your bio
<p>Your professional summary...</p>

// Line 50-65: Update education details
<p><strong>Your Degree</strong></p>
<p>Your Institution</p>
<p>Your CGPA/Percentage</p>
```

### 2. Update Projects

#### **Projects Section** (`src/components/Projects.jsx`)
```jsx
// Line 7-30: Update project details
const projects = [
  {
    title: 'Your Project Name',
    subtitle: 'Project Type',
    description: 'Detailed description...',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/yourusername/repo',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  // Add more projects...
];
```

**Available Gradients**:
- `from-blue-500/20 to-cyan-500/20` (Blue)
- `from-purple-500/20 to-pink-500/20` (Purple)
- `from-green-500/20 to-emerald-500/20` (Green)
- `from-yellow-500/20 to-orange-500/20` (Orange)
- `from-red-500/20 to-rose-500/20` (Red)

### 3. Update Skills

#### **Skills Section** (`src/components/Skills.jsx`)
```jsx
// Line 11-50: Modify skill categories
const skillCategories = [
  {
    title: 'Category Name',
    skills: [
      { name: 'Skill Name', icon: <IconComponent />, color: '#HexColor' },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

**Available Icons**: Import from `react-icons/fa` or `react-icons/si`

### 4. Update Experience

#### **Experience Section** (`src/components/Experience.jsx`)
```jsx
// Line 35-40: Update company details
<h3>Your Job Title</h3>
<h4>Company Name</h4>

// Line 42-48: Update dates and location
<span>Start Date - End Date</span>
<span>City, State</span>

// Line 55-70: Update responsibilities
<p>Your responsibility 1...</p>
<p>Your responsibility 2...</p>

// Line 75-80: Update tech stack
{['Tech1', 'Tech2'].map((tech) => ...)}
```

### 5. Update Achievements

#### **Achievements Section** (`src/components/Achievements.jsx`)
```jsx
// Line 7-35: Update achievements
const achievements = [
  {
    icon: <IconComponent />,
    title: 'Achievement Title',
    description: 'Achievement description',
    link: 'https://certificate-link.com',
    color: 'from-blue-500 to-cyan-500'
  },
  // Add more achievements...
];
```

### 6. Update Contact Information

#### **Contact Section** (`src/components/Contact.jsx`)
```jsx
// Line 25-40: Update contact details
const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  // Update phone and location...
];
```

### 7. Update Social Links

Update social links in multiple components:

#### **Hero.jsx** (Line 60-85)
#### **Contact.jsx** (Line 95-110)
#### **Footer.jsx** (Line 20-40)

```jsx
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your.email@example.com">
```

### 8. Change Color Scheme

#### **Tailwind Config** (`tailwind.config.js`)
```js
colors: {
  primary: '#0ea5e9',    // Main brand color
  secondary: '#38bdf8',  // Secondary color
  dark: '#0f172a',       // Dark background
  darker: '#020617',     // Darker background
  light: '#e2e8f0',      // Light text
}
```

**Popular Color Schemes**:
- **Blue**: `#0ea5e9` (Current)
- **Purple**: `#a855f7`
- **Green**: `#10b981`
- **Orange**: `#f97316`
- **Pink**: `#ec4899`

### 9. Add New Sections

To add a new section:

1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Navbar.jsx`

```jsx
// App.jsx
import YourSection from './components/YourSection';

function App() {
  return (
    <>
      {/* ... other components */}
      <YourSection />
    </>
  );
}
```

### 10. Update Meta Tags

#### **index.html** (Line 6-9)
```html
<meta name="description" content="Your description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<title>Your Name | Your Title</title>
```

### 11. Add Resume PDF

1. Place your resume PDF in `public/` folder
2. Name it `resume.pdf`
3. Update link in Hero section:
```jsx
href="/resume.pdf"
```

### 12. Customize Animations

#### **Framer Motion Settings**
```jsx
// Adjust animation speed
transition={{ duration: 0.5 }}  // Change 0.5 to your preference

// Adjust animation delay
transition={{ delay: 0.2 }}     // Change 0.2 to your preference

// Adjust animation distance
initial={{ opacity: 0, y: 20 }} // Change y: 20 to your preference
```

## 🎯 Quick Customization Checklist

- [ ] Update name and title in Hero
- [ ] Update bio in About section
- [ ] Update education details
- [ ] Update work experience
- [ ] Add/update projects with real links
- [ ] Update skills list
- [ ] Add achievements with links
- [ ] Update contact information
- [ ] Update all social media links
- [ ] Add resume PDF
- [ ] Update meta tags
- [ ] Change color scheme (optional)
- [ ] Test all links
- [ ] Test mobile responsiveness

## 🚀 After Customization

1. Test locally: `npm run dev`
2. Build: `npm run build`
3. Commit changes: `git add . && git commit -m "Customize portfolio"`
4. Push to GitHub: `git push`
5. Vercel will auto-deploy!

---

**Pro Tip**: Make small changes and test frequently to catch issues early!