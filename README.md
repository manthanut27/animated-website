# Animated Website Project

This is a modern, single-page web application (SPA) built with React and Vite. It heavily focuses on smooth, intricate animations and a dynamic user interface.

## 🛠 Libraries Used

Here is a comprehensive list of the core technologies and libraries used in this project:

### Core Framework & Build Tool
- **React (`react`, `react-dom`)**: The foundational UI library used to build reusable and modular components.
- **Vite (`vite`, `@vitejs/plugin-react`)**: A lightning-fast, modern build tool and development server that provides instant server start and significantly faster Hot Module Replacement (HMR).

### Routing
- **React Router DOM (`react-router-dom`)**: Handles client-side navigation. It ensures smooth transitions between different pages (`/`, `/gallery`, `/nature`) without requiring a full browser refresh.

### Animation
- **GSAP - GreenSock Animation Platform (`gsap`, `@gsap/react`)**: A robust, high-performance animation library used for orchestrating complex, timed layout and DOM visual changes. The `@gsap/react` package specifically bridges GSAP smoothly with React's lifecycle and context.

### Styling
- **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`)**: A utility-first CSS framework for rapidly styling components without needing external CSS sheets. Integrated smoothly into the Vite pipeline allowing immediate rendering of utility classes.

---

## ⚙ How the Website Works

### 1. The Core Architecture
The structural foundation of the application resides in `src/main.jsx` and `src/App.jsx`. The application is an SPA where the outer shell (like navigation menus) remains static while the internal page routes update dynamically.

### 2. Global State via Context API
The app uses React Context (`NavContext.jsx`) specifically to manage the **Navigation state** across the application:
  - **Menu Toggle**: Manages whether the `FullScreenNav` is currently visible.
  - **Dynamic Theming**: Listens to the current route (via `useLocation()`) and adapts the navigation bar text/icon color dynamically (e.g., changing to black when on the `/gallery` or `/nature` routes).

### 3. Routing & Pages
The `App` component defines top-level routes matching URLs to specific page components:
- Home Page (`/`)
- Gallery Page (`/gallery`)
- Nature Page (`/nature`)

`Navbar` and `FullScreenNav` sit outside the React Router `Routes` wrapper, meaning they continuously persist across the app regardless of what page is active. 

### 4. Advanced Page Transitions (The "Stairs" Effect)
Whenever a user navigates between pages, an intricate global animation is triggered:
- The custom `Stairs.jsx` global wrapper encapsulates all route rendering logic.
- It utilizes GSAP timelines to read route changes via `useLocation()`.
- On route change, it animates a multi-step curtain transition ("stairs") using staggered heights. It temporarily covers the screen with 5 colored blocking divisions, swaps the underlying React route in the background, and dynamically reveals the newly mounted page with scale and opacity animations.
