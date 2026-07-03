import Stats from "./Stats"
import Settings from "./Settings"

function EndScreen({ count, skipped, onRestart }) {
    return (
        <>
            <Stats count={count} skipped={skipped}/>
            <div className="play-again-button">
                <button onClick={onRestart}>Play Again?</button>
            </div>
        </>
    )
}

export default EndScreen