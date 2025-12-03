import React from 'react';

const Tile = ({ project, colHeight }) => {
    const getTypeColor = (type) => {
        const colors = {
            work: '#368E00',
            education: '#008DAC',
            skills: '#B20000',
            projects: 'rgb(235,116,152)'
        };
        return project.color || colors[type] || '#2c3e50';
    };

    const truncateText = (text, maxLength = 150) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <a
            href={project.link || "#"}
            className="col inline-block float-left relative w-[calc(50%-30px)] min-[650px]:w-[calc(33.333%-30px)] min-[1024px]:w-[calc(20%-30px)] pointer-events-auto m-[15px] overflow-hidden shadow-[0px_16px_32px_rgba(0,0,0,0.37)] no-underline text-white group"
            style={{
                height: colHeight,
                backgroundColor: getTypeColor(project.type)
            }}
        >
            <div className="hover absolute inset-0 z-10 text-white bg-gradient-to-tr from-[rgba(0,0,0,0.47)] to-transparent
                after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:w-full after:h-full after:block after:bg-[rgb(235,116,152)] after:opacity-0 after:transition-all after:duration-[350ms] after:ease-out
                hover:after:opacity-85">
                <div className="absolute w-full h-full p-6 flex flex-col justify-between z-20">
                    <div>
                        <div className="text-xs uppercase tracking-wider opacity-75 mb-2">
                            {project.type}
                        </div>
                        <h2 className="font-voltaire uppercase m-0 text-xl md:text-2xl tracking-wider mb-2">
                            {project.title}
                        </h2>
                        {project.subtitle && (
                            <p className="text-sm opacity-90 mb-2">{project.subtitle}</p>
                        )}
                        {project.position && (
                            <p className="text-sm font-semibold mb-2">{project.position}</p>
                        )}
                        {project.date && (
                            <p className="text-xs opacity-75 mb-3">{project.date}</p>
                        )}
                    </div>
                    <div className="text-sm leading-relaxed opacity-90">
                        {truncateText(project.summary)}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Tile;
