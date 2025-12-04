import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, changeTheme } = useTheme();

    const themes = [
        { 
            id: 'dark', 
            name: 'Dark Mode', 
            icon: '🌙',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            preview: '#304056'
        },
        { 
            id: 'purple', 
            name: 'Royal Purple', 
            icon: '💎',
            gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
            preview: '#7C3AED'
        },
        { 
            id: 'red', 
            name: 'Royal Green', 
            icon: '🟢',
            gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
            preview: '#10B981'
        },
        { 
            id: 'teal', 
            name: 'Ocean Teal', 
            icon: '🌊',
            gradient: 'linear-gradient(135deg, #5eead4 0%, #0f766e 100%)',
            preview: '#0D9488'
        }
    ];

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    const handleThemeToggle = () => {
        const currentIndex = themes.findIndex(t => t.id === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        changeTheme(themes[nextIndex].id);
    };

    return (
        <button
            onClick={handleThemeToggle}
            className="group relative p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
                backgroundColor: 'var(--card)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            aria-label="Cycle through themes"
            title={`Current: ${currentTheme.name} - Click to change`}
        >
            {/* Half moon icon */}
            <svg 
                className="w-5 h-5 transition-all duration-500 group-hover:rotate-[20deg]" 
                viewBox="0 0 24 24" 
                style={{ fill: currentTheme.preview }}
            >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
        </button>
    );
};

export default ThemeToggle;
