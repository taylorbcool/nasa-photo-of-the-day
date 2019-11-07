import React from "react";
import { Typography } from "@material-ui/core";

const ImageCard = props => {
    return(
        <>
            <Typography variant="h4">{props.date}</Typography>
            <Typography variant="h3">{props.title}</Typography>
            <img className="spaceImg" alt="Today's NASA Astronomy Image of the Day" src={props.url}/>
        </>

    )
}

export default ImageCard;