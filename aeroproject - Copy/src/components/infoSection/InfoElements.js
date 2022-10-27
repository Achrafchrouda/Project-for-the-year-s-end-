import styled from 'styled-components';

export const InfoContainer = styled.div`
display:flex;
justify-content: center;
align-item:center;
padding:0;
height: auto;
width:auto;
margin: auto;
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
    margin-top:auto;
}
`

export const InfoWrapper = styled.div`
display:grid;
z-index:1;
height:880px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content: center;`;

export const BtnWrapp = styled.div`
display:flex;
justify-content: flex-start;
`;

export const InfoRaw = styled.div`
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
padding-top:auto;
padding-bottom:auto;
`;

export const TopLine = styled.div`
color:#8cc63f ;
font-size:16px;
line-height:12px;
font-weight:600;
letter-spacing:2px;
text-transform:uppercase;
margin-bottom:50px;
font-size:30px;
@media screen and (max-width: 768px){
    font-size:26px;
}
`;

export const Heading = styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
@media screen and (max-width:480px){
    font-size:32px;
}`;

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:30px;
font-size:20px;
font-weight:18px;
line-height:24px;
white-space: normal;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};`;

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
box-shadow: 0 0 10px 10px #8cc63f;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;


