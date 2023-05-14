import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = (themeValue) => {
    localStorage.setItem("theme", themeValue);
    setTheme(themeValue);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme === "true") {
        setTheme(true);
      } else {
        setTheme(false);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};
