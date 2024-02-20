import { Link } from "react-router-dom"

export default function Groups(props) {
    const groupPath = "/flashcards/"+props.groupName
    return (
        <>
            <Link to = {groupPath}>
                <div style={{ width: "15vw", height: "20vh", display: "flex", flexDirection: "column", justifyContent: "center", border: "solid 1px black" }}>
                    {props.groupName}
                </div>
            </Link>
        </>
    )
}