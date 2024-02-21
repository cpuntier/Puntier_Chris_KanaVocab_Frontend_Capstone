import "../styles/modal.css"
import { useLocation, useParams } from "react-router-dom";

export default function FlashCardModal({ onClose, engRef, jpRef, groupRef, onSubmit }) {
    const params = useParams();
    console.log(params.groupName);
    return (

        // creats a modal using conditonal rendering in order to provide user an interface to add flashcards
        <div className="Modal">
            <div className="modalContent">
                <div>Add a new flash card</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <div>
                        English:<input type="text" ref={engRef}></input>
                    </div>
                    <div>
                        Japanese:<input type="text" ref={jpRef} />
                    </div>

                    {!params.groupName ? <div>
                        Category:<input type="text" ref={groupRef} />
                    </div> : <></>
                    }
                </div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}