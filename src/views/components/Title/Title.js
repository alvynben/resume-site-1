import './Title.css';
import React from 'react';

function Title({heading,subheading}) {
    return(
        <div className="title">
            <h1 className="titleHeading">{heading}</h1>
            <p className="titleSubheading">{subheading}</p>
        </div>
    )

}

export default Title