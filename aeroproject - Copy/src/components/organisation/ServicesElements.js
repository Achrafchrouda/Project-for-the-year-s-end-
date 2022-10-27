import styled from 'styled-components';

export const ServicesContainer = styled.div`
display:flex;
justify-content: center;
margin: 150px 300px 250px 60px;
position:relative;
z-index:1;
flex-direction:column;
align-items:center;
height: auto;
width: 92%;
@media screen and ( max-width:768px ){
    height:auto;
    width:auto;
    margin-top:auto;
    margin-bottom:auto;
};
@media screen and ( max-width:480px ){
    height:auto;
    margin-top:auto;
    margin-bottom:auto;

     
};
`;

export const ServicesWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
z-index:1;
display:grid;
grid-template-columns: 1fr ;
align-items: center;
grid-gap: 16px;
padding: 0 20px;
@media screen and ( max-width:1000px ){
     grid-template-columns: 0.8fr;
     padding:auto;
             margin-top:auto;

};
@media screen and ( max-width:768 ){
     grid-template-columns: 0.5fr;
     padding:0 10px;

};`;

export const ServicesCard = styled.div`

background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 15px;
max-height:250px;
padding:20px;
margin:10px;
box-shadow:0 1px 3px rgba(0,0,0,0,2);
transition: all 0.2s ease-in-out;
@media screen and ( max-width:768 ){
     transform: scale(0.3);
     transition: all 0.2s ease-in-out;
     justify-content: stretch;
     height:20%;
     width:20%;
};
&:hover{
  transform: scale(0.8);
  transition: all 0.2s ease-in-out;
  cursor:pointer;
}
`;

export const ServicesIcon = styled.img`

height: 160px;
width: 160px;
margin-bottom:500px;
`;

export const ServicesH1 = styled.h1`
z-index:6;
padding-bottom:3  0px;
font-size: 3.5rem;
	text-transform: uppercase;
	background: linear-gradient(90deg, #8cc63f  25%, #8cc63f  55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
    margin-bottom:100px;
    @media screen and ( max-width: 768px ){
    font-size: 1.5rem;
    font-weight: bold;
  white-space: nowrap; 
    padding-top:100px;
    margin:auto;

};
@media screen and ( max-width: 480px ){
    font-size: 1.5rem;
    padding-top:100px;
    margin:50%;

};
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
font-weight: bold;
margin-bottom:10px;
`;

export const ServicesP = styled.p`
font-size:1rem;
text-align:center;
`;

export const InfoBgim = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:auto;
height:auto;
overflow:hidden;
`;

export const ImageBg = styled.img`

margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`;




