import React from 'react'
import "./foot.css"
import {FaCopyright} from "react-icons/fa"



const Foot = () => {
  return (
    <footer className='pata'>
      <FaCopyright className='copy'></FaCopyright>
        <p>Miroslav Radmil 2023</p>
    </footer>
  )
}

export default Foot
