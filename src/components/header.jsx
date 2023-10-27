import React from "react";
import image from '../assets/images/2.png'
import '../assets/css/Header.css'

function Header() {

    return(
        <div>
            <h1 className="test">I am header</h1>
            <img src={image}/>
        </div>
    )
    
}

export default Header;