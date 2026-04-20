"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeAriaLabel: string;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_STORAGE_KEY = "theme";

function getClientTheme(): Theme {
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ?
      "light"
    : "dark";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  // SSR hydration: server always renders "dark"; this one-time effect corrects
  // to the client's stored preference without a flash.
  useEffect(() => {
    const clientTheme = getClientTheme();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(clientTheme);
    document.documentElement.setAttribute("data-theme", clientTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const toggleThemeAriaLabel =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const value = useMemo(
    () => ({ theme, toggleTheme, toggleThemeAriaLabel }),
    [theme, toggleTheme, toggleThemeAriaLabel],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
