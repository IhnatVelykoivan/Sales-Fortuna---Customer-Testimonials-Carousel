# Sales Fortuna - Customer Testimonials Carousel

A responsive React TypeScript application showcasing customer testimonials with an interactive carousel interface, built as a technical assessment project.

## 🚀 Features

- **Interactive Carousel**: Navigate through testimonials with arrow buttons or touch swipe
- **Touch Support**: Full swipe gesture support for mobile devices
- **Responsive Design**: Optimized layout for desktop, tablet, and mobile
- **Premium Styling**: Modern design with backdrop-blur effects and smooth animations
- **TypeScript**: Full type safety and enhanced developer experience
- **Performance Optimized**: Fast loading with minimal bundle size
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 📋 Requirements Implementation

✅ **H1 Title**: "Voices of Success with Sales Fortuna"  
✅ **Testimonial Blocks**: Company logos, review text, author names and positions  
✅ **Visual Hierarchy**: Clear typography and layout structure  
✅ **Responsive Design**: Adaptive layout for all screen sizes  
✅ **Hover Effects**: Interactive arrow buttons with smooth transitions  
✅ **Navigation**: Left/right arrow functionality with carousel rotation  
✅ **Touch Gestures**: Swipe left/right on mobile devices

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type safety and enhanced development experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with flexbox, backdrop-filter, and animations
- **ESLint** - Code quality and consistency

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd sales-fortuna-testimonials
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   └── TestimonialsCarousel/
│       ├── TestimonialsCarousel.tsx    # Main carousel component
│       └── TestimonialsCarousel.css    # Component styling
├── App.tsx                             # Root application component
├── App.css                             # Global styles
└── main.tsx                            # Application entry point

public/
├── avatars/                            # Author profile images
├── logos/                              # Company logo images
└── index.html                          # HTML template
```

## 🎨 Design Features

### Visual Elements
- **Clean Typography**: Inter font family for modern appearance
- **Subtle Animations**: Smooth hover effects and transitions
- **Glass Morphism**: Backdrop-blur effects for premium look
- **Color Palette**: Professional blue accent colors (#3b82f6)
- **Spacing**: Consistent padding and margins throughout

### Responsive Breakpoints
- **Desktop**: 1024px+ (3 cards visible)
- **Tablet**: 768px - 1023px (2 cards visible)
- **Mobile**: <768px (single card stack with swipe)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## 📱 Mobile Features

### Touch Gestures
- **Swipe Left**: Navigate to next testimonial
- **Swipe Right**: Navigate to previous testimonial
- **Minimum Distance**: 50px swipe threshold for activation
- **Smooth Transitions**: 300ms cubic-bezier animations

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Simplified navigation (arrows hidden on mobile)
- Optimized typography scales
- Single column layout for better readability

## 🎯 Performance Metrics

- **Bundle Size**: ~146KB (gzipped: ~47KB)
- **Build Time**: ~2 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Load Time**: <1 second on fast 3G

## 🧪 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

## 🔄 Carousel Logic

The carousel implements a circular navigation system:
- Displays 3 testimonials simultaneously on desktop
- Cycles through testimonials infinitely
- Maintains smooth transitions between states
- Touch events with proper gesture detection

```typescript
// Example of carousel state management
const getVisibleTestimonials = () => {
  const visible = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visible.push(testimonials[index]);
  }
  return visible;
};
```

## 📝 Code Quality

- **TypeScript Strict Mode**: Enabled for maximum type safety
- **ESLint Rules**: Comprehensive linting configuration
- **Component Architecture**: Clean separation of concerns
- **CSS Organization**: Modular component-based styling
- **Semantic HTML**: Proper accessibility markup

## 🚀 Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform:
    - Vercel
    - Netlify
    - GitHub Pages
    - AWS S3 + CloudFront

## 🤝 Contributing

This is a technical assessment project. For any questions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational and assessment purposes.

---

**Built with ❤️ for Sales Fortuna Technical Assessment**