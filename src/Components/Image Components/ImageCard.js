import React from "react";

const ImageCard = props => {
    return(
        <div className="img-container">
            <h4>{props.date}</h4>
            <h3>{props.title}</h3>
            <img className="spaceImg" alt="Today's NASA Astronomy Image of the Day" src={props.url}/>
        </div>

    )
}

export default ImageCard;