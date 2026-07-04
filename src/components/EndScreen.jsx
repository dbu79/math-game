import Stats from "./Stats"

function EndScreen({ count, skipped, onRestart }) {
    return (    
        <>
        <section className="end-screen">
            <Stats count={count} skipped={skipped}/>
                <button className="play-again-button" onClick={onRestart}>
                    Play Again?
                </button>
        </section>
        </>
    )
}

export default EndScreen