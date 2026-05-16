# Ecommerce Fullstack Design - Frontend

A responsive ecommerce web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- clsx & tailwind-merge
- Lucide React (icons)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileSidebar.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── DealsSection.tsx
│       ├── CategorySection.tsx
│       ├── MobileCategorySection.tsx
│       ├── InquiryBanner.tsx
│       ├── RecommendedSection.tsx
│       ├── ServicesSection.tsx
│       └── SuppliersSection.tsx
├── hooks/
│   └── use-mobile.ts
├── lib/
│   ├── data.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/m-faizan-adill/ecommerce-fullstack-design-FE.git
cd ecommerce-fullstack-design-FE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add assets

Place the `assets` folder inside the `public` directory:

```
public/
└── assets/
    ├── Image/
    ├── Layout/
    └── Layout1/
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |

## Components

### Layout

| Component | Description |
|-----------|-------------|
| `Header` | Desktop and mobile top navigation with search |
| `Footer` | Links, newsletter subscription, and social icons |
| `MobileSidebar` | Slide-in sidebar for mobile with nav links |

### Sections

| Component | Description |
|-----------|-------------|
| `HeroSection` | Category sidebar, banner image, and user action cards |
| `DealsSection` | Product deals with live countdown timer |
| `CategorySection` | Desktop grid layout for product categories |
| `MobileCategorySection` | Horizontal scroll category list for mobile |
| `InquiryBanner` | Send quote to suppliers banner with form |
| `RecommendedSection` | Recommended product grid |
| `ServicesSection` | Extra services with image overlays |
| `SuppliersSection` | Suppliers listed by region with flags |

## Product Schema

| Field | Type | Required |
|-------|------|----------|
| id | string | Yes |
| name | string | Yes |
| price | number | Yes |
| image | string | Yes |
| description | string | Yes |
| category | string | Yes |
| stock | number | Yes |

## Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile | Single column, horizontal scroll sections, hamburger menu |
| Desktop (lg+) | Multi-column grid, full sidebar, expanded header |