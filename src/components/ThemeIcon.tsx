import { useEffect, useState } from "react";

// Responsive theme icon button: shows sun/moon, adapts to mobile/desktop
const ThemeIcon = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // Toggle theme
  const toggleTheme = () => setDark((d) => !d);

  if (!mounted) return null;

  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-secondary
        w-10 h-10 md:w-12 md:h-12"
      style={{ minWidth: 40, minHeight: 40 }}
    >
      {dark ? (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7 text-yellow-300"
        >
          <path
            d="M21 12.79A9 9 0 0112.21 3a1 1 0 00-1.13 1.32A7 7 0 1019.68 13.92a1 1 0 001.32-1.13z"
          />
        </svg>
      ) : (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7 text-yellow-400"
        >
          <circle cx="12" cy="12" r="5" />
          <g>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
          </g>
        </svg>
      )}
    </button>
  );
};

export default ThemeIcon;
