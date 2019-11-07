import React from "react";
import { Typography } from "@material-ui/core";

const DescriptionCard = props => {
    return(
        <>
            <Typography variant="p">{props.explanation}</Typography>
        </>
    )
}

export default DescriptionCard;