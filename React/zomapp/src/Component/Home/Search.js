import React,{Component} from 'react';
import './Search.css';

const lurl = "http://3.17.216.66:4000/location";
const rurl = "http://3.17.216.66:4000/restaurant?stateId="

class Search extends Component{

    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity  = (data) => {
        console.log(">>>",data)
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    render() {
        return(
           <>
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select>
                        <option>----Select Your City----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restSelect">
                        <option>----Select Your Restaurants----</option>
                    </select>
                </div>
            </div>
           </>
        )
    }

    //api calling on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search