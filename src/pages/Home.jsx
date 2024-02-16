import { Link } from "react-router-dom"
import { useState,useContext } from "react";




export default function Home() {


    return (
        <><h1>This is the home Page</h1>

            <Link to="/selection">
            <button>Start Game</button>
            </Link>
        </>
    )
}