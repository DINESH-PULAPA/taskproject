import React, { useEffect, useRef, useState } from 'react';
import Parallax from 'parallax-js';
import Tile from '../ui/Tile';
import resumeData from '../../data/data1.json';

const Scene = () => {
    const sceneRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        colHeight: window.innerHeight / 2
    });
    const [isLoading, setIsLoading] = useState(true);
    const [tilesRendered, setTilesRendered] = useState(false);

    // Transform resume data into tile format with error handling
    const transformedData = React.useMemo(() => {
        try {
            return [
                ...(resumeData?.work || []).map(item => ({
                    type: 'work',
                    title: item.company,
                    summary: item.summary,
                    date: `${item.start?.year || ''} - ${item.end?.year || ''}`,
                    position: item.start?.position,
                    highlights: item.highlights,
                    color: item.companyNameColor,
                    backgroundImage: item.backgroundImage,
                    link: item.link
                })),
                ...(resumeData?.education || []).map(item => ({
                    type: 'education',
                    title: item.institutionFirstPart,
                    summary: `${item.studyType} in ${item.area}`,
                    date: `${item.startDate} - ${item.endDate}`,
                    subtitle: item.institutionSecondPart,
                    color: item.institutionColor,
                    backgroundImage: item.backgroundImage,
                    link: item.link
                })),
                ...(resumeData?.skills || []).map(item => ({
                    type: 'skills',
                    title: item.name,
                    summary: item.keywords?.join(', ') || '',
                    keywords: item.keywords,
                    backgroundImage: item.backgroundImage,
                    link: item.link
                })),
                ...(resumeData?.projects || []).map(item => ({
                    type: 'projects',
                    title: item.company,
                    summary: item.summary,
                    date: item.date,
                    highlights: item.highlights,
                    link: item.link,
                    backgroundImage: item.backgroundImage
                })),
                ...(resumeData?.achievements || []).map(item => ({
                    type: 'achievements',
                    title: item.head || item.title,
                    summary: item.desc || item.description,
                    subtitle: item.company || item.organization,
                    link: item.link,
                    backgroundImage: item.backgroundImage || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop'
                }))
            ];
        } catch (error) {
            console.error('Error transforming resume data:', error);
            return [];
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const vh = window.innerHeight;
            const isMobile = window.innerWidth < 768;
            setDimensions({
                height: isMobile ? vh : vh,
                colHeight: isMobile ? (vh * 0.33) : vh / 2
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Set loading to false after initial render
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Mark tiles as rendered after they mount
    useEffect(() => {
        if (!isLoading && transformedData.length > 0) {
            const timer = setTimeout(() => {
                setTilesRendered(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isLoading, transformedData.length]);

    // Initialize parallax only after tiles are rendered
    useEffect(() => {
        if (sceneRef.current && tilesRendered) {
            // Double-check that the layer element has children
            const layerElement = sceneRef.current.querySelector('.layer');
            if (layerElement && layerElement.children.length > 0) {
                const parallaxInstance = new Parallax(sceneRef.current, {
                    relativeInput: false,
                    hoverOnly: true,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: 0.1,
                    frictionY: 0.1
                });
                return () => parallaxInstance.destroy();
            }
        }
    }, [tilesRendered]);

    // Show all data without filtering
    const filteredData = transformedData;

    // Show loading state
    if (isLoading) {
        return (
            <section
                className="w-full relative overflow-hidden flex items-center justify-center"
                style={{ height: dimensions.height, backgroundColor: 'var(--bg)' }}
            >
                <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 rounded-full animate-spin mb-4" style={{ borderColor: 'var(--text-secondary)', borderTopColor: 'var(--cta)' }}></div>
                    <p className="font-voltaire uppercase text-sm tracking-wider" style={{ color: 'var(--text-primary)' }}>Loading...</p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="scene"
            ref={sceneRef}
            className="w-full relative overflow-hidden"
            style={{ height: dimensions.height, backgroundColor: 'var(--bg)', isolation: 'isolate' }}
            data-pointer-events="true"
        >
            <div
                className="layer main absolute z-10 pointer-events-none"
                data-depth="1.0"
                data-scalar-x="25"
                data-scalar-y="35"
                style={{ 
                    height: dimensions.height,
                    width: '150%',
                    left: '-25%',
                    padding: window.innerWidth < 768 ? '4px' : '20px'
                }}
            >
                <div className="w-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-4">
                    {filteredData.map((item, index) => (
                        <Tile key={index} project={item} colHeight={dimensions.colHeight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Scene;
