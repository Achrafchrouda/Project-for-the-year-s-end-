/*import React, { useEffect,useState } from 'react';
import { CounterContainer, LiCounter, SpanCounter } from './CounterElements';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { counting } from '../counter/compteur.js';

const Counter = () => {
    const [obj, setObj] = useState(counting())
    useEffect(() => {
    Aos.init({ duration: 2000 }); 
    const id = setTimeout(() => {
      setObj(counting());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  return obj === { days: 0, hours: 0, minutes: 0, seconds: 0 } ? (
            <CounterContainer>
            <LiCounter data-aos="fade-right" ><SpanCounter>it's Time!!!</SpanCounter>be ready</LiCounter>
        </CounterContainer>
  ):(
  <>
        <CounterContainer>
            <LiCounter data-aos="fade-right" ><SpanCounter>{obj.days}</SpanCounter>jours</LiCounter>
            <LiCounter data-aos="fade-left"><SpanCounter>{obj.hours}</SpanCounter>heures</LiCounter>
            <LiCounter data-aos="fade-right"><SpanCounter>{ obj.minutes }</SpanCounter>minutes</LiCounter>
            <LiCounter data-aos="fade-left"><SpanCounter>{ obj.seconds }</SpanCounter>secondes</LiCounter>
        </CounterContainer>
    </>);
};

export default Counter;*/
