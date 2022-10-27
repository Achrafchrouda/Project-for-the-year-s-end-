import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
margin-top:100px;
z-index:1;
background:#444348;
@media screen and (max-width:768){
     width:100%;
};
`;

export const FooterWrapp = styled.div`
background-color:#444348;
display:flex;
z-index:1;
position: relative;
width: auto;
height: auto;  
flex-direction:column;
align-items: center;
@media screen and (max-width:768){
   background-color:black;
display:flex;
z-index:1;
position: relative;
bottom: 0;
width: auto;
height: auto;  
flex-direction:column;
justify-content: center;
align-items: center;
};
`;
export const FooterTopWrapp = styled.div`
padding-right:0;
padding-top:0;
background-color:#444348;
z-index:1;
position: relative;
bottom: 0;
width: 100%;
height: 100%;  
flex-direction:row;
@media screen and (max-width:768){
 display:flex;
z-index:1;
position: relative;
bottom: 0;
width: auto;
height: auto;  
flex-direction:column;
justify-content: center;
align-items: center;
};
`;
export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;
@media screen and (max-width:768){
    padding-top:32px;
};`;

export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:768){
    flex-direction:column;
};
`;

export const FooterLinkItems = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;
@media screen and (max-width: 768px){
    margin:0;
    padding:10px;
    width:100%;
};
`;
export const FooterLinkTitle = styled.h1`
font-size:14px;
flex-direction:column;
  display:flex;
  padding:0;
@media screen and (max-width: 768px){
font-size:7px;
margin:0px;
width:auto;
};
`;

export const FooterLink = styled.p`
color:white;
text-decoration:none;
flex-direction: column;
margin-bottom:0.5rem;
font-size:15px;
font-weight:bold;
@media screen and (max-width: 768px){
font-size:7px;
margin-bottom:0.20rem;
};
`;
export const FooBgim = styled.div`
background:'white';
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const FooImageBg = styled.img`
border-radius: 25% 25% 25% 25%;
box-shadow: 0 0 20px 20px #141414;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const SocialMedia = styled.section`
max-width:1000px;
width:100%;
`;

export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px auto 0 auto;
@media screen and (max-width:768){
    flex-direction:column;
    width:100%;
    height:100%;
}
&:hover {
  color:#8cc43c;
}
`;

export const SocialLogo = styled(Link)`
color:white;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
align-items:center;
margin-bottom:8px;

font-weight:bold;
@media screen and (max-width:768){
font-size:0.75rem;
margin-bottom:8px;


};
&:hover {
  color:#8cc43c;
}
`;

export const WebSiteRights = styled.small`
color:#fff;
display:flex;
flex-direction:row;
margin-bottom:8px;
@media screen and (max-width:768){
margin-bottom:10px;

};
&:hover {
  color:#8cc43c;
}

`;

export const SocialIcons = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:240px;
@media screen and (max-width:768){
width:120px;
};
&:hover {
  color:#8cc43c;
}
`;

export const SocialIconLink = styled.a`
color:#fff;
font-size:35px;
padding:8px;
margin-bottom: 30px;
@media screen and (max-width:768){
font-size:17.5px;
};
&:hover {
  color:#8cc43c;
}
`;
export const FooLogo = styled.img`
 display: inline-block;
  margin-left: 5px;
  width: 250px;
  height: 150px;
  border-radius:25%;
  padding-top:5px;
  @media screen and (max-width: 768px){
 display: inline-block;
  margin-left: 2.5px;
  width: 120px;
  height: 100px;
  border-radius:12%;
  padding-top:9px;
  white-space: nowrap;

};
`;
export const FooterTopsection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin:auto;
@media screen and (max-width: 768px){
};
`;
export const FooterTopelement = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  @media screen and (max-width: 768px){
  padding: 5px;
};
`;
export const FooterMtcItems = styled.div`
  grid-row-end: span 1;
display:flex;
  flex-direction: column;
  padding-top:40px;
@media screen and (max-width: 768px){
    flex-direction:column;
    margin:0;
    padding:10px;
    width:50%;
};
`;
export const Powred = styled.h1`
font-size:1.4rem;
color:white;
text-decoration:none;
font-weight:bold;
@media screen and (max-width: 768px){
    font-size:0.5rem;

};
`;
    

export const FooterDescriptionItems = styled.div`
  grid-row-end: span 2;
  right: 0;
  display:flex;
  width:100px;
  flex-direction: column;
@media screen and (max-width: 768px){
      display:flex;
  flex-direction: row;
    margin:0;
    padding:80px;
    width:50px;
};
`;

export const FooterContactItems = styled.div`
  grid-row-end: span 1;
  background:#444348;
  color:white;
  font-size:60px;
  padding:10px;
  margin-top:auto;
  height: 150px;
  width:auto;
  font-weight:bold;
border-radius: 30px 0 0 30px;
@media screen and (max-width: 768px){
    margin-top:15;
    font-size:20px;
    justify-content:center;
    padding:5px;
    width:auto;
    height:55%;
border-radius: 15px 0 0 15px;

};
`;

export const FooterDescription = styled.div`
  grid-row-end: span 1;
  width:650px;
  height:auto;
  justify-content: center;
font-size:0.8rem;
display:flex;
flex-direction:column;
color:white;
 margin:0;
text-decoration:none;
justify-self:start;
font-weight:bold;
@media screen and (max-width: 768px){
width:50%;
height:auto;
justify-content: center;
font-size:0.35rem;
display:flex;
flex-direction:column;
color:white;
 margin:0;
text-decoration:none;
};

`;
