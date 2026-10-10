// Tailwind 3 preset over tokens/tokens.css. Load tokens.css before Tailwind's layers.
// Tokens are hex, so color-mix carries the /opacity modifiers.
const c = (token) => `color-mix(in srgb, var(--${token}) calc(<alpha-value> * 100%), transparent)`;
const pair = (bg, fg) => ({ DEFAULT: c(bg), foreground: c(fg) });

const base = ({ addBase, addUtilities }) => {
  addBase({
    "*": { borderColor: "var(--line)" },
    body: {
      backgroundColor: "var(--paper)",
      color: "var(--ink)",
      fontFamily: "var(--font-sans)",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    "h1, h2, h3, h4, h5, h6": { letterSpacing: "-0.02em" },
    "input::placeholder, textarea::placeholder": { color: "var(--ink-muted)" },
    "@keyframes eta-spin": { to: { transform: "rotate(360deg)" } },
    "@keyframes eta-spin-reverse": { to: { transform: "rotate(-360deg)" } },
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
    ".eta-grid-field": {
      backgroundImage:
        "linear-gradient(color-mix(in srgb, var(--line) 45%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--line) 45%, transparent) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
    },
    ".eta-grid-field-dark": {
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    },
    ".eta-bloom": {
      background: "radial-gradient(circle at 85% 40%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 55%)",
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
      fontFamily: { sans: ["var(--font-sans)"], mono: ["var(--font-mono)"] },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        eyebrow: ["12px", { lineHeight: "1.2", letterSpacing: "0.18em", fontWeight: "600" }],
      },
      colors: {
        border: c("line"),
        input: c("ink-faint"),
        ring: c("accent"),
        background: c("paper"),
        foreground: c("ink"),
        primary: pair("accent-fill", "on-accent"),
        secondary: pair("surface", "ink"),
        destructive: pair("danger", "on-accent"),
        muted: pair("surface", "ink-muted"),
        accent: pair("accent-fill", "on-accent"),
        popover: pair("card", "ink"),
        card: pair("card", "ink"),
        success: { DEFAULT: c("success"), bg: c("success-bg") },
        warning: { DEFAULT: c("warning"), bg: c("warning-bg") },
        danger: { DEFAULT: c("danger"), bg: c("danger-bg") },
        eta: {
          ink: c("ink"),
          "band-dark": c("band-dark"),
          "on-band-dark": c("on-band-dark"),
          "on-band-dark-muted": c("on-band-dark-muted"),
          accent: c("accent"),
          "accent-hover": c("accent-strong"),
          "accent-light": c("accent-tint"),
          surface: c("surface"),
          "muted-text": c("ink-muted"),
          border: c("line"),
          e: c("letter-e"),
          t: c("letter-t"),
          a: c("letter-a"),
          gold: c("gold"),
          "status-progress": c("warning-bg"),
          "status-progress-fg": c("warning"),
          "status-active": c("success-bg"),
          "status-active-fg": c("success"),
          "status-info": c("accent-tint"),
          "status-info-fg": c("accent-strong"),
          "status-planned": c("surface"),
          "status-planned-fg": c("ink-muted"),
          "status-blocked": c("danger-bg"),
          "status-blocked-fg": c("danger"),
        },
      },
      // Blue text under 24px must be accent-strong for contrast.
      textColor: {
        primary: { DEFAULT: c("accent-strong") },
        eta: { accent: c("accent-strong") },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
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
