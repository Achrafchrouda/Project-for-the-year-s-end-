import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.png';
import Modal from '../popup';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink, Logo } from './NavbarElementsClient';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useHistory } from "react-router-dom";

const NavbarClient = ({ isOpen, toggle }) => {


    let history = useHistory();
    const logout = ()=>{
    
        localStorage.removeItem("username");
        history.push("/login")
    
    }
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const [showModal, setShowModal] = useState(false);
    
return <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer isOpen={isOpen} >
            <NavLogo to='home' ><Logo  src={logo} /></NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars onClick={toggle}></FaBars>
            </MobileIcon>
            <NavMenu>

                <NavItems>
                    <NavLinks to="about" >Acceuil</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="sevices" >Nos Activités</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="nous" >A propos de Nous</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="sponsors" >Solutions</NavLinks>
                </NavItems>
                {/* <NavItems>
                    <NavLinks to="" >{localStorage.getItem("username")}</NavLinks>
                </NavItems> */}
                 <NavItems>
                     
                 
                 <NavBtn >
                      <span style={{padding:"70px"}}>  {localStorage.getItem("username")} </span>
                     <button onClick={logout} className='btn btn-danger'>lOGOUT</button>  
                     </NavBtn >
                
                    </NavItems>
                {showModal && <Modal/> }
            </NavMenu>
        </NavbarContainer>
    </Nav>

</>;
};

export default NavbarClient;
