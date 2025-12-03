import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
