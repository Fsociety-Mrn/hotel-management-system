import React from "react";
import './footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                  <div className="sb__footer-links_div">
                        <h4>FOR BUSINESS</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>RESOURCES</h4>
                    <a href="/resource">
                            <p>Resource Center</p>
                    </a>
                    <a href="/resource">
                            <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                            <p>STV</p>
                    </a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>PARTNERS</h4>
                    <a href="/employer">
                            <p>hello friend</p>
                    </a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>COMPANY</h4>
                    <a href="/about">
                            <p>About</p>
                    </a>
                    <a href="/press">
                            <p>Press</p>
                    </a>
                    <a href="/career">
                            <p>Career</p>
                    </a>
                    <a href="/contact">
                            <p>Contact</p>
                    </a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>OUR SOCIALS</h4>
                    <div className="socialmedia">
                        <p><FaFacebook className="facebook" size={30}/></p>
                        <p><FaTwitter className="twitter" size={30}/></p>
                        <p><FaInstagram className="instagram" size={30}/></p>
                        <p><FaLinkedin className="linkedin" size={30}/></p>
                    </div>
                  </div>
                </div>

            <hr></hr>

            <div className="sb__footer-below">
                <p>
                  ALL RIGHTS RESERVED. COPYRIGHT @{new Date().getFullYear()} 
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms of Use</p></div></a>
                <a href="/privacy"><div><p>Privacy Policy</p></div></a>
            </div>

            </div>
        </div>
    )
}

export default Footer;