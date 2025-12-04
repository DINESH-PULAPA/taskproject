import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeData from '../../data/data1.json';

const Achievements = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="achievements" className="py-20 px-4" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-voltaire text-center mb-16"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    <span style={{ color: 'var(--cta)' }}>Achievements</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.achievements.map((achievement, index) => (
                        <motion.a
                            key={index}
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                            style={{
                                backgroundColor: 'var(--card)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            whileHover={{ y: -8 }}
                        >
                            {/* Trophy Icon */}
                            <div className="flex items-center justify-center mb-4">
                                <div 
                                    className="p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                                    style={{ 
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                                    }}
                                >
                                    <FaTrophy 
                                        className="text-3xl"
                                        style={{ color: 'var(--cta)' }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 
                                    className="text-xl font-bold font-voltaire mb-2 group-hover:text-[var(--cta)] transition-colors"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {achievement.head}
                                </h3>
                                <p 
                                    className="text-sm mb-4"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {achievement.desc}
                                </p>

                                {/* External Link Icon */}
                                <div className="flex justify-center">
                                    <div 
                                        className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ color: 'var(--cta)' }}
                                    >
                                        <span>View Details</span>
                                        <FaExternalLinkAlt className="text-xs" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div 
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{
                                    border: '2px solid var(--cta)',
                                    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)'
                                }}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
