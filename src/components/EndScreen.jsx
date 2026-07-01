import Stats from "./Stats"
import Settings from "./Settings"

function EndScreen({ count, skipped, onRestart, min, max, onMinChange, onMaxChange }) {
    return (
        <>
            <div className="end-screen">
                <Stats count={count} skipped={skipped}/>
                <button onClick={onRestart}>Play Again?</button>
            </div>
        </>
    )
}

export default EndScreen