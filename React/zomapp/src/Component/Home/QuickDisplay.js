import React from 'react';
import {Link} from 'react-router-dom'

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="drinks"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="compHeading">
                                    <a href="../listing/listing.html">{item.mealtype}</a>
                                </div>
                                <div className="compSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }


    return(
        <div class="mainBox">
            {listMeal(props)}
        </div>
    )
}

export default QuickDisplay