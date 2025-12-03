import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, changeTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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
            name: 'Cyber Red', 
            icon: '🔴',
            gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
            preview: '#EF4444'
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

    const handleThemeChange = (themeId) => {
        changeTheme(themeId);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="fixed top-8 right-8 z-[60]" ref={dropdownRef}>
            {/* Modern Theme Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative overflow-hidden backdrop-blur-lg rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
                aria-label="Change theme"
            >
                <div className="relative px-5 py-3 flex items-center gap-3">
                    {/* Animated gradient background on hover */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ background: currentTheme.gradient }}
                    />
                    
                    {/* Theme preview circle */}
                    <div 
                        className="relative w-7 h-7 rounded-full shadow-md transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                        style={{ 
                            background: currentTheme.gradient,
                            boxShadow: `0 2px 16px ${currentTheme.preview}50`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                        <div className="absolute inset-[2px] rounded-full border border-white/20" />
                    </div>
                    
                    {/* Current theme name */}
                    <span 
                        className="font-voltaire text-sm font-semibold tracking-wide hidden sm:block pr-1"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {currentTheme.name}
                    </span>
                    
                    {/* Chevron icon */}
                    <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="var(--text-secondary)" 
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Professional Dropdown Menu */}
            <div
                className={`absolute top-full right-0 mt-4 w-80 backdrop-blur-2xl rounded-3xl shadow-[0px_24px_80px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 origin-top-right ${
                    isOpen 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
                style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0px 24px 80px rgba(0,0,0,0.25), 0px 0px 1px rgba(255,255,255,0.1) inset'
                }}
            >
                {/* Header */}
                <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                    <h3
                        className="font-voltaire uppercase text-xs tracking-[0.15em] font-bold flex items-center gap-2.5"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <span className="text-lg">🎨</span>
                        Choose Your Theme
                    </h3>
                    <p className="text-xs mt-1.5 leading-relaxed opacity-70" style={{ color: 'var(--text-secondary)' }}>
                        Select a color scheme that suits your style
                    </p>
                </div>

                {/* Theme Grid */}
                <div className="p-5 grid grid-cols-2 gap-3.5">
                    {themes.map((t, index) => (
                        <button
                            key={t.id}
                            onClick={() => handleThemeChange(t.id)}
                            className={`group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
                                theme === t.id
                                    ? 'shadow-xl scale-[1.02] ring-2'
                                    : 'hover:shadow-lg hover:scale-[1.02]'
                            }`}
                            style={{
                                backgroundColor: theme === t.id ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                                border: theme === t.id 
                                    ? `2px solid ${t.preview}` 
                                    : '2px solid rgba(255, 255, 255, 0.05)',
                                ringColor: `${t.preview}40`,
                                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            {/* Background gradient on hover */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300"
                                style={{ background: t.gradient }}
                            />
                            
                            <div className="relative flex flex-col items-center gap-3">
                                {/* Theme preview circle */}
                                <div 
                                    className="w-14 h-14 rounded-full shadow-lg relative overflow-hidden transition-transform duration-300 group-hover:scale-110"
                                    style={{ 
                                        background: t.gradient,
                                        boxShadow: `0 6px 20px ${t.preview}40, 0 0 0 3px var(--card), 0 0 0 4px ${theme === t.id ? t.preview : 'transparent'}`
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                                    <div className="absolute inset-[3px] rounded-full border-2 border-white/20" />
                                    
                                    {/* Check mark for selected theme */}
                                    {theme === t.id && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                            <svg 
                                                className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-[scale-in_0.3s_ease-out]" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                                    clipRule="evenodd" 
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Theme name */}
                                <div className="text-center">
                                    <div 
                                        className="font-voltaire text-xs font-bold tracking-wide leading-tight"
                                        style={{ 
                                            color: theme === t.id ? t.preview : 'var(--text-primary)'
                                        }}
                                    >
                                        {t.name}
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Footer tip */}
                <div 
                    className="px-6 py-4 text-center border-t"
                    style={{ 
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        backgroundColor: 'rgba(0, 0, 0, 0.08)'
                    }}
                >
                    <p className="text-[11px] opacity-60 tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                        ✓ Saved automatically • Synced across sessions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
