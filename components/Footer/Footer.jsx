import { FaFirefoxBrowser, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../Footer/Footer.css";
import logo from "../Footer/assets/logo.png";
import { LuSend } from "react-icons/lu";


const Footer = () =>{
    return(
        <>
        <div className="footer-wrap">
            <footer>
              <div className="social-l">
                <div className="f-logo"><img src={logo}/>
                </div>
                <p> Copyright 2024 Beetie kay Ul Kit.<br/> All rights reserved</p>
                <div className="i-link">
                    <div className="media-link"><FaInstagram/></div>
                    <div className="media-link"><FaFirefoxBrowser/></div>
                    <div className="media-link"><FaTwitter/></div>
                    <div className="media-link"><FaYoutube/></div>
                </div>
              </div>
              <div className="mdd">
                <div className="mdtxt">
                <div className="links">
                <span>Company</span>
                <ul>
                    <li className="hov"><a href="#">About us</a></li>
                    <li className="hov"><a href="#">Contact us</a></li>
                    <li className="hov"><a href="#">Pricing</a></li>
                    <li className="hov"><a href="#">Blog</a></li>
                    <li className="hov"><a href="#">Testimonials</a></li>
                </ul>
              </div>
              <div className="links">
                <span>Support</span>
                <ul>
                    <li className="hov"><a href="#">Help center</a></li>
                    <li className="hov"><a href="#">Legal</a></li>
                    <li className="hov"><a href="#">Terms Of Service</a></li>
                    <li className="hov"><a href="#">Privacy poilicy</a></li>
                    <li className="hov"><a href="#">Status</a></li>
                </ul>
              </div>
              <div className="links">
                <span>Stay up to date</span>
                <div className="gmail">
                    <input type="email" name="email" placeholder=" Your email address"/>
                    <div className="deliver-i"><LuSend/></div>
                </div>
                </div>
              </div>
              </div>
            </footer>
        </div>
        </>
    )
};
export default Footer;