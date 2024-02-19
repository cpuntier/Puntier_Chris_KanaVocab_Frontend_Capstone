export default function Answer({ kana, current, setCurrent, answer, score, setScore }) {

    return (
        <button onClick={() => { setCurrent(current + 1); if (kana.jp_kana === answer[0]) { setScore(score+1)} }}>{kana.en_romaji}</button>
    )
}