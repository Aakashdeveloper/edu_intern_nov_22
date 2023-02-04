import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDisplay';
import JSON from './db.json';

class App  extends Component {

    constructor(){
        super()

        this.state={
            productData:JSON
        }
    }

    render(){
        return(
            <>
                <Header/>
                <Product prodData={this.state.productData}/>
                <Footer year="2023"/>
            </>
        )
    }
    
}

export default App;
