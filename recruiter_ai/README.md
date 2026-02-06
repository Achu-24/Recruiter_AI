# RecruiterAI

RecruiterAI is a premium, AI-powered recruiting platform landing page designed with a high-end SaaS aesthetic. It features a modern dark/light mode system, glassmorphism effects, and smooth animations.

![RecruiterAI Hero](https://via.placeholder.com/800x400?text=RecruiterAI+Preview)

## ✨ Features

- **Premium UI/UX**: Designed with a strict, high-contrast color palette and modern typography (Geist/Inter style).
- **Theme System**: Robust Light/Dark mode interaction using `next-themes`.
    -   **Always-Dark Sections**: The Hero and Final CTA sections maintain a premium dark aesthetic regardless of the global theme.
    -   **Adaptive Navbar**: Smoothly transitions between light and dark glassmorphism states.
-   **Interactive Components**:
    -   **Floating Conversation Cards**: Animated testimonials that float around the hero section.
    -   **Particle CTA**: A final call-to-action with gradient mesh and floating particle animations.
    -   **Sliding Theme Toggle**: A custom-built, physics-based pill switch with sun/moon integration.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](App Router)
-   **Styling**: [Tailwind CSS v4]
-   **Animations**: [Framer Motion]
-   **Icons**: [Lucide React]
-   **Theming**: [next-themes]

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Achu-24/Recruiter_AI.git
    cd Recruiter_AI
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open locally**:
    Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Global layout with ThemeProvider
│   ├── page.tsx        # Landing page composition
│   └── globals.css     # Global styles & strict palette variables
├── components/
│   ├── Navbar.tsx      # Responsive nav with ThemeToggle
│   ├── Hero.tsx        # Dark theme hero with floating cards
│   ├── CTA.tsx         # Premium CTA with particle effects
│   ├── ThemeToggle.tsx # Custom animated theme switch
│   └── ...
```

## 🎨 Color Palette

The design strictly adheres to the official RecruiterAI palette:

-   **Accents**: `#A5D8FF`, `#D0BCFF`, `#B197FC`
-   **Primary**: `#3B82F6` (Blue)
-   **Backgrounds**: `#EFF6FF` (Light Primary), `#000000` (Dark Primary)

## Figma Design Link:

https://www.figma.com/design/gfyco8T5c4UrR0nQ8CSax6/Onesol-Assignment?node-id=0-1&t=40cIawDsATfSHLOL-1

## Deployment Link:

