import React from 'react'
import InstagramIcon from "@material-ui/icons/Insagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import WhatsappIcon from "@material-ui/icons/Whatsapp"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHubIcon"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <WhatsappIcon />
            <LinkedInIcon />
            <GitHubIcon   />
        </div>
        <p>&copy; 2022 godmantech.com</p>
    </div>
  )
}

export default Footer