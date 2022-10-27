import styled from 'styled-components';

export const ChalengesContainer = styled.div`
display:flex;
background:#444348;
padding:0;
height: auto;
margin: 150px 30px 150px 30px;
position:relative;
z-index:1;
:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    background: linear-gradiant(
        180deg,
        rgba(0,0,0,0.2) 0%,
        transparent 100%);
        z-index:2;
};
@media screen and (max-width: 768px){
    height:100%;
    width:100%;
    font-size: 25px;
};
`;

export const ChalengesWrapper = styled.div`
display:grid;
z-index:1;
height:550px;
width:100%;
max-width:1000px;
margin-right:auto;
margin-left:auto;
padding:0 30px;
@media screen and (max-width: 768px){
    height:50%;
};
`;

export const BtnWrapp = styled.div`
display:flex;
justify-content: flex-start;
@media screen and (max-width: 768px){
    display:grid;
    padding:0 5px;
    grid-template-columns: 0.5fr;
    
};
`;

export const ChalengesRaw = styled.div`
display:grid;
grid-auto-columns: minmax(auto, 1fr);
align-items:center;
grid-template-areas: ${({ imgstart }) => (imgstart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width: 768px){
    grid-template-areas: ${({imgstart}) => (imgstart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
};`

export const Colum1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area: col1;
`;

export const Colum2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`;

export const TopLine = styled.div`
color:#8cc43c;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`;

export const Heading = styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
@media screen and (max-width:480px){
    font-size:24px;
}`;

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
@media screen and (max-width:480px){
    font-size:20px;
}
`;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`;

export const Img = styled.img`
width:100%;
margin:0 0 10px 0;
padding-right: 0;
`;

export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const InfoBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const InfoBgim = styled.div`
background:'black';
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const ImageBg = styled.img`
border-radius: 25% 25% 25% 25%;
box-shadow: 0 0 20px 20px #141414;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const ButtonUrl = styled.a`
border-radius:50px;
background: ${({ primary }) => (primary ? 'linear-gradient(90deg, #e65c00 25%, #F9D423 55% )' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:'none';
border:none;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
@media screen and (max-width:768px){
    max-widt:50%;
    margin:5px;
    padding: ${({ big }) => (big ? '10px 38px' : '9px 23px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '15px' : '12px')};
}
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
}
`;

