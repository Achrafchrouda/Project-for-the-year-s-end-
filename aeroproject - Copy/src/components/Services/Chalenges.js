import React,{useEffect} from 'react';
import { SlideInLeft } from 'react-animated-components';
import Aos from 'aos';
import { MemCard,MemImg,MemNom,MemRole} from '../comite/ComiteElements';
import { ChalengesContainer, ChalengesWrapper, ChalengesRaw, Colum1, TextWrapper, TopLine, BtnWrapp, Heading, Subtitle, Colum2, ImgWrap, ButtonUrl } from './ChalengesElemts'
import 'aos/dist/aos.css';
import { Row,Col } from 'react-bootstrap';

const Descriptions = ({lightBg,Pdf,form,resp1Nom,resp1Contact,resp2Nom,resp2Contact, id,respimg1,respimg2, imgStart, topline, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
 useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return <>
          <SlideInLeft>
        <ChalengesContainer data-aos="fade-left" lightBg={lightBg} id="descript">

            <ChalengesWrapper >
                <ChalengesRaw imgStart={imgStart}>
                    <Colum1> 
                        <TextWrapper >
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={ lightText }>{ headLine}</Heading>
                            <BtnWrapp>
                            </BtnWrapp>
                          </TextWrapper>
                          <Row>
                        <Col>

                        </Col>
                        <Col>

                              </Col>
                              </Row>
                    </Colum1>
            <Colum2>
              <TextWrapper >
                            <Subtitle darkText={ darkText }>{ description }</Subtitle>
                            <BtnWrapp>
                            </BtnWrapp>
                        </TextWrapper>
              <BtnWrapp>
                            </BtnWrapp>
                        <ImgWrap>
                        </ImgWrap>
                    </Colum2>
                </ChalengesRaw>
            </ChalengesWrapper>
      </ChalengesContainer>
          </SlideInLeft>

    </>;
};

export default Descriptions;
