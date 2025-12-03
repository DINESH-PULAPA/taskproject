import React, { useState, useEffect, useRef } from 'react';

const Switch = ({ options, activeOption, onSwitch }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    const handleOptionClick = (value) => {
        onSwitch(value);
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Desktop Navigation - Professional Horizontal Nav - Only visible on large screens (1024px+) */}
            <nav
                className="backdrop-blur-xl rounded-full shadow-[0px_4px_24px_rgba(0,0,0,0.15)] px-2 py-2 gap-1 transition-all duration-300"
                style={{ 
                    backgroundColor: 'var(--card)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0px 4px 24px rgba(0,0,0,0.15), 0px 0px 1px rgba(255,255,255,0.1) inset',
                    display: 'none',
                    position: 'fixed',
                    top: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 99999
                }}
                id="desktop-nav"
            >
                {options.map((option, index) => (
                    <button
                        key={option.value}
                        onClick={() => onSwitch(option.value)}
                        className="relative px-6 py-3 rounded-full font-voltaire uppercase text-xs tracking-[0.1em] transition-all duration-300 whitespace-nowrap font-semibold group overflow-hidden"
                        style={{
                            backgroundColor: activeOption === option.value ? 'var(--cta)' : 'transparent',
                            color: activeOption === option.value ? 'var(--cta-text)' : 'var(--text-secondary)',
                            boxShadow: activeOption === option.value ? '0px 4px 16px var(--cta-glow), 0px 0px 20px var(--cta-glow)' : 'none',
                            transform: activeOption === option.value ? 'scale(1.02)' : 'scale(1)',
                            transitionDelay: `${index * 30}ms`
                        }}
                    >
                        {/* Hover gradient effect */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: activeOption === option.value 
                                    ? 'transparent' 
                                    : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                            }}
                        />
                        <span className="relative z-10">{option.label}</span>
                        
                        {/* Active indicator dot */}
                        {activeOption === option.value && (
                            <span 
                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full animate-pulse"
                                style={{ backgroundColor: 'var(--cta-text)' }}
                            />
                        )}
                    </button>
                ))}
            </nav>

            {/* Mobile/Tablet Navigation - Only visible on screens below 1024px */}
            <div ref={mobileMenuRef} id="mobile-nav" style={{ display: 'block' }}>
                {/* Mobile Hamburger Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-14 h-14 backdrop-blur-xl rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 group"
                    style={{
                        backgroundColor: isMobileMenuOpen ? 'var(--cta)' : 'var(--card)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: isMobileMenuOpen 
                            ? `0px 4px 20px var(--cta-glow), 0px 8px 32px var(--cta-glow)` 
                            : '0px 4px 20px rgba(0,0,0,0.2)',
                        position: 'fixed',
                        top: '24px',
                        left: '24px',
                        zIndex: 99999
                    }}
                    aria-label="Toggle menu"
                >
                    <span 
                        className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} 
                        style={{ backgroundColor: isMobileMenuOpen ? 'var(--cta-text)' : 'var(--text-primary)' }}
                    />
                    <span 
                        className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} 
                        style={{ backgroundColor: isMobileMenuOpen ? 'var(--cta-text)' : 'var(--text-primary)' }}
                    />
                    <span 
                        className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} 
                        style={{ backgroundColor: isMobileMenuOpen ? 'var(--cta-text)' : 'var(--text-primary)' }}
                    />
                </button>

                {/* Mobile Slide-in Menu Panel */}
                <div
                    className={`fixed top-0 left-0 w-[280px] backdrop-blur-2xl shadow-[4px_0_40px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out ${
                        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    style={{
                        backgroundColor: 'var(--card)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 99998,
                        position: 'fixed'
                    }}
                >
                    {/* Menu Header */}
                    <div 
                        className="px-6 pt-20 pb-6 border-b"
                        style={{ 
                            borderColor: 'rgba(255, 255, 255, 0.08)',
                            flexShrink: 0
                        }}
                    >
                        <h2 
                            className="font-voltaire uppercase text-xs tracking-[0.15em] font-bold opacity-60"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Navigation
                        </h2>
                        <p className="text-[10px] mt-1 opacity-40" style={{ color: 'var(--text-secondary)' }}>
                            Choose your section
                        </p>
                    </div>

                    {/* Navigation Links - Scrollable */}
                    <div 
                        style={{ 
                            flex: '1 1 0',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            padding: '20px',
                            minHeight: 0,
                            display: 'block'
                        }}
                    >
                        {options.map((option, index) => (
                            <div key={option.value} style={{ marginBottom: '12px', position: 'relative' }}>
                                <button
                                    onClick={() => handleOptionClick(option.value)}
                                    style={{
                                        backgroundColor: activeOption === option.value ? 'var(--cta)' : 'rgba(255, 255, 255, 0.03)',
                                        color: activeOption === option.value ? 'var(--cta-text)' : 'var(--text-primary)',
                                        borderLeft: activeOption === option.value ? '3px solid var(--cta-text)' : '3px solid rgba(255, 255, 255, 0.1)',
                                        borderTop: 'none',
                                        borderRight: 'none',
                                        borderBottom: 'none',
                                        borderRadius: '8px',
                                        padding: '14px 16px',
                                        transform: activeOption === option.value ? 'translateX(3px)' : 'translateX(0)',
                                        transition: 'all 0.3s ease',
                                        transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                        opacity: isMobileMenuOpen ? 1 : 0,
                                        boxShadow: activeOption === option.value ? '0px 4px 16px var(--cta-glow)' : 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontFamily: 'Voltaire, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        outline: 'none',
                                        position: 'static',
                                        float: 'none',
                                        clear: 'both'
                                    }}
                                >
                                    <span style={{ display: 'block' }}>{option.label}</span>
                                    {activeOption === option.value && (
                                        <svg 
                                            style={{ 
                                                width: '16px', 
                                                height: '16px',
                                                flexShrink: 0,
                                                marginLeft: '8px'
                                            }}
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div 
                        className="p-4 border-t"
                        style={{ 
                            borderColor: 'rgba(255, 255, 255, 0.08)',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            flexShrink: 0
                        }}
                    >
                        <p className="text-[9px] opacity-50 text-center tracking-wide leading-tight" style={{ color: 'var(--text-secondary)' }}>
                            Tap outside to close
                        </p>
                    </div>
                </div>                {/* Backdrop Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9997] transition-opacity duration-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            animation: 'fadeIn 0.3s ease-out'
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default Switch;
