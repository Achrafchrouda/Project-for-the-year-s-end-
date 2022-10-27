import styled from 'styled-components';

export const ChalengesContainer = styled.div`
display:flex;
width: auto;
margin-left: 50px;
margin-right: 50px;
align-items: center;
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
    height:auto;
    width:100%;
};`

export const ChalengesWrapper = styled.div`
display:grid;
z-index:1;
height:550px;
width:auto;
max-width:1000px;
margin-right: 20px;
margin-left: 400px;
@media screen and (max-width: 768px){
    height:auto;
};
`;

export const BtnWrapp = styled.div`
display:flex;
justify-content: flex-start;
`;

export const ChalengesRaw = styled.div`
align-items: center;
display:grid;
grid-auto-columns: minmax(auto, 2fr);
align-items:center;
grid-template-areas: ${({ imgstart }) => (imgstart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width: 768px){
    grid-template-areas: ${({imgstart}) => (imgstart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
};`

export const Colum1 = styled.div`
margin-bottom:15px;
padding:0  0px;
margin-left: 0px;
padding-right: 20px;
grid-area: col1;
`;

export const Colum2 = styled.div`
margin-bottom:15px;
padding:0px 0px;
padding-right: 0px;
padding-left: 0px;
margin-left: 0px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
font-size:40px;
`;

export const TopLine = styled.div`
color:white;
font-size:12px;
line-height:24px;
font-weight:600;
//letter-spacing:2px;
margin-bottom:16px;
margin-left: 0px;
`;
export const Heading = styled.h1`
margin-bottom:24px;
font-size:35px;
line-height:1.1;
font-weight:400;
margin-top:8px;
color:#8cc43c;
@media screen and (max-width:480px){
    font-size:25px;
}`;

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
margin-left: 60px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};`;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`;

export const Img = styled.img`
width:70%;
margin:0 0 10px 0;
padding-right: 0;
padding-top:15px;
padding-left:10px;
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



