import React from 'react';
import './Image.css'

function Image({imglink}) {
    return(
        <img className = "image" src={imglink} alt="practice"/>
        )
    }

export default Image
