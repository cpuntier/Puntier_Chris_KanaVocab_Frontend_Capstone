import { useEffect, useState,useRef } from "react"
import Groups from "../components/Groups"
import axios from "axios"
import {createPortal} from 'react-dom'
import FlashCardModal from "../components/FlashCardModal"

export default function FlashCards() {
    const [groups, setGroups] = useState([])
    const [filteredText, setFilteredText] = useState("")
    const [showModal, setShowModal] = useState(false);
    const engRef = useRef(null);
    const jpRef = useRef(null);
    const groupRef = useRef(null);

    useEffect(() => {
        async function getGroups() {
            try {
                const response = await axios.get("http://localhost:8000/flashcards/groups")
                setGroups(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        getGroups();
    }, [])

    async function onCloseHandler(){
        console.log(jpRef.current.value);
        try {
            const addedCard =await axios.post("http://localhost:8000/flashcards", {
                en_side :engRef.current.value,
                jp_side :jpRef.current.value,
                group_name:groupRef.current.value
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
            <div>
                These are flashcards
                <br></br>
                <input type="text" placeholder="Search here..." onChange={(e) => setFilteredText(e.target.value)} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {groups.map((group) => {
                    if (filteredText.length > 1) {
                        if (group.toLowerCase().includes(filteredText.toLowerCase())) {
                            return <Groups groupName={group} />
                        }
                    } else {
                        return <Groups groupName={group} />
                    }
                })}
                <div onClick={() => setShowModal(true)} style={{ fontSize: "10vw", width: "300px", height: "200px", border: "solid 1px black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    +
                </div>
                {showModal && createPortal(
                    <FlashCardModal onClose={onCloseHandler} engRef = {engRef} jpRef = {jpRef} groupRef ={groupRef}/>,
                    document.body
                )}
            </div>



        </>)
}