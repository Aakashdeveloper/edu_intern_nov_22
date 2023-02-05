import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/post" component={Post}/>
                        <Route path="/post/:topic" component={PostDetails}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;