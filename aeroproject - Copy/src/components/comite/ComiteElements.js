import styled from 'styled-components';

export const TeamContainer = styled.div`
display:flex;
justify-content: center;
margin: 150px 20px 150px 20px;
position:relative;
z-index:2;
flex-direction:column;
align-items:center;
height: auto;
margin-bottom:100px
@media screen and ( max-width:768px ){
    height:auto;
    width:auto;
    display:grid;
};
@media screen and ( max-width:480px ){
    height:auto;
    width:auto;
        display:grid;
        margin-top:auto;
};
`;

export const TeamWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
z-index:1;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 20px;
@media screen and ( max-width:1000px ){
     grid-template-columns: 0.8fr 0.8fr;
};
@media screen and ( max-width:768 ){
     grid-template-columns: 0.5fr;
     padding:0 10px;
};`;

export const TeamCard = styled.div`
background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height:230px;
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
export const TeamImg = styled.img`
height: 160px;
width: 160px;
margin-bottom:64px;
`;

export const TeamH1 = styled.h1`
z-index:6;
padding-bottom:30px;
font-size: 3.5rem;
	text-transform: uppercase;
	background: linear-gradient(90deg, #8cc63f 25%, #8cc63f 55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin-bottom:100px;
    @media screen and ( max-width: 768px ){
    font-size: 50px;
      white-space: nowrap; 
    padding-top:80px;
    margin:auto;
};
@media screen and ( max-width: 480px ){
    font-size: auto;
      white-space: nowrap; 
    padding-top:100px;
    margin:auto;
};
`;

export const TeamH2 = styled.h2`
font-size: 1rem;
margin-bottom:10px;
`;

export const TeamP = styled.p`
font-size:1rem;
text-align:center;
`;

export const TeamBgim = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const TeamBg = styled.img`

margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`;

export const PresCard = styled.div`
height:350px;
width:350px
margin-left: auto;
margin-right: auto;
    margin-top:15px;
display:flex;
justify-content: center;
position:relative;
z-index:1;
flex-direction:column;
align-items:center;
@media screen and ( max-width:768px ){
    margin-top:8px;
        margin-bottom:10px;
    height:140px;
    width:140px;
    margin-left: auto;
margin-right: 0;
};
`;
export const PresImg = styled.img`
width:250px;
height:250px;
border-radius:50%;
&:hover{
  border-style: solid;
  border-color: coral;
  border-width: 8px;
  }
`;

export const PresNom = styled.h2`
font-size:35px;
	background: linear-gradient(90deg, #e65c00 25%, #F9D423 55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;`;

export const PresRole = styled.h3`
font-size:25px;
	background: linear-gradient(90deg, #e65c00 25%, #F9D423 55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;`;

export const MemCard = styled.div`
height:200px;
margin-bottom:40px;
margin-top:7px;
width:280px
display:flex;
justify-content: center;
position:relative;
z-index:1;
flex-direction:column;
align-items:center;
@media screen and ( max-width:768px ){
    height:auto;
    width:auto;
    margin-top:auto;
    margin-bottom:auto;

};

`;
export const MemImg = styled.img`
width:180px;
height:180px;
border-radius:50%;
 &:hover{
  border-style: solid;
  border-color: coral;
  }
  @media screen and ( max-width:768px ){
    height:70%;
    width:70%;
}
`;

export const MemNom = styled.h2`
padding-top:8px;
font-size:20px;
	background: linear-gradient(90deg, #e65c00 25%, #F9D423 55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;`;

export const MemRole = styled.h3`
padding-top:8px;
font-size:20px;
	background: linear-gradient(90deg, #e65c00 25%, #F9D423 55%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;`;
