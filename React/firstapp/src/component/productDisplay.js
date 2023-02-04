import React from 'react';
import './productDisplay.css';

const Product = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className='card' key={item.id}>
                <img src={item.image} alt={item.name}/>
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Rs. {item.cost}</p>
                    <p>{item.uses}</p>
                </div>
                
            </div>
        )
    })

    return(
        <div className="main">
            {renderProduct}
        </div>
    )
}

export default Product;
