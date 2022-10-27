import styled from 'styled-components'
import { Link as linkR } from 'react-router-dom'
import { Link as linkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({ scrollNav}) => (scrollNav ? '#444348' : 'transparent')};
height: 100px;
margin-top: -80px;
display: flex;
justify-content: flex;
align-items: center;
font-size:1.4rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
position:sticky;
max-width:1100px;
@media screen and ( max-width:393px ){
     width:100%;
};`
export const NavLogo = styled(linkS)`
color:#F7F7F7;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`;
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:#fff;
}`;
export const NavMenu = styled.ul`
display: flex;
aligne-items:center;
list-style:none;
text-align:center;
margin-right:-24px; 
@media screen and (max-width: 768px){
    display:none;
}`;
export const NavItems = styled.li`
height:40px;
padding-left: 60px;
white-space: nowrap;
font-size:25px;
transition:0.2s ease-in-out;
&:hover{
   color:#8cc63f ;
   transition:0.2s ease-in-out;}
`;
export const NavLinks = styled(linkS)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
margin-top:18px;
height:100%;
cursor:pointer;
&:hover{
   color:#8cc63f ;
   transition:0.2s ease-in-out;
  transform: scale(1.2);
border-bottom:3px solid #8cc63f ;
    z-index:1;}
`; 

export const NavBtn = styled.nav`
align-items: center;
    position:relative;
    top:22px;
   margin-left: 500px;
@media screen and (max-width:768px){
    display:none;
}`
export const NavBtnLink = styled(linkR)`
border-radius:50px;
background:#8cc63f;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size:16px;
outline:none;
font-family:cursive;
font-size:15px;
font-weight: 700;
color:light;
border:none;
padding-bottom:17px;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;
export const Logo = styled.img`
 display: inline-block;
  height: 100%;
  padding-left: 5px;
  width: 120px;
  height: 100px;
`
