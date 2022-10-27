import React, { useEffect,useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, InfoBgim, ImageBg } from './ServicesElements';
import image from '../images/12345.jpg';
import cmp1 from '../images/11.png';
import cmp2 from '../images/22.png';
import cmp3 from '../images/33.png';
import cmp4 from '../images/44.png';
import cmp5 from '../images/55.png';
import cmp6 from '../images/66.png';



import Aos from 'aos';
import 'aos/dist/aos.css';
import Descriptions from './Chalenges';
import {homeObjOne,homeObjTwo,homeObjThree, homeObjfour, homeObjfive, homeObjsix} from './Data';

const Services = () => {
    const [homeobj, setHomeobj] = useState();
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return <ServicesContainer  id="sevices">
        <InfoBgim>
            <ImageBg  src={image} type='image/jpg' />
        </InfoBgim>
        <ServicesH1 style={{marginTop:'20px'}}>--Nos Domaines D'activités--</ServicesH1>  
        <ServicesWrapper>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjOne);
            
                    }}>
                <ServicesIcon  src={cmp1} />
                <ServicesH2>Recherche & développement</ServicesH2>
            </ServicesCard>
            <ServicesCard to='descript' onClick={() => {
                setHomeobj(homeObjTwo);
                    }}>
                <ServicesIcon src={cmp2} />
                <ServicesH2>Analyses de données </ServicesH2> <br></br>
            </ServicesCard>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjThree);
                    }}>
                        <ServicesIcon src={cmp3} />
                <ServicesH2>Consulation</ServicesH2> <br></br>
            </ServicesCard>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjfour);
                    }}>
                        <ServicesIcon src={cmp4} />
                <ServicesH2>Conception</ServicesH2> <br></br>
            </ServicesCard>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjfive);
                    }}>
                        <ServicesIcon src={cmp5} />
                <ServicesH2>Installation</ServicesH2> <br></br>
            </ServicesCard>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjsix);
                    }}>
                <ServicesIcon src={cmp6} />
                <ServicesH2>Solutions Intelligentes </ServicesH2>
            </ServicesCard>
        </ServicesWrapper>
        {  homeobj !== undefined ? <Descriptions {...homeobj} /> :
            <div></div>
            }
    </ServicesContainer>;
};

export default Services;
