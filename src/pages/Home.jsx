import { Link } from "react-router-dom"
import { useState, useContext } from "react";

import "../styles/tooltip.css"
import Footer from "../components/Footer"


export default function Home() {
    function clearSelected() {
        setSelected([])
    }


    return (
        <><h1>Welcome to KanaVocab Ver. C</h1> 
            <h2>This is to be used as a resource for learning Japanese. Hover over the buttons below to find out what they do!</h2>

            <div className="tooltip">
            <Link to="/selection">
                <button>Test Yourself</button>
            </Link>
            <span class = "tooltiptext">Click here to test your knowledge</span>
            </div>

            <div className="tooltip">
            <Link to="/chart">
                <button onClick={clearSelected}>Chart</button>
            </Link>
            <span class = "tooltiptext">Click here to check out the character chart</span>

            </div>

            <div className="tooltip">
            <Link to="/flashcards">
                <button onClick={clearSelected}>FlashCards</button>
            </Link>
            <span class = "tooltiptext">Click here to check out your flashcards</span>

            </div>

        </>
    )
}