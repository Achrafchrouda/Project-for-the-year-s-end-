import React, {useState}from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'
import Modal from '../popup';

const Sidebar = ({ isOpen, toggle }) => {
        const [showModal, setShowModal] = useState(false);

    return <>
        <SidebarContainer isOpen={isOpen}>
            
                    { !showModal ?                                                
                <SidebarWrapper>
                    <CloseIcon onClick={ toggle }>
                        <Icon />
                    </CloseIcon>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>
                            Acceuil
                        </SidebarLink>
                        <SidebarLink to='sevices' onClick={toggle}>
                            Competitions
                        </SidebarLink>
                        <SidebarLink to='nous' onClick={toggle}>
                            A propos de Nous
                        </SidebarLink>
                        <SidebarLink to='sponsors' onClick={toggle}>
                            Nos Partenaires
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute onClick={() => {
                            setShowModal(prev => !prev)
                        }}>Nous Contactez</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
                : <SidebarWrapper>
                    <CloseIcon onClick={() => { setShowModal(prev => !prev) }} >
                        <Icon />
                    </CloseIcon> 
                    <Modal style={{position:"relative", width:'50%', height:'50%'}} />
                  </SidebarWrapper>}
     </SidebarContainer>
        </>
};

export default Sidebar;
