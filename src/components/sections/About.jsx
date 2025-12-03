import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws } from 'react-icons/fa6';
import { SiTypescript, SiNextdotjs, SiExpress, SiDjango, SiMongodb } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const skills = [
        { name: 'React / Next.js', level: 90, icon: <FaReact className="text-2xl" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-2xl" /> },
        { name: 'Node.js / Express', level: 88, icon: <FaNodeJs className="text-2xl" /> },
        { name: 'Python / Django', level: 80, icon: <FaPython className="text-2xl" /> },
        { name: 'SQL / MongoDB', level: 85, icon: <FaDatabase className="text-2xl" /> },
        { name: 'AWS / Cloud', level: 75, icon: <FaAws className="text-2xl" /> }
    ];

    const socialLinks = [
        { icon: <FaGithub size={24} />, url: 'https://github.com', label: 'GitHub' },
        { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FaXTwitter size={24} />, url: 'https://x.com', label: 'X' },
        { icon: <FaEnvelope size={24} />, url: 'mailto:your.email@example.com', label: 'Email' }
    ];

    return (
        <section id="about" className="py-20 px-4" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-voltaire text-center mb-16"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    About <span style={{ color: 'var(--cta)' }}>Me</span>
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {/* Content */}
                    <div data-aos="fade-up">
                        <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Full Stack Developer & Tech Enthusiast
                        </h3>
                        <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                            I'm a passionate developer with 5+ years of experience building web applications
                            and digital solutions. I specialize in creating scalable, user-friendly applications
                            using modern technologies.
                        </p>
                        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing my knowledge through tech blogs and mentoring.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg transition-all duration-300 hover:bg-[var(--cta)] hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(59,130,246,0.3)]"
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

                        {/* Download Resume */}
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{ 
                                backgroundColor: 'var(--cta)',
                                color: 'white'
                            }}
                        >
                            <FaDownload />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="mt-16" id="skills" data-aos="fade-up">
                    <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
                        Technical Skills
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={skill.name} 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 rounded-lg"
                                style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                            >
                                <motion.div 
                                    className="flex items-center gap-3 mb-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        style={{ color: 'var(--cta)' }}
                                        initial={{ rotate: 0, scale: 0 }}
                                        whileInView={{ rotate: 360, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <span className="font-semibold flex-1" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                                    <motion.span 
                                        style={{ color: 'var(--cta)' }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {skill.level}%
                                    </motion.span>
                                </motion.div>
                                <div className="skill-bar-bg h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                                    <motion.div
                                        className="skill-bar h-full rounded-full relative overflow-hidden"
                                        style={{ backgroundColor: 'var(--cta)' }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className="absolute inset-0"
                                            style={{ 
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                                            }}
                                            animate={{
                                                x: ['-100%', '200%']
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: index * 0.1 + 1,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
