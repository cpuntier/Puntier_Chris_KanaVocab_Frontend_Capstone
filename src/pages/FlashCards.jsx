import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FlashCard from "../components/FlashCard";


export default function FlashCards() {
    const params = useParams()
    const [flashCards,setFlashCards] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function getFlashCards() {
            try {
                const response = await axios.get("http://localhost:8000/flashcards/groups/" +params.groupName)
                console.log(response.data)
                setFlashCards(response.data)
            } catch (error) {
                console.log(error)
            }

        }getFlashCards();
    }, [])
    return (

        <>
            Here is the {params.groupName} group
            <br></br>
            <div style={{border: "solid white 1px", height:"80vh", width:"65vw", display:"flex"}}>
            {flashCards.map((card) => <FlashCard card = {card}/>)}
            </div>
        </>)
}