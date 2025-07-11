import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

//can Apply theme colors on all component.
export const themeColors = (theme) => {
  return {
    borderColor: theme === "light" ? "border-zinc-300" : "border-zinc-800",
    textColor: theme === "light" ? "text-black" : "text-white",
    smTextColor: theme === "light" ? "text-gray-600" : "text-gray-400",
    bgColor: theme === "light" ? "bg-white" : "bg-gray-900",
    buttonBg:
      theme === "light"
        ? "bg-gradient-to-r from-blue-400 to-purple-400"
        : "bg-[#2a2d34] hover:bg-[#2a2d34]",
  };
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to light mode
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;

    // fallback to system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // useEffect(() => {
  //   // Check for saved theme preference or default to light mode
  //   const savedTheme = localStorage.getItem('theme')
  //   if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
  //     setTheme(savedTheme)
  //   } else {
  //     // Check system preference
  //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  //     setTheme(prefersDark ? 'dark' : 'light')
  //   }
  // }, [])

  useEffect(() => {
    // Apply theme to document root
    const root = document.documentElement;

    // Remove both classes first
    root.classList.remove("light", "dark");

    // Add the current theme class
    root.classList.add(theme);

    // Also set data attribute for additional CSS targeting
    root.setAttribute("data-theme", theme);

    // Save theme to localStorage
    localStorage.setItem("theme", theme);

    // console.log('Theme changed to:', theme) // Debug log
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggling theme from:", theme); // Debug log
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("New theme:", newTheme); // Debug log
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
