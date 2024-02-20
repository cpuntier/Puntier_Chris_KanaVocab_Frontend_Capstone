import { Link } from "react-router-dom"
import { useState,useContext } from "react";




export default function Home() {


    return (
        <><h1>Welcome to KanaVocab</h1>
        <h2>This is to be used as a resource for learning Japanese. Hover over the buttons below to find out what they do!</h2>

            <Link to="/selection">
            <button>Start Game</button>
            </Link>
            
        </>
    )
}