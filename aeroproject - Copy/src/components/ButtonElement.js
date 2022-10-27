import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
border-radius:50px;
background: ${({ primary }) => (primary ? 'linear-gradient(90deg, #8cc63f 25%, #8cc63f 55% )' : '#010606')};
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
    padding: ${({ big }) => (big ? '10px 38px' : '9px 23px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '15px' : '12px')};
}
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
}
`;
