import React, { useEffect, useRef, useState } from 'react';
import Parallax from 'parallax-js';
import Tile from './Tile';
import Switch from './Switch';
import resumeData from '../data/data1.json';

const Scene = () => {
    const sceneRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        colHeight: window.innerHeight / 2
    });
    const [activeFilter, setActiveFilter] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [tilesRendered, setTilesRendered] = useState(false);

    const filterOptions = [
        { value: 'all', label: 'All' },
        { value: 'work', label: 'Experience' },
        { value: 'education', label: 'Education' },
        { value: 'skills', label: 'Skills' },
        { value: 'projects', label: 'Projects' }
    ];

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
                    color: item.companyNameColor
                })),
                ...(resumeData?.education || []).map(item => ({
                    type: 'education',
                    title: item.institutionFirstPart,
                    summary: `${item.studyType} in ${item.area}`,
                    date: `${item.startDate} - ${item.endDate}`,
                    subtitle: item.institutionSecondPart,
                    color: item.institutionColor
                })),
                ...(resumeData?.skills || []).map(item => ({
                    type: 'skills',
                    title: item.name,
                    summary: item.keywords?.join(', ') || '',
                    keywords: item.keywords
                })),
                ...(resumeData?.projects || []).map(item => ({
                    type: 'projects',
                    title: item.company,
                    summary: item.summary,
                    date: item.date,
                    highlights: item.highlights,
                    link: item.link
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
            setDimensions({
                height: vh,
                colHeight: vh / 2
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

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    // Filter data based on active filter
    const filteredData = activeFilter === 'all'
        ? transformedData
        : transformedData.filter(item => item.type === activeFilter);

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
            <div style={{ position: 'relative', zIndex: 999999 }}>
                <Switch
                    options={filterOptions}
                    activeOption={activeFilter}
                    onSwitch={handleFilterChange}
                />
            </div>
            <div
                className="layer main w-full absolute z-10 p-5 pointer-events-none"
                data-depth="1.0"
                data-scalar-x="25"
                data-scalar-y="35"
                style={{ height: dimensions.height }}
            >
                <div className="w-full">
                    {filteredData.map((item, index) => (
                        <Tile key={index} project={item} colHeight={dimensions.colHeight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Scene;
