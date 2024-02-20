import { useState, useRef } from "react"
import "../styles/flashcard.css"
import ReactCardFlip from 'react-card-flip'

export default function FlashCard(props) {

    const [position, setPosition] = useState(true)
    const [flip, setFlip] = useState(false);
    return <>

        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="card">
                <div onClick={() => setFlip(!flip)} className="cardContent">
                    {props.card.en_side}
                </div>
            </div>
            <div className="card">
                <div onClick={() => setFlip(!flip)} className="cardContent">
                    {props.card.jp_side}

                </div>
            </div>
        </ReactCardFlip>

    </>
}

{/* <div className="innerContainer" onClick={() => setPosition(!position)} style={{border:"solid 1px red", height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {position ? props.card.en_side : props.card.jp_side}
            </div> */}
