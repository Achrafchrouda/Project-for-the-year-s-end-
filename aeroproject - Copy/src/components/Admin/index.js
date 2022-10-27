import React, {useState, useEffect} from 'react';
import video from '../videos/frr.mp4';
import { Button } from '../ButtonElement';
import { HeroContainerAdmin, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElementsAdmin';
//import Counter from '../counter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const columns = [
    {
        name: 'nom',
        selector: row => row.nom,
    },
    {
        name: 'prenom',
        selector: row => row.prenom,
    },

    {
        name: 'email',
        selector: row => row.email,
    },


    {
        name: 'problem',
        selector: row => row.problem,
    },
    

];


const HeroSectionAdmin = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
      },[]);

    const fetchData = ()=>{
        
        axios.get('http://localhost:3000/contact',)
          .then(function (response) {
            console.log(response.data);
            // setData(response.data[0])
            console.log(data);
            setData(response.data)
            console.log(data);
  
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return <HeroContainerAdmin id="home">
    <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
    </HeroBg>
    <HeroContent>
        
        <HeroH1 data-aos="fade-up" >Les problemes des clients </HeroH1>
        <HeroBtnWrapper>
        <DataTable style={{width:"100%"}}

            columns={columns}
            data={data}/>


        </HeroBtnWrapper>
            
            
    </HeroContent>
</HeroContainerAdmin>;
};

export default HeroSectionAdmin;
