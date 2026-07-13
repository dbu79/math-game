
function ProfileRecords({ scores, time, onTimeChange }) {

    if (scores.length === 0) return (
        <div className="no-data">
            Play a game to log stats
        </div>
    ) 

    const bestScores = scores.reduce((acc, game) => {
        if (!acc[game.difficulty]) {
            acc[game.difficulty] = {}
        }

        const difficulty = acc[game.difficulty]
        const current = difficulty[game.duration]

        if (
            !current ||
            game.score > current.score ||
            (
                game.score === current.score &&
                game.accuracy > current.accuracy
            )
        ) {
            difficulty[game.duration] = game
        }
        return acc
    }, {})


    return (
        <section className="record-section">
            <div className="record-header-bar">
                <h1>Records:</h1>
                <div className="time-choice-box">
                    <input
                    className="time-choice"
                    type="radio"
                    id="toggle-30"
                    name="time"
                    value="easy"
                    checked={time === 30}
                    onChange={() => onTimeChange(30)}
                    />
                    <label className="time-choice-label" htmlFor="toggle-30">30</label>
                    <input
                    className="time-choice"
                    type="radio"
                    id="toggle-60"
                    name="time"
                    value="60"
                    checked={time === 60}
                    onChange={() => onTimeChange(60)}
                    />
                    <label className="time-choice-label" htmlFor="toggle-60">60</label>
                    <input
                    className="time-choice"
                    type="radio"
                    id="toggle-120"
                    name="time"
                    value="120"
                    checked={time === 120}
                    onChange={() => onTimeChange(120)}
                    />
                    <label className="time-choice-label" htmlFor="toggle-120">120</label>
                    <input
                    className="time-choice"
                    type="radio"
                    id="toggle-200"
                    name="time"
                    value="200"
                    checked={time === 200}
                    onChange={() => onTimeChange(200)}
                    />
                    <label className="time-choice-label" htmlFor="toggle-200">200</label>
                </div>
            </div>
            <div className="record-bar">
                <div className="record-box">
                    <span className="record-header">Easy</span>
                    <span>{time} seconds</span>
                    <span className="record-score">{bestScores.easy?.[time]?.score ?? "--"}</span>
                    <span>{bestScores.easy?.[time]
                    ? `${bestScores.easy[time].accuracy}%`
                    : "--"}
                    </span>
                </div>
                <div className="record-box">
                    <span className="record-header">Medium</span>
                    <span>{time} seconds</span>
                    <span className="record-score">{bestScores.medium?.[time]?.score ?? "--"}</span>
                    <span>{bestScores.medium?.[time]
                    ? `${bestScores.medium[time].accuracy}%`
                    : "--"}
                    </span>
                </div>
                <div className="record-box">
                    <span className="record-header">Hard</span>
                    <span>{time} seconds</span>
                    <span className="record-score">{bestScores.hard?.[time]?.score ?? "--"}</span>
                    <span>{bestScores.hard?.[time]
                    ? `${bestScores.hard[time].accuracy}%`
                    : "--"}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ProfileRecords