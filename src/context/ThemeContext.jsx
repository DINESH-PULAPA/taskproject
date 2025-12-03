import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Load saved theme from localStorage or default to 'dark'
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Save theme to localStorage whenever it changes
        localStorage.setItem('theme', theme);

        // Update document class
        document.documentElement.className = theme === 'dark' ? '' : `theme-${theme}`;
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
