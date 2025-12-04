import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'Full Stack Developer';
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 hero-bg"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="text-lg mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold font-voltaire mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        John Doe
                    </motion.h1>

                    <motion.h2
                        className="text-3xl md:text-4xl mb-8 min-h-[50px]"
                        style={{ color: 'var(--cta)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {text}
                        <span className="cursor-blink">|</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                        style={{ color: 'white' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I build exceptional digital experiences that make people's lives easier.
                        Passionate about creating innovative solutions with modern technologies.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a
                            href="#projects"
                            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 text-center min-w-[150px]"
                            style={{ 
                                backgroundColor: 'var(--cta)',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                            }}
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover:bg-[var(--cta)] hover:text-white hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] active:scale-100 focus:outline-none text-center min-w-[150px]"
                            style={{ 
                                borderColor: 'var(--cta)',
                                color: 'var(--cta)'
                            }}
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Scroll Indicator - Moved inside content with spacing */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.p
                            className="text-xs uppercase tracking-widest font-semibold"
                            style={{ color: 'var(--text-secondary)' }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Scroll Down
                        </motion.p>
                        <motion.button
                            onClick={scrollToAbout}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-[var(--cta)] hover:text-white"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Scroll to About section"
                        >
                            <FaArrowDown size={20} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
