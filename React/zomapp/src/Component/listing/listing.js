import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';

const url = "http://3.17.216.66:4000/restaurant?mealtype_id="

class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restList:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h2>Filters</h2>
                            </center>
                            <hr/>
                        </div>
                        <ListingDisplay listData={this.state.restList}/>
                    </div>
                </div>
            </>
        )
    }

    //api calling with axios 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restList:res.data})})
    }
}

export default Listing;