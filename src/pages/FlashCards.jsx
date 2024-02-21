import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FlashCard from "../components/FlashCard";
import {createPortal} from 'react-dom';
import FlashCardModal from '../components/FlashCardModal';


export default function FlashCards() {
    const params = useParams()
    const [flashCards,setFlashCards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const engRef = useRef(null);
    const jpRef = useRef(null);
    const groupRef = useRef(null);


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
    }, [showModal])

    async function onCloseHandler(){
        console.log(jpRef.current.value);
        try {
            const addedCard =await axios.post("http://localhost:8000/flashcards", {
                en_side :engRef.current.value,
                jp_side :jpRef.current.value,
                group_name:params.groupName
            })
            if(addedCard){
                console.log(addedCard);
            }
            setShowModal(false);
        } catch (error) {
            console.log("something broke")
            console.log(error);
            setShowModal(false);

        }

    }

    async function onSubmitHandler(){
        try {
            const addedCard =await axios.post("http://localhost:8000/flashcards", {
                en_side :engRef.current.value,
                jp_side :jpRef.current.value,
                group_name:params.groupName
            })
            if(addedCard){
                console.log(addedCard);
            }
            setShowModal(false);
        } catch (error) {
            console.log("something broke")
            console.log(error);
            setShowModal(false);
        }
    }

    return (

        <>
            <p style={{textAlign:"center"}}>Here is the {params.groupName} group </p>
            <br></br>
            <div style={{border: "solid white 1px", display:"flex", flexWrap:"wrap"}}>
            {flashCards.map((card) => <FlashCard card = {card}/>)}
            <div onClick={() => setShowModal(true)} style={{ fontSize: "10vw", width: "15vw", height: "20vh", border: "solid 1px black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    +
                </div>
                {showModal && createPortal(
                    <FlashCardModal onClose={(onCloseHandler)} engRef = {engRef} jpRef = {jpRef} groupRef ={groupRef}　onSubmit={onSubmitHandler}/>,
                    document.body
                )}
            </div>


        </>)
}