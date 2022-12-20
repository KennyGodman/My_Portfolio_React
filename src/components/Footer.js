import React from 'react'
import FaInstagram from "react-icons"
import FaTwitter from  "react-icons"
import FaFacebook from "react-icons"
import FaWhatsapp from "react-icons"
import FaLinkedIn from "react-icons"
import FaGitHub from "react-icons"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaWhatsapp />
            <FaLinkedIn />
            <FaGitHub  />
        </div>
        <p>&copy; 2022 godmantech.com</p>
    </div>
  )
}

export default Footer