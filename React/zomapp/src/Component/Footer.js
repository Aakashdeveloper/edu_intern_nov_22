import React from 'react';
import './Footer.css'

const Footer = ( ) => {
    return(
        <footer>
            <hr/>
            <p class="footText">&copy; Developer Funnel</p>
            <div class="footDiv">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footDiv">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footDiv noborder">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <hr/>
            <div>
                <a href="">
                    <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fblogo" class="socialLogo"/>
                </a>
                <a href="">
                    <img src="https://i.ibb.co/GHKVNYt/insta.png" alt="fblogo" class="socialLogo"/>
                </a>
                <a href="">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fblogo" class="socialLogo"/>
                </a>
            </div>
        </footer>
    )

}

export default Footer;