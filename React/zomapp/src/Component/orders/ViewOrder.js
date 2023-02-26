import React,{Component} from 'react';
import DisplayOrder from './DisplayOrder';
import axios from 'axios';
import Header from '../Header';

const oUrl = "http://localhost:9101/orders";
class ViewOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }


    render(){
        return(
            <>
                <Header/>
                <DisplayOrder orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        axios.get(`${oUrl}`).then((res) => {this.setState({orders:res.data})})
    }


}


export default ViewOrder