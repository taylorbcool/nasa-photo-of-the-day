import React, {useState, useEffect} from "react";
import axios from "axios";
import DescriptionCard from "./Description Components/DescriptionCard";
import ImageCard from "./Image Components/ImageCard";

export default function MainCard() {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=lSWLvX9H1ezSKnWpoKSYoEpLKWnFIdi1PqF9TIR5')
        .then(response => {
            setPic(response.data);
        })
        .catch(error => {
            console.log(`Could not get data; ${error}`)
        })
    },[])

    return(
        <div className="main-card">
            <ImageCard 
                key={pic.date}
                date={pic.date}
                title={pic.title}
                url={pic.url}
            />
            <DescriptionCard 
                explanation={pic.explanation}
            />
        </div>
    )
}
