import { useState, useContext } from 'react';
import CharacterChart from '../components/CharacterChart';
import { KanaContext,SelectedContext } from '../App';

export default function Chart(props) {
    // const [kanaState, setKanaState] = useState("hiragana")
    const [kanaState,setKanaState] = useContext(KanaContext);
    const [selectede,setSelected] = useContext(SelectedContext)

    return (
            <>
                <div style={{ display: "flex", justifyContent: "space-around", padding:"1em"}}>
                    <button onClick={() => {setKanaState("hiragana");setSelected([])}}>Hiragana</button>
                    <button onClick={() => {setKanaState("katakana");setSelected([])}}>Katakana</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <CharacterChart kana={kanaState} selected={props.selected} setSelected={props.setSelected} />

                </div>
            </>
    )
}