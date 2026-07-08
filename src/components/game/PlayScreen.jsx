import Question from "./Question";
import Timer from "./Timer";
import { useState } from "react";

function PlayingScreen({ time, round, count, skipped, onCorrect, onSkip, isRunning, onRestart, ranges, operators, infMode, onLogCorrect, onLogSkipped }) {
    const [miniTimer, setMiniTimer] = useState(8)

    return (
        <>
        <div className="timer-box">
            <Timer time={time}/>
        </div>
    
        <div className="question-box">
            <div className="mini-timer">
                <span>Question Timer</span>
                <span>{miniTimer}</span>
            </div>
            <Question
            key={round}
            isRunning={isRunning}
            onCorrect={onCorrect}
            onSkip={onSkip}
            ranges={ranges}
            operators={operators}
            infMode={infMode}
            onLogCorrect={onLogCorrect}
            onLogSkipped={onLogSkipped}
            miniTimer={miniTimer}
            onMiniTimerChange={setMiniTimer}
            />
        </div>
        
        <div className="game-stats-box">
            <span className="stat-box correct">Correct: {count}</span>
            <span className="stat-box incorrect">Skipped: {skipped}</span>
            <span className="stat-box total">Total: {skipped + count}</span>
        </div>

        <button className="restart-button" onClick={onRestart}>Restart</button>
        </>
    )
}

export default PlayingScreen