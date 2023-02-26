import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer';
import Listing from './listing/listing';
import Details from './Details/details';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/ViewOrder';
import Login from './login/login';
import Register from './login/register'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details/" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;