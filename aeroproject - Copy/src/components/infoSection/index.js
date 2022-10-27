import React,{ useEffect } from 'react';
import { Button } from '../ButtonElement';
import image from '../images/back222.webp'
import drone from '../images/robot.png'
import { InfoContainer, InfoWrapper, InfoRaw, Colum1, TextWrapper, TopLine, BtnWrapp, Subtitle, Colum2, ImgWrap, Img, InfoBgim, ImageBg } from './InfoElements'
import Aos from 'aos';
import { useHistory } from "react-router-dom";

import 'aos/dist/aos.css';
import Link from 'react-scroll/modules/components/Link';
const InfoSection = ({lightBg, id, imgStart, topline, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

    let history = useHistory();

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return <>
        <InfoContainer lightBg={lightBg} id="about">
            <InfoBgim>
            <ImageBg  src={image} type='image/jpg' />
        </InfoBgim>
            <InfoWrapper >
                <InfoRaw data-aos="fade-up" imgStart={imgStart}>
                    <Colum1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Subtitle data-aos="zoom-in" darkText={ darkText }>{ description }</Subtitle>
                            <BtnWrapp>
                            
            
                                <Button onClick={() => {
                 history.push('/login') 
            }} data-aos="flip-left"  to='sevices' smooth='{true}' duration='{500}' spy='{true}' exact='true' offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} style={{fontWeight: 'bold'}}>Participer</Button>
                            </BtnWrapp>
                        </TextWrapper>
                    </Colum1>
                    <Colum2>
                        <ImgWrap>
                            <Img src={drone}></Img>
                        </ImgWrap>
                    </Colum2>
                </InfoRaw>
            </InfoWrapper>
        </InfoContainer>
    </>;
};

export default InfoSection;
