import React from 'react';

const PostDetails = (props) => {
    // console.log(props.location.search.split('=')[1])
    return(
        <div className='panel panel-info'>
            <div className='panel-heading'>
                {props.match.params.topic} Details Page
            </div>
            <div className='panel-body'>
                <h2>{props.match.params.topic} Details Page</h2>
                <p>
                    {props.match.params.topic} Details Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I
                </p>
                <h3>You are on page number {props.location.search.split('=')[1]}</h3>
            </div>
        </div>
    )
}

export default PostDetails;