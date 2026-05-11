import React, { useEffect } from "react";
import assets from "../assets/assets.js";

const Toggle = ({ theme, setTheme }) => {

  // Initial theme (sirf system check agar needed ho)
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  // Apply theme + save
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        alt=""
      />
    </button>
  );
};

export default Toggle;