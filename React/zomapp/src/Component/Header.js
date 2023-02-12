import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = ( ) => {
    return(
        <header>
            <div id="brand">
                Developer Funnel &nbsp; 
                <Link className='btn btn-info' to="/">Home</Link>
            </div>
            <div id="social">
                <Link className='btn btn-success' to="/login">
                    <span className='glyphicon glyphicon-log-in'></span> LogIn
                </Link> &nbsp;
                <Link className='btn btn-warning' to="/register">
                    <span className='glyphicon glyphicon-user'></span> Register
                </Link>
            </div>
        </header>
    )

}

export default Header;