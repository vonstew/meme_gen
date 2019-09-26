import React from "react"
import appStyle from "./App.css"

function Header() {
    return (
        <header className = {appStyle.header}>
            <img className = {appStyle.img}
            src = "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
            alt = "Problem?"
            />
            <p className = {appStyle.p}> Meme Generator</p>
        </header>
    )

}

export default Header