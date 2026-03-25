import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeButton = ({ active, label, icon, onClick }) => (
  <button
    className={active ? "active" : ""}
    onClick={onClick}
    aria-label={`Switch to ${label.toLowerCase()} mode`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleSwitch = (targetTheme) => {
    if (theme !== targetTheme) toggleTheme();
  };

  return (
    <div className="theme-picker">
      <ThemeButton
        active={theme === "light"}
        label="Light"
        icon={<Sun size={18} strokeWidth={2.5} />}
        onClick={() => handleSwitch("light")}
      />
      <ThemeButton
        active={theme === "dark"}
        label="Dark"
        icon={<Moon size={18} strokeWidth={2.5} />}
        onClick={() => handleSwitch("dark")}
      />
    </div>
  );
};
