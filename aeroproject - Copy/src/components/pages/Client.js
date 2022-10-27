import React, { useState } from 'react';
import Navbar from '../navbar';
import Sidebar from '../Sidebar';
import HeroSection from '../heroSection';
import InfoSection from '../infoSection';
import { homeObjOne } from '../infoSection/Data';
import Services from '../Services';
import Footer from '../Footer';
import Slider from '../slider'; 
import Organisation from '../organisation'
import Solution from '../solution'
import NavbarClient from '../Client';
const Client = () => {
        const [isOpen, setIsOpen] = useState(false)
        const toggle = () => {
            setIsOpen(!isOpen);
        }

    return (<>
        <Sidebar isOpen={isOpen} toggle={toggle} setIsOpen={ setIsOpen }/>
        <NavbarClient isOpen={isOpen} toggle={toggle} setIsOpen={setIsOpen} />
        <HeroSection  />
        <InfoSection  {...homeObjOne} />
        <Services />
        <Organisation />
        <Solution/>
        <Footer />
    </>
    );
};
export default Client;