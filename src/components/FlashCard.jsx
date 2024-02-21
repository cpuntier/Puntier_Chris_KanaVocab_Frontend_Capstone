import { useState, useRef } from "react"
import "../styles/flashcard.css"
import ReactCardFlip from 'react-card-flip'

export default function FlashCard(props) {

    const [position, setPosition] = useState(true)
    const [flip, setFlip] = useState(false);
    return <>
{/* uses react card flip  to simulate flipping a card */}
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

