import { useEffect, useState } from "react"
import axios from 'axios'
import KanaTiles from "./KanaTiles"
import {SelectedContext} from "../App"

export default function CharacterChart(props) {
    const [characters, setCharacters] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            try {
                const characters = await axios.get("http://localhost:8000/" + props.kana)
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

    useEffect(() =>{
        let rows = [];
        for(let i = 1; i<12; i++){
            rows.push(characters.filter((item) => item.row === i))
        }
        setRows(rows)
    }, [characters])

    return (
        <>
        {characters.length > 0 ? 
        rows.map((row) => {

            return <>
            <KanaTiles  key = {row.row} row={row} selected ={props.selected} setSelected = {props.setSelected}/>
            </>
        })
        
        : "no"}

        </>
    )
}