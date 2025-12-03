import React from 'react';
import Scene from './Scene';

const Projects = () => {
    return (
        <section id="projects" className="relative p-0 m-0" style={{ backgroundColor: 'var(--card)' }}>
            <div className="text-center py-12">
                <h2
                    className="text-4xl md:text-5xl font-bold font-voltaire mb-6 relative z-10"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    My <span style={{ color: 'var(--cta)' }}>Projects</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto px-4" style={{ color: 'var(--text-secondary)' }}>
                    Explore my work through this interactive parallax grid. Hover over cards to see details,
                    and use the filters to navigate through different categories.
                </p>
            </div>
            
            {/* Existing Parallax Scene Component */}
            <Scene />
        </section>
    );
};

export default Projects;
