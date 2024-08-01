import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Testimonial from './Testimonial';
import Footer from './Footer';





const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/> 
            
            <About />
            <Work />
            <Testimonial />
            <Contact />
            
            <Footer />
            
            </div>
    );
    
};  

export default Home;

