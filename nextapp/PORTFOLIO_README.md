# Ahqaf Ali - Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a dark theme with zinc color scheme.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Professional dark theme with zinc colors
- **Modern UI**: Built with shadcn/ui components
- **Smooth Scrolling**: Smooth navigation between sections
- **Professional Sections**:
  - Hero section with introduction
  - About section with skills and background
  - Projects showcase with live demos and source code links
  - Contact form with social links
  - Professional footer

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion (optional)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Assets**
   - Add your profile image as `public/profile-image.jpg`
   - Add your resume as `public/Resume.pdf`
   - Add project screenshots to `public/projects/`

3. **Customize Content**
   - Update personal information in components
   - Add your projects in `Projects.tsx`
   - Update contact information in `Contact.tsx`
   - Update social links throughout the components

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Navigation.tsx       # Navigation component
│   └── Projects.tsx         # Projects section
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Personal Information
Update your personal details in:
- `Hero.tsx` - Name, title, and intro
- `About.tsx` - Skills, education, experience
- `Contact.tsx` - Contact information
- `Footer.tsx` - Bio and contact details

### Projects
Add your projects in `Projects.tsx`:
```tsx
{
  name: "Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "etc"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your-repo",
  image: "/projects/project-image.png",
  date: "Month Year",
  featured: true // Set to true for featured projects
}
```

### Styling
- Colors are defined in `globals.css` using the zinc color scheme
- All components use shadcn/ui with consistent dark theme
- Customize colors by updating CSS variables in `globals.css`

### Social Links
Update social media links in:
- `Hero.tsx`
- `Contact.tsx`
- `Footer.tsx`

## Deployment

This portfolio can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Vercel Deployment
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

## Assets Required

To fully customize the portfolio, add these files to the `public/` directory:

- `profile-image.jpg` - Your profile photo
- `Resume.pdf` - Your resume file
- `projects/` folder with project screenshots:
  - `healing-website.png`
  - `ezcode.png`
  - `portfolio.png`
  - `cweb.png`
  - `docsmart.png`
  - `indian-culture.png`

## Contact

- **Email**: ahqaf.dev@gmail.com
- **GitHub**: [@AhqafCoder](https://github.com/AhqafCoder)
- **LinkedIn**: [Ahqaf Ali](https://linkedin.com/in/ahqafali)

## License

This project is open source and available under the [MIT License](LICENSE).