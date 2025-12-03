import React from 'react';

const Tile = ({ project, colHeight }) => {
    const getTypeColor = (type) => {
        const colors = {
            work: '#10B981',      // Emerald Green - Professional
            education: '#3B82F6', // Bright Blue - Academic
            skills: '#8B5CF6',    // Purple - Creative
            projects: '#EC4899',  // Pink - Innovative
            achievements: '#F59E0B' // Amber - Excellence
        };
        return project.color || colors[type] || '#6366F1';
    };

    const getBackgroundImage = () => {
        // Use project's background image if available, otherwise use a placeholder
        return project.backgroundImage || 
               `https://source.unsplash.com/600x800/?${project.type},business`;
    };

    return (
        <a
            href={project.link || "#"}
            target={project.link && project.link !== "#" ? "_blank" : "_self"}
            rel={project.link && project.link !== "#" ? "noopener noreferrer" : ""}
            className="tile-card group inline-block float-left relative pointer-events-auto overflow-hidden no-underline text-white transition-all duration-[350ms] ease-out hover:scale-[1.02] hover:z-20"
            style={{
                height: colHeight,
                backgroundImage: `url(${getBackgroundImage()})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Gradient overlay (black to transparent diagonal) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.7)] to-transparent"></div>
            
            {/* Type-specific color hover overlay */}
            <div 
                className="pink-overlay absolute inset-0 opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-85"
                style={{ backgroundColor: getTypeColor(project.type) }}
            ></div>
            
            {/* Content container */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
                {/* Type badge */}
                <span className="absolute top-2 right-2 text-[10px] uppercase bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                    {project.type}
                </span>

                {/* Company/Institution - small text above title */}
                {project.subtitle && (
                    <p className="text-xs opacity-90 mb-1 font-semibold">{project.subtitle}</p>
                )}
                
                {/* Main Title */}
                <h2 className="font-voltaire uppercase m-0 text-base md:text-xl tracking-wider transition-all duration-[350ms] ease-out leading-tight">
                    {project.title}
                </h2>
                
                {/* Date/Duration */}
                {project.date && (
                    <p className="text-xs opacity-80 mt-1">{project.date}</p>
                )}
                
                {/* Position */}
                {project.position && (
                    <p className="text-xs opacity-90 mt-1 font-medium">{project.position}</p>
                )}
                
                {/* Summary - shows on hover */}
                {project.summary && (
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 line-clamp-3 leading-relaxed">
                        {project.summary}
                    </p>
                )}
                
                {/* Highlights count indicator */}
                {project.highlights && project.highlights.length > 0 && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                        <span className="text-[10px] bg-white/20 px-2 py-1 rounded">
                            {project.highlights.length} highlights
                        </span>
                    </div>
                )}
                
                {/* Keywords for skills */}
                {project.keywords && project.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.keywords.slice(0, 4).map((keyword, idx) => (
                            <span key={idx} className="text-[10px] bg-white/20 px-2 py-0.5 rounded">
                                {keyword}
                            </span>
                        ))}
                        {project.keywords.length > 4 && (
                            <span className="text-[10px] bg-white/30 px-2 py-0.5 rounded">
                                +{project.keywords.length - 4}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </a>
    );
};

export default Tile;
