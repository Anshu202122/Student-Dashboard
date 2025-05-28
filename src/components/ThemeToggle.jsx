// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={toggleTheme} style={{ fontWeight: "bold" }}>
            {theme === "light" ? "Light" : "Dark"} Mode
        </button>
    );
};

export default ThemeToggle;
