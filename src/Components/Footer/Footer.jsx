import React from "react";
import './Footer.css'
import footer_logo from '../Assets/ecomm img.jpg'
import instagram_icon from '../Assets/ecomm img.jpg'
import pintester_icon from '../Assets/ecomm img.jpg'
import whatsapp_icon from '../Assets/ecomm img.jpg'
const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" className="footimg"/>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" className="iconimg"/>
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" className="iconimg"/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" className="iconimg"/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>
                    Copyright @ 2024 - All Right Reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer