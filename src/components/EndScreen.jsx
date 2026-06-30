import Stats from "./Stats"

function EndScreen({ count, skipped, onRestart }) {
    return (
        <div className="end-screen">
            <Stats count={count} skipped={skipped}/>
            <button onClick={onRestart}>Play Again?</button>
        </div>
    )
}

export default EndScreen