import { useEffect } from "react";

function ProfileRecords({ scores }) {

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
            <h1>Easy:</h1>
            <div className="record-bar">
                <div className="record-box">
                    <span>30 seconds</span>
                    <span className="record-score">{bestScores.easy?.[30]?.score ?? "--"}</span>
                    <span>{bestScores.easy?.[30]
                    ? `${bestScores.easy[30].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>60 seconds</span>
                    <span className="record-score">{bestScores.easy?.[60]?.score ?? "--"}</span>
                    <span>{bestScores.easy?.[60]
                    ? `${bestScores.easy[60].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>120 seconds</span>
                    <span className="record-score">{bestScores.easy?.[120]?.score ?? "--"}</span>
                    <span>{bestScores.easy?.[120]
                    ? `${bestScores.easy[120].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>200 seconds</span>
                    <span className="record-score">{bestScores.easy?.[200]?.score ?? "--"}</span>
                    <span>{bestScores.easy?.[200]
                    ? `${bestScores.easy[200].accuracy}%`
                    : "--"}
                    </span>
                </div>
            </div>
            <h1>Medium:</h1>
            <div className="record-bar">
                <div className="record-box">
                    <span>30 seconds</span>
                    <span className="record-score">{bestScores.medium?.[30]?.score ?? "--"}</span>
                    <span>{bestScores.medium?.[30]
                    ? `${bestScores.medium[30].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>60 seconds</span>
                    <span className="record-score">{bestScores.medium?.[60]?.score ?? "--"}</span>
                    <span>{bestScores.medium?.[60]
                    ? `${bestScores.medium[60].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>120 seconds</span>
                    <span className="record-score">{bestScores.medium?.[120]?.score ?? "--"}</span>
                    <span>{bestScores.medium?.[120]
                    ? `${bestScores.medium[120].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>200 seconds</span>
                    <span className="record-score">{bestScores.medium?.[200]?.score ?? "--"}</span>
                    <span>{bestScores.medium?.[200]
                    ? `${bestScores.medium[200].accuracy}%`
                    : "--"}
                    </span>
                </div>
            </div>
            <h1>Hard:</h1>
            <div className="record-bar">
                <div className="record-box">
                    <span>30 seconds</span>
                    <span>{bestScores.hard?.[30]?.score ?? "--"}</span>
                    <span>{bestScores.hard?.[30]
                    ? `${bestScores.hard[30].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>60 seconds</span>
                    <span>{bestScores.hard?.[60]?.score ?? "--"}</span>
                    <span>{bestScores.hard?.[60]
                    ? `${bestScores.hard[60].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>120 seconds</span>
                    <span>{bestScores.hard?.[120]?.score ?? "--"}</span>
                    <span>{bestScores.hard?.[120]
                    ? `${bestScores.hard[120].accuracy}%`
                    : "--"}
                    </span>                </div>
                <div className="record-box">
                    <span>200 seconds</span>
                    <span>{bestScores.hard?.[200]?.score ?? "--"}</span>
                    <span>{bestScores.hard?.[200]
                    ? `${bestScores.hard[200].accuracy}%`
                    : "--"}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ProfileRecords
