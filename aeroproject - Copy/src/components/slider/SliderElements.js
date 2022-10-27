import styled from 'styled-components';

export const SlideContainer = styled.div`
margin-top:150px;
display:flex;
justify-content: center;
align-item:center;
padding-bottom:100px;
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
    bottom:0;
    justify-content: center;
    align-items: center;
    background: linear-gradiant(
        180deg,
        rgba(0,0,0,0.2) 0%,
        transparent 100%);
        z-index:2;
}
`;

export const SlideBgim = styled.div`
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
export const SlideBg = styled.img`
border-radius: 5%;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;