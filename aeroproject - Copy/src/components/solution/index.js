import React,{useEffect} from 'react';
import { SlideInLeft } from 'react-animated-components';
import Aos from 'aos';
import { ChalengesContainer, ChalengesWrapper, ChalengesRaw, Colum1, TextWrapper, TopLine, BtnWrapp, Heading, Subtitle, Colum2, ImgWrap } from './SolutionElements'
import 'aos/dist/aos.css';
import { Row,Col } from 'react-bootstrap';

const Solution = () => {
 useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return <>
          <SlideInLeft>
        <ChalengesContainer data-aos="fade-left" >

            <ChalengesWrapper >
                <ChalengesRaw >
                    <Colum1> 
                        <TextWrapper >
                        <Heading > SYSTÈME D'AIDE À LA NAVIGATION:</Heading>
                            <TopLine>
Nous proposons une gamme de dispositifs intelligents d’assistance à la navigation permettant aux personnes à
besoins spécifiques de bien interagir avec leur environnement et à surmonter leurs incapacités. Nos
compétences en matière d’intelligence artificielle (I.A) et de technologie des capteurs présentent notre atout
dans le développement de dispositifs innovants.
Nos produits sont d’abord destinés à permettre aux personnes en besoin, telles que les personnes à déficience </TopLine>
                            <Heading ></Heading>
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
              <Heading style={{marginLeft:'100px'}}> SYSTÈMES D'AIDE À LA DÉCISION:</Heading>
                            <Subtitle style={{marginLeft:'100px'}} >
Nos solutions de traitement, d'analyse et modélisation de données se basent sur des théories spécifiques qui
prennent en compte les imperfections dans les données, telles que l'imprécision, l’ambiguïté, l'incomplétude, ...</Subtitle>
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

export default Solution;
