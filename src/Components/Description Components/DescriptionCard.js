import React from "react";

const DescriptionCard = props => {
    return(
        <div className="desc-container">
            <p>{props.explanation}</p>
        </div>
    )
}

export default DescriptionCard;