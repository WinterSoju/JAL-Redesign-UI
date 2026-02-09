import './Footer.css';
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import x from '../assets/x.png'
import yt from '../assets/yt.png'



const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>JAL Group</h4>
                        <a href="/aboutus">
                            <p>About Us</p>
                        </a>
                         <a href="/investorrelations">
                            <p>Investor Relations</p>
                        </a>
                        <a href="/pressrelease">
                            <p>Press Release</p>
                        </a>
                        <a href="/safety">
                            <p>Safety</p>
                        </a>
                        <a href="/sustainability">
                            <p>Sustainability</p>
                        </a>
                        <a href="/jalgroupoffice">
                            <p>JAL Group Office</p>
                        </a>
                        <a href="/careeropportunities">
                            <p>Career Opportunities</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Legal</h4>
                        <a href="/privacypolicy">
                            <p>Privacy Policy</p>
                        </a>
                         <a href="/websitepolicy">
                            <p>Website Policy</p>
                        </a>
                         <a href="/webaccessibility">
                            <p>Web Accessibility</p>
                        </a>
                        <a href="/conditionofcarriage">
                            <p>Conditions of Carriage</p>
                        </a>
                        <a href="/charterflight">
                            <p>Conditions of Carriage by Charter Flight</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Popular Destinations</h4>
                        <a href="/faredeals">
                            <p>Best fare deals</p>
                        </a>
                        <a href="/alldest">
                            <p>All destinations</p>
                        </a>
                        <a href="/tokyoflights">
                            <p>Flight to Tokyo</p>
                        </a>
                         <a href="/osakaflights">
                            <p>Flight to Osaka</p>
                        </a>
                         <a href="/sapporoflights">
                            <p>Flight to Sapporo</p>
                        </a>
                        <a href="/fukuokaflights">
                            <p>Flight to Fukuoka</p>
                        </a>
                    </div>
                      <div className="sb__footer-links_div">
                        <h4>Packages</h4>
                        <a href="/japanpackage">
                            <p>Packages to Japan</p>
                        </a>
                         <a href="/tokyopackage">
                            <p>Packages to Tokyo</p>
                        </a>
                         <a href="/osakapackage">
                            <p>Packages to Osaka</p>
                        </a>
                  
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Support</h4>
                        <a href="/contactus">
                            <p>Contact Us</p>
                        </a>
                         <a href="/FAQ">
                            <p>FAQ</p>
                        </a>
                         <a href="/HelpCentre">
                            <p>Help Centre</p>
                        </a>
                        <a href="/specialassistance">
                            <p>Special Assistance</p>
                        </a>
                        <a href="/chatbot">
                            <p>Chatbot</p>
                        </a>
                    </div>
                    
                    <div className="sb__footer-links_div">
                        <h4>Follow us on:</h4>
                        <div className="socialmedia">
                            <p><img src={ig} alt=""/></p>
                            <p><img src={fb} alt=""/></p>
                            <p><img src={x} alt=""/></p>
                            <p><img src={yt} alt=""/></p>
                        </div>
                    </div>
                </div>

                <div className="sb__awards-middle">
                    <input
                            type="image"
                            src="images/jlogo.png"
                            width="190"
                            height="35"
                        />
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear} Copyright @ Japan Airlines. All rights reserved.
                        </p>
                        <input
                            type="image"
                            src="images/jlogo.png"
                            width="190"
                            height="35"
                        />
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"> <div><p>Terms & Condition</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declarations</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;