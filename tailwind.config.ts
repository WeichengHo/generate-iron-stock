import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0D47A1",
        "primary-dark": "#003178",
        "background": "#F8FAFC",
        "surface": "#FFFFFF",
        "success": "#065F46",
        "warning": "#F59E0B",
        "danger": "#B91C1C",
        "border": "#E2E8F0",

        // Retaining some original material color names that might be hard-coded in current styles
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F8FAFC",
        "surface-container": "#F1F5F9",
        "surface-container-high": "#E2E8F0",
        "surface-container-highest": "#CBD5E1",

        "on-surface": "#1E293B",
        "on-surface-variant": "#475569",
        "outline": "#64748B",
        "outline-variant": "#94A3B8",

        "primary-container": "#EFF6FF",
        "on-primary-container": "#0D47A1",
        "on-primary": "#FFFFFF",
        "error": "#B91C1C",
        "on-error": "#FFFFFF",
        "error-container": "#FEF2F2",
        "on-error-container": "#991B1B",
      },
      fontFamily: {
        "headline": ["Public Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        "body": ["Public Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        "label": ["Public Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
};
export default config;
