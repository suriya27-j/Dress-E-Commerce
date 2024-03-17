import React from 'react'
import './Footer.css'
import footer_logo from '../asserts/logo_big.png'
import footer_logo1 from '../asserts/logo _1 _big.png'
import instagram_icon from '../asserts/instagram_icon.png'
import pintester_icon from '../asserts/pintester_icon.png'
import whatsapp_icon from '../asserts/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo1} alt="" />
            <p>BellaDre</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer