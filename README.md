# Devi Dental Clinic - Dental Clinic Website

A modern, responsive, and beautifully designed dental clinic website built with React.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Design & UI

- **Non-generic layouts** with asymmetric sections and overlapping elements
- **Glassmorphic elements** and curved dividers throughout
- **Responsive design** optimized for mobile, tablet, and desktop
- **Premium animations** using Framer Motion with scroll-triggered effects
- **Custom color palette** with Aqua, Cream, Gold, and Dark themes
- **RTL support** for Arabic language with proper text direction

### Pages & Functionality

- **Home Page** with split hero, parallax background, and floating appointment card
- **About Page** with curved sections, image collages, and animated counters
- **Services Page** with 17 detailed service subpages and diagonal card layouts
- **Doctors Page** with 3D flip cards showing detailed bios
- **Gallery Page** with masonry layout and lightbox functionality
- **Contact Page** with EmailJS integration and interactive forms

### Services Include

- Full Mouth Examination (`/services/full-mouth-examination`)
- Hollywood Smile in Devi Dental Clinic (`/services/hollywood-smile-abu-dhabi`)
- Gum Treatment (`/services/gum-treatment`)
- Intra Oral X-Ray (`/services/intra-oral-x-ray`)
- Root Canal Treatment in Devi Dental Clinic (`/services/root-canal-treatment-abu-dhabi`)
- Tooth Extraction in Devi Dental Clinic (`/services/tooth-extraction-abu-dhabi`)
- Teeth Cleaning in Devi Dental Clinic (`/services/teeth-cleaning-abu-dhabi`)
- Dental Crown and Bridges in Devi Dental Clinic (`/services/dental-crown-bridges-abu-dhabi`)
- Dentures (`/services/dentures`)
- Dental Filling in Devi Dental Clinic (`/services/dental-filling-abu-dhabi`)
- Dental MouthGuards (`/services/dental-mouthguards`)
- Dental Implant in Devi Dental Clinic (`/services/dental-implant-abu-dhabi`)
- Wisdom Tooth Extraction in Devi Dental Clinic (`/services/wisdom-tooth-extraction-abu-dhabi`)
- Oral and Maxillofacial Surgery in Devi Dental Clinic (`/services/oral-maxillofacial-surgery-abu-dhabi`)
- Braces in Devi Dental Clinic (`/services/braces-abu-dhabi`)
- Orthodontic Treatment in Devi Dental Clinic (`/services/orthodontic-treatment-abu-dhabi`)
- Invisalign Treatment Devi Dental Clinic (`/services/invisalign-treatment-abu-dhabi`)

### Technical Features

- **React.js 18** with TypeScript for type safety
- **Framer Motion** for advanced animations and micro-interactions
- **Tailwind CSS** with extended custom configuration
- **React Router DOM** for client-side routing
- **EmailJS** integration for contact forms
- **Yet Another React Lightbox** for gallery images
- **Multi-language support** (English/Arabic) with context API
- **SEO optimized** with proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository or extract the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Colors

The color palette can be customized in `tailwind.config.js`:

- **Aqua**: Primary color for branding and CTAs
- **Cream**: Background and accent color
- **Gold**: Highlight and premium elements
- **Dark**: Text and contrast elements

### Content

- **Services data**: Edit `/src/data/services.ts`
- **Doctors data**: Edit `/src/data/doctors.ts`
- **Translations**: Update `/src/contexts/LanguageContext.tsx`

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `/src/pages/Contact.tsx`:
   - Replace `'your_service_id'` with your EmailJS service ID
   - Replace `'your_template_id'` with your EmailJS template ID
   - Replace `'your_public_key'` with your EmailJS public key

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for Devi Dental Clinic SmileCare dental clinic. All rights reserved.

## 🤝 Support

For technical support or customizations, please contact the development team.

---

**Devi Dental Clinic SmileCare** - Your Smile, Our Priority ✨
