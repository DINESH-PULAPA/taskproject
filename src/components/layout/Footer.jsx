import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FaXTwitter />, url: 'https://x.com', label: 'X' },
        { icon: <FaEnvelope />, url: 'mailto:your.email@example.com', label: 'Email' }
    ];

    return (
        <footer className="relative mt-20" style={{ backgroundColor: 'var(--card)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-voltaire mb-4" style={{ color: 'var(--cta)' }}>
                            Portfolio
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            Building amazing digital experiences with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2 flex flex-col items-center">
                            {[
                                { name: 'Home', href: '#hero' },
                                { name: 'About', href: '#about' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-[var(--cta)] transition-colors"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Connect
                        </h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full transition-all duration-300 hover:bg-[var(--cta)] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(59,130,246,0.3)]"
                                    style={{ 
                                        color: 'var(--text-primary)',
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                                    }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t pt-8" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(59,130,246,0.6)] z-[99999]"
                style={{ 
                    backgroundColor: 'var(--cta)',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
                }}
                aria-label="Back to top"
            >
                <FaArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
