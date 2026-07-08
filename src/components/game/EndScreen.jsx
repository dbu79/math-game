import AccuracyChart from "./AccuracyChart"

function EndScreen({ count, skipped, onRestart, equationLog }) {
    const total = count + skipped
    const accuracy = total > 0 ? Math.round((count / total) * 100) : 0

    return (    
        <>
            <div className="stats-row">
                <div className="stat">
                    <span className="stat-label">Correct</span>
                    <span className="stat-value">{count}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Skipped</span>
                    <span className="stat-value">{skipped}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Accuracy</span>
                    <span className="stat-value">{accuracy}%</span>
                </div>
            </div>
        <AccuracyChart equationLog={equationLog}/>
        <button className="play-again-button" onClick={onRestart}>Play again?</button>
        </>

    )
}

export default EndScreen