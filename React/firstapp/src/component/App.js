import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDisplay';
import JSON from './db.json';

class App  extends Component {

    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filteredData:output})
    }

    render(){
        return(
            <>
                <Header userInput={(data)=>{this.filterData(data)}} />
                <Product prodData={this.state.filteredData}/>
                <Footer year="2023"/>
            </>
        )
    }
    
}

export default App;
