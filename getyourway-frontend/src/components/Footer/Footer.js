import React from 'react'
import './Footer.css'
import logo from '../images/Sky.png'

export const Footer = () => {
  return (
    <footer className='footer'>
        <img src={logo} width="70px" alt='Skylogo' />
       <p>&copy; GetYourWay 2023</p>
    </footer>
  )
}

export default Footer;
