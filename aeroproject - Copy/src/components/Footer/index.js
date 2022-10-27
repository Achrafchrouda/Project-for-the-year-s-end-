import React from 'react'
import { FooterContainer, FooterWrapp,FooterTopsection,FooterContactItems,FooterTopWrapp,Powred,FooterDescription, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink, FooLogo, FooterMtcItems } from './FooterElements';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import mtclogo from '../images/mtclogo.jpg';
import aerologo from '../images/logo22-removebg-preview (1).png';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
      <FooterContainer>
          <FooterTopWrapp>
              <FooterTopsection>
                      
                                          
                      <FooterDescription>
                      <FooLogo style={{ marginLeft:'470px',marginRight:'200px', width: '150px', height:'150px'}} src={aerologo} />
                      {/* Smart Aid Technologies est une start-up créée en Juillet 2020 par deux chercheuses tunisiennes. Elle offre des solutions intelligentes basées sur des technologies de pointe pour la conception, le développement et la mise en place de systèmes d'aide à la prise de décisions. */}
                  </FooterDescription>
                  <FooterContactItems>
                      <FooterLinkTitle>
                          <FooterLink ><FaPhoneAlt />  Fax : +216 74 49 02 22</FooterLink>
                          <FooterLink ><FaPhoneAlt/>  +216 58 41 42 44 </FooterLink>
                              <FooterLink ><FaEnvelopeOpenText/>  Email : smartaidtech@gmail.com</FooterLink>
                              <FooterLink ><FaMapMarkerAlt/>  Adresse : Route Gremda Km 0.5 Résidence Omar A13. Sfax El Jadida, Sfax, Tunisie.</FooterLink>
                              </FooterLinkTitle>
                  </FooterContactItems>
              </FooterTopsection>
              </FooterTopWrapp>
                    <FooterWrapp>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>Smart Aid Technolgies</SocialLogo>
                      <WebSiteRights>Smart Aid Technolgies©{new Date().getFullYear()} tous droits réservés</WebSiteRights>
                      <SocialIcons>
                          <SocialIconLink href='https://www.facebook.com/ENETAeroCup' target='_blank' aria-label='Facebook'>
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href='https://www.instagram.com/enet.aerocup/' target='_blank' aria-label='Instagram'>
                              <FaInstagram />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrapp>
    </FooterContainer>
  )
}

export default Footer