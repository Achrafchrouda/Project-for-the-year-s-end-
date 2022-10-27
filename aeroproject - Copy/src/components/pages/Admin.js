import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NavbarAdmin from '../AdminNavbar';
import Sidebar from '../Sidebar';
import HeroSection from '../heroSection';
import InfoSection from '../infoSection';
import { homeObjOne } from '../infoSection/Data';
import Services from '../Services';
import Footer from '../Footer';
import Organisation from '../organisation'
import Solution from '../solution'
import HeroSectionAdmin from '../Admin';





const  Admin = ()=> 
{

   const [isOpen, setIsOpen] = useState(false)
        const toggle = () => {
            setIsOpen(!isOpen);
        }

    return (<>
        <Sidebar isOpen={isOpen} toggle={toggle} setIsOpen={ setIsOpen }/>
        <NavbarAdmin isOpen={isOpen} toggle={toggle} setIsOpen={setIsOpen} />
        <HeroSectionAdmin/>
        
    </>
    );
}

export default Admin ; 