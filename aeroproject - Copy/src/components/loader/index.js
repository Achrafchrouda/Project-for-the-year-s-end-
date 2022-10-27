import React from 'react'
import Loadergif from '../images/XC1F (2).gif';
import { LoaderContainer,LoaderImg } from './loaderElements';
const Loader = () => {
  return (
      <LoaderContainer>
          <LoaderImg src={Loadergif}/>
    </LoaderContainer>
  )
}

export default Loader