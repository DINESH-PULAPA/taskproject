import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import { Hero, About, Experience, Education, Projects, Contact } from '../components/sections';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <Layout>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default Home;
