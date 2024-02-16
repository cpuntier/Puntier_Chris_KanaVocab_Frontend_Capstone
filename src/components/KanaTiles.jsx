export default function KanaTiles(props) {

    return (
        <>
            <div style={{ fontSize: "30pt", width: "15vw", height: "15vh"}}>
                <div style={{backgroundColor :"gray", width: "10vw", height:"12vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {props.kana.jp_kana}
                </div>
            </div>
        </>
    )

}