import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
const Footer = () => {
  return (
   
    <div className='footer-outer-container'>
      <div className="footer-inner-container">
      <div className="footer-icons">
      <li><FacebookIcon/></li>
      <li><InstagramIcon/></li>
      <li><YouTubeIcon/></li>
      </div>
     <div className='footer-data'>
      <div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Nolice</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Users</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
     </div>
     <div className="service-code">
      <p>
       Service Code
      </p>
     </div>
     <div className="copy-write">
      <p>&copy; 1997-2024 Netflix. Inc.</p>
     </div>
     </div>
     </div>
  )
}

export default Footer
