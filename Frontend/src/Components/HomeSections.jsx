import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import AboutUs from './AboutUs';
import Header from './Header';
import Footer from './Footer';

const HomeSections = () => {
    return (
        <div>

            <nav>
                <Header />
            </nav>

            <Element name="/home">
                <Home />
            </Element>

            <Element name="/about">
                <AboutUs />
            </Element>

            <Footer></Footer>
        </div>
    );
};

export default HomeSections;
