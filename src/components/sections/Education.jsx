import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeData from '../../data/data1.json';

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="education" className="py-20 px-4" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-voltaire text-center mb-16"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    <span style={{ color: 'var(--cta)' }}>Education</span>
                </motion.h2>

                <div className="space-y-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                backgroundColor: 'var(--card)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            whileHover={{ y: -5 }}
                        >
                            {/* Accent border */}
                            <div 
                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                style={{ backgroundColor: edu.institutionColor || 'var(--cta)' }}
                            />

                            <div className="ml-4">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <FaGraduationCap 
                                                className="text-2xl"
                                                style={{ color: edu.institutionColor || 'var(--cta)' }}
                                            />
                                            <h3 
                                                className="text-2xl md:text-3xl font-bold font-voltaire"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {edu.institutionFirstPart}
                                            </h3>
                                        </div>
                                        {edu.institutionSecondPart && (
                                            <h4 
                                                className="text-lg md:text-xl font-semibold mb-2"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                {edu.institutionSecondPart}
                                            </h4>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaCalendar 
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                        />
                                        <span 
                                            className="text-sm font-semibold"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {edu.startDate} - {edu.endDate}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <span 
                                            className="text-lg font-semibold"
                                            style={{ color: edu.institutionColor || 'var(--cta)' }}
                                        >
                                            {edu.studyType}
                                        </span>
                                        <span 
                                            className="text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            in {edu.area}
                                        </span>
                                    </div>
                                </div>

                                {/* Background Image Preview (Optional) */}
                                {edu.backgroundImage && (
                                    <div className="mt-4 rounded-lg overflow-hidden h-32 opacity-30 hover:opacity-60 transition-opacity duration-300">
                                        <img 
                                            src={edu.backgroundImage} 
                                            alt={edu.institutionFirstPart}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
