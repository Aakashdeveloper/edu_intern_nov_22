import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './listing/listing'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;