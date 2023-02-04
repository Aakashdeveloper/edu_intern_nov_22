import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.year}</h2>
            </center>
        </>
    )
}

export default Footer