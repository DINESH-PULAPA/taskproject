import React, { useEffect } from 'react';
import AOS from 'aos';

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const experiences = [
        {
            company: 'Tech Corp',
            role: 'Senior Full Stack Developer',
            duration: '2021 - Present',
            description: 'Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.',
            achievements: [
                'Architected scalable backend systems serving 1M+ users',
                'Reduced API response time by 60%',
                'Implemented CI/CD pipeline reducing deployment time by 75%'
            ]
        },
        {
            company: 'StartupXYZ',
            role: 'Full Stack Developer',
            duration: '2019 - 2021',
            description: 'Developed customer-facing web applications using React and Node.js, collaborated with cross-functional teams.',
            achievements: [
                'Built real-time chat feature with WebSocket',
                'Integrated payment gateways (Stripe, PayPal)',
                'Improved code coverage to 85%'
            ]
        },
        {
            company: 'Digital Agency',
            role: 'Frontend Developer',
            duration: '2018 - 2019',
            description: 'Created responsive websites for various clients, focusing on performance and user experience.',
            achievements: [
                'Delivered 15+ client projects on time',
                'Achieved 95+ Lighthouse scores',
                'Implemented modern design systems'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4" style={{ backgroundColor: 'var(--card)' }}>
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl font-bold font-voltaire text-center mb-16"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    Work <span style={{ color: 'var(--cta)' }}>Experience</span>
                </h2>

                <div className="relative border-l-2 pl-5 ml-2" style={{ borderColor: 'var(--cta)' }}>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item mb-12 relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="absolute w-4 h-4 rounded-full -left-[28px] top-2" style={{ backgroundColor: 'var(--cta)', boxShadow: '0 0 0 4px var(--bg), 0 0 0 6px var(--cta)' }}></div>
                            <div className="ml-12 p-6 rounded-lg border-l-[3px] border-transparent transition-all duration-300 hover:border-l-[var(--cta)] hover:translate-x-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]" style={{ backgroundColor: 'var(--bg)' }}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg" style={{ color: 'var(--cta)' }}>{exp.company}</p>
                                    </div>
                                    <span className="text-sm mt-2 md:mt-0" style={{ color: 'var(--text-secondary)' }}>
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    {exp.description}
                                </p>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start" style={{ color: 'var(--text-secondary)' }}>
                                            <span className="mr-2" style={{ color: 'var(--cta)' }}>✓</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
