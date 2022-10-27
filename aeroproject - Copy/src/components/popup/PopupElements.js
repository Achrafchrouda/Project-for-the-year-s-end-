import styled from 'styled-components';

export const PopContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;
padding:0;
position:fixed;
height: 750px;
width:750px;
margin-top:50px;
top: 12px; 
right: 0;
z-index:2;
:before {
position:absolute;
top: 12px; 
right: 0;
background: linear-gradiant(
        180deg,
        rgba(0,0,0,0.2) 0%,
        transparent 100%);
        z-index:2;
}
@media screen and (max-width: 768px){
    height:30%;
    width:80%;
    position:fixed;

};
`;


