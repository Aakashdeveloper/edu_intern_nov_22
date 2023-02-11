import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import Header from './Header';
import Footer from './Footer';
import Main from './main';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Main/>}>
                                <Route index element={<Home/>}/>
                                <Route path="home" element={<Home/>}/>
                                <Route path="post" element={<Post/>}/>
                                <Route path="post/:topic" element={<PostDetails/>}/>
                                <Route path="profile" element={<Profile/>}/>
                            </Route>
                        </Routes>
                    </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;