# 🛠 ejaf Documentation

## 📑 Overview

**ejaf** is a modern, modular, and highly interactive web application built using **Next.js**, **React**, **TailwindCSS**, and **Framer Motion**. It features a wide range of content sections like blogs, services, insights, partners, contact, and legal policies. The architecture supports animation, dynamic data fetching with `React Query`, and a reusable component structure.

---

## 📁 Project Structure

```
ejaf/
├── app/                # Main application pages and UI logic
├── components/         # Shared UI components like navbar, footer
├── hooks/              # Custom React hooks
├── providers/          # Context providers (e.g. React Query)
├── requests/           # API abstraction layer
├── utils/              # Utility functions (e.g. axios, date formatting)
├── public/             # Static assets (images, video, etc.)
├── styles/             # Global styles (e.g. Tailwind config)
└── ...
```

---

## 🚀 Features

### 🌐 Pages

- **Homepage**: Animated hero, stats, insight slider, partners.
- **About**: Strategy, aims, hero section with dynamic content.
- **Services**: Includes detailed breakdowns across multiple service categories.
- **Solutions**: What sets the company apart, hero, feature highlights.
- **Insight**: Featured blog posts presented in an image slider.
- **Blog**: List and details of blog posts.
- **Support**: Multi-step form with conditional logic and file uploads.
- **Contact**: Contact form with validation and dynamic rendering.
- **Legal**: Privacy Policy & Terms of Use.

---

## ⚙️ Technologies Used

- **Next.js** (App Router)
- **React.js**
- **Framer Motion** – for animations
- **TailwindCSS** – for utility-first styling
- **React Query** – for data fetching and caching
- **Swiper** – for sliders/carousels
- **Yup** – for form validation
- **Axios** – for HTTP requests

---

## 📦 Components

### 🧩 Shared Components

- `CardContainer`, `CustomCard`, `Info`, `Stats`, `OurInsight`, `OurPartners`
- Skeleton placeholders for all key components (loading states)
- Responsive `Navbar`, `MobileNavbar`, and `Footer`

### 🎞 Animations

Located under `app/_animations/`, including:

- `Fade`
- `SlideUp`
- `ScrollReveal`
- `Smooth` (text animation)
- `CountUp` (stat animation)

---

## 📬 Forms

### Support & Contact Forms

- **Support** form is a **multi-step form** supporting dynamic steps and file uploads.
- **Contact** form includes:

  - Name, email, subject, message
  - Validation via `Yup`
  - Backend integration using `axios`

---

## 📡 Data Layer

### API Abstraction

All requests are organized under `requests/`, grouped by page or feature:

- `requests/homepage/`
- `requests/about/`
- `requests/support/`
- `requests/shared/`

Each file uses `axios` to call a RESTful backend.

---

## 🧪 State & Query Management

- **React Query** handles data caching, refetching, and background updates.
- Static content (like page headers) and dynamic lists (like services, blogs) are cached for performance.

---

## 🖼 Media & Assets

- Uses `.webm` and `.mp4` videos for background animation.
- Image optimization via `next/image`.
- Icons and illustrations reside in the `public/assets/` folder.

---

## 🌍 Internationalization

- Currently hardcoded in English.
- Components designed in a way that allows for easy integration of i18n solutions.

---

## 🧪 Testing & Error Handling

- Each major data-fetching component includes loading and error states.
- Fallback UIs like `Skeletons` and error messages ensure graceful degradation.

---

## 🧰 Environment Configuration

You can configure environment-specific values using:

```
.docker.env.staging
```

---

## 📄 Useful Scripts

Assuming standard scripts in `package.json`:

```bash
npm run dev       # Start local development
npm run build     # Build for production
npm run start     # Start production server
```

---

## 🔒 License

This project is proprietary. All rights reserved.

---

## 👨‍💻 Author & Maintainers

Maintained by the **ejaf team**. Contributions are likely private or internal.
