import './Navbar.css';
import React from 'react';

function Navbar({indexes}) {
    const items = []

    for (const [index, value] of indexes.entries()) {
        items.push(<li className="navitems" key={index}>{value}</li>)

    }

    return(
        <ul className="navbar">
            {items}
        </ul>
    )

}

export default Navbar