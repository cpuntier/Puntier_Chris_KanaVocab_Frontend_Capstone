import "../styles/modal.css"

export default function FlashCardModal({ onClose, engRef, jpRef, groupRef, onSubmit }) {
    return (
        <div className="Modal">
            <div>Add a new flash card</div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
            <div>
                English:<input type="text" ref = {engRef}></input>
            </div>
            <div>
                Japanese:<input type="text" ref ={jpRef}/>
            </div>
            <div>
                Category:<input type = "text" ref = {groupRef}/>
            </div>
            </div>
            <div>
                <button onClick={onClose}>Close</button>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}