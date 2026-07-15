import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import "../styles/theme-toggle.css";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={isDark}
        >
            <span className={`theme-toggle-thumb ${isDark ? "dark" : "light"}`}>
                {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </span>
        </button>
    );
}

export default ThemeToggle;