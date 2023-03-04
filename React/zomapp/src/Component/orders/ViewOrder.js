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
        if(this.props.location){
            let query = this.props.location.search.split('&')
            if(query){
                let data={
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${oUrl}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        axios.get(`${oUrl}`).then((res) => {this.setState({orders:res.data})})
    }


}


export default ViewOrder