import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[
        "relative p-2 rounded-lg transition-all duration-300 ease-in-out shrink-0",
        isDark
          ? "bg-white hover:bg-white/95 text-gold border border-gold/30"
          : "bg-slate-100 hover:bg-slate-200 text-slate-600",
        "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
        isDark ? "focus:ring-offset-slate-950" : "focus:ring-offset-white",
      ].join(" ")}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      data-testid="theme-toggle"
    >
      <span className="relative block w-5 h-5">
        <Sun
          className={[
            "absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out",
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
          ].join(" ")}
          aria-hidden
        />
        <Moon
          className={[
            "absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out",
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
          ].join(" ")}
          aria-hidden
        />
      </span>
    </button>
  );
}
