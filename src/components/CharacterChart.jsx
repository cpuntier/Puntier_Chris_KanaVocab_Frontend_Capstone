import { useEffect, useState } from "react"
import axios from 'axios'
import KanaTiles from "./KanaTiles"
import Footer from "./Footer";

export default function CharacterChart(props) {
    const [characters, setCharacters] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function getCharacters() { //used tomake api call to obtain characters
            try {
                const characters = await axios.get("https://puntier-chris-kanavocab-backend-capstone.onrender.com/" + props.kana)
                // console.log(characters.data);
                let sortedArray = characters.data.sort((a,b) => {
                    if(a.row === b.row){
                        return a.column - b.column
                    }
                    return a.row - b.row;
                });
                setCharacters(sortedArray);
            } catch (error) {
                console.log(error);
            }

        } getCharacters();
    }, [props.kana])

    useEffect(() =>{ //used to manipulate data to make it more useable
        let rows = [];
        for(let i = 1; i<12; i++){
            rows.push(characters.filter((item) => item.row === i))
        }
        setRows(rows)
    }, [characters])

    return (
        <>
        {characters.length > 0 ? 
        rows.map((row) => { // maps over data to create chart 

            return <>
            <KanaTiles  key = {row.row} row={row} selected ={props.selected} setSelected = {props.setSelected}/>
            </>
        })
        
        : "Loading"}

        </>
    )
}