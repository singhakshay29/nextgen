# Next-Gen Learning Dashboard

A responsive learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Project Overview

The goal of this project was to create a modern, animated student dashboard that combines server-rendered data with smooth client-side interactions while maintaining excellent performance.

## Technical Decisions

### Data Fetching

Course data is fetched from Supabase using Next.js Server Components. This keeps sensitive operations on the server and reduces the amount of client-side JavaScript.

### Component Structure

The application is divided into reusable components:

* Sidebar Navigation
* Hero Section
* Course Cards
* Activity Section
* Loading Skeletons

This makes the UI easier to maintain and scale.

### Animations

Framer Motion is used for:

* Staggered page entry animations
* Card hover effects
* Animated progress bars


## Challenges

### Dynamic Course Layout

The number of courses is not fixed, so the layout was designed to automatically adapt as new courses are added.

### Server and Client Separation

A key challenge was combining Server Components for data fetching with Client Components required for Framer Motion animations.

### Consistent Loading States

The loading skeletons were designed to closely match the final layout to ensure a smooth user experience and eliminate layout shifts.

## Setup

```bash
npm install
npm run dev
```

Environment Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Open `http://localhost:3000` to run the project locally.
