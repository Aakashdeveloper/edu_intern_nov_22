import React from 'react';
import './Header.css'

const Header = ( ) => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
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
        </header>
    )

}

export default Header;