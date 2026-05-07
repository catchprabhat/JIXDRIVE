import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "jixdriveTheme";

/**
 * Class-based light/dark theme (same idea as KZPLUS `driveEasyTheme`).
 * Toggles `dark` on document.documentElement and persists to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        setTheme("dark");
      }
    } catch {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
