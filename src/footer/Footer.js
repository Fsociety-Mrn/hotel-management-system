import React from "react";
import './footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                  <div className="sb__footer-links_div">
                        <h4>For Business</h4>
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
                    <h4>Resources</h4>
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
                    <h4>Partners</h4>
                    <a href="/employer">
                            <p>hello friend</p>
                    </a>
                  </div>
                  <div className="sb__footer-links_div">
                    <h4>Company</h4>
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
                    <h4>Our Socials</h4>
                    <div className="socialmedia">
                        <p><FaFacebook className="icons facebook"/></p>
                        <p><FaTwitter className="icons twitter"/></p>
                        <p><FaInstagram className="icons instagram"/></p>
                        <p><FaLinkedin className="icons linkedin"/></p>
                    </div>
                  </div>
                </div>

            <hr></hr>

            <div className="sb__footer-below">
                <p>
                    @{new Date().getFullYear()} Do Hotel. All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>

            </div>
        </div>
    )
}

export default Footer;