import React, { useEffect,useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, InfoBgim, ImageBg } from './ServicesElements';

import image from '../images/12333.jpg';
//import Img1 from '../images/sondaammar.jpg';
//import Img2 from '../images/imen.jpg';
import Img3 from '../images/unkownperson1.gif';


import Aos from 'aos';
import 'aos/dist/aos.css';
import Descriptions from './Chalenges';
import {homeObjOne,homeObjTwo,homeObjThree} from './Data';

const Organisation = () => {
    const [homeobj, setHomeobj] = useState();
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return <ServicesContainer  id="nous">
        <InfoBgim>
            { <ImageBg  src={image} type='image/jpg' /> }
        </InfoBgim>
        <ServicesH1 style={{marginTop:'20px'}}>--A PROPOS DE NOUS--</ServicesH1>  
        <ServicesWrapper>
            {/* <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjOne);
            
                    }}>
                <ServicesIcon data-aos='fade-up' src={Img1} />
            </ServicesCard>
            <ServicesCard onClick={() => {
                setHomeobj(homeObjTwo);
                    }}>
                <ServicesIcon data-aos='fade-up' src={Img2} />
            </ServicesCard> */}
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjThree);
                    }}>
                <ServicesIcon data-aos='fade-up' src={Img3} />
            </ServicesCard>
        </ServicesWrapper>
        {  homeobj !== undefined ? <Descriptions {...homeobj} /> :
            <div></div>
            }
    </ServicesContainer>;
};

export default Organisation;
