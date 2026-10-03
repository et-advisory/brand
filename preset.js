const hsl = (v) => `hsl(var(--${v}))`;
const pair = (v) => ({ DEFAULT: hsl(v), foreground: hsl(`${v}-foreground`) });

const base = ({ addBase, addUtilities }) => {
  addBase({
    "*": { borderColor: hsl("border") },
    body: {
      backgroundColor: hsl("background"),
      color: hsl("foreground"),
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    "h1, h2, h3, h4, h5, h6": { letterSpacing: "-0.02em" },
    "input::placeholder, textarea::placeholder": { color: hsl("muted-foreground") },
    "@media (prefers-reduced-motion: reduce)": {
      "*, ::before, ::after": {
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
        transitionDuration: "0.01ms !important",
        scrollBehavior: "auto !important",
      },
    },
  });
  addUtilities({
    ".text-gradient": {
      background: "var(--eta-heading-gradient)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      backgroundClip: "text",
    },
    ".eta-grid-field": {
      backgroundImage:
        "linear-gradient(hsl(var(--eta-border) / 0.45) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--eta-border) / 0.45) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
    },
    ".eta-grid-field-dark": {
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    },
    ".eta-bloom": {
      background: "radial-gradient(circle at 85% 40%, hsl(var(--eta-accent) / 0.1) 0%, transparent 55%)",
    },
    ".no-scrollbar": { "-ms-overflow-style": "none", scrollbarWidth: "none" },
    ".no-scrollbar::-webkit-scrollbar": { display: "none" },
  });
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        eyebrow: ["11px", { lineHeight: "16px", letterSpacing: "0.18em", fontWeight: "700" }],
      },
      colors: {
        border: hsl("border"),
        input: hsl("input"),
        ring: hsl("ring"),
        background: hsl("background"),
        foreground: hsl("foreground"),
        primary: pair("primary"),
        secondary: pair("secondary"),
        destructive: pair("destructive"),
        muted: pair("muted"),
        accent: pair("accent"),
        popover: pair("popover"),
        card: pair("card"),
        eta: Object.fromEntries(
          [
            "ink", "accent", "accent-hover", "accent-light", "surface", "muted-text", "border",
            "e", "t", "a", "gold",
            "status-progress", "status-progress-fg", "status-active", "status-active-fg", "status-info", "status-info-fg",
            "status-planned", "status-planned-fg", "status-blocked", "status-blocked-fg",
          ].map((k) => [k, hsl(`eta-${k}`)]),
        ),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [base],
};
