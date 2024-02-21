import "../styles/table.css"

export default function ScoreReport(props) {
    return (
        <>
            <table style={{ margin:"auto" }}>
                <tr>
                    <th>Kana</th>
                    <th>Answer</th>
                    <th>Your Answer</th>
                    <th>Result</th>
                </tr>
                {props.report.map((item) => {
                    {
                        return <tr style={{backgroundColor: (item["result"] ?"green" : "red") }}>
                            <td>{item.kana}</td>
                            <td>{item.answer}</td>
                            <td>{item.yourAnswer}</td>
                            <td>{item.result ? <>Correct</> :<> Wrong</>}</td>
                        </tr>
                    }
                })
                }

            </table >
        </>
    )
}