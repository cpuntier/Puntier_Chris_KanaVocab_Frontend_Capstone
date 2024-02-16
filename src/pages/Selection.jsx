import { useState } from "react";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { useContext } from "react";



export default function Selection() {


    return (
        <>
            <h1>Select your stuff</h1>
            <Chart/>
            <Link to ="/startgame">
                <button>Start Game</button>

            </Link>
        </>)
}