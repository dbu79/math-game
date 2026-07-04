import Stats from "./Stats"

function EndScreen({ count, skipped, onRestart, equationLog }) {
    return (    
        <>
        <section className="end-screen">
            <Stats count={count} skipped={skipped}/>
                <button className="play-again-button" onClick={onRestart}>
                    Play Again?
                </button>
                {equationLog.map((eq, i) => (
                <p key={i} className={eq.result}>
                    {eq.n1} {eq.operator} {eq.n2} = {eq.answer} — {eq.result}
                </p>
                ))}
        </section>
        </>
    )
}

export default EndScreen