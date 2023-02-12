import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "http://3.17.216.66:4000/quicksearch"

const QuickSearch = () => {
    const [title] = useState('Quick Search');
    const [subtitle] = useState('Find Restaurants By MealType');
    const [mealType,setMeal] = useState('')

    useEffect(()=>{
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMeal(data)
        })
    },[])

    return(
        <>
            <div id="quickSearch">
                <span className="quickHeading">
                    {title}
                </span>
                <span className="quickSubHeading">
                    {subtitle}
                </span>
                <QuickDisplay mealData={mealType}/>
            </div>
        </>
    )
}

export default QuickSearch