import Question from "./Question";
import Timer from "./Timer";
import Stats from "./Stats";

function PlayingScreen({ time, round, count, skipped, onCorrect, onSkip, isRunning, onRestart, minAdd, maxAdd, minMult, maxMult, operators, infMode, onLogCorrect, onLogSkipped }) {
    return (
        <>
        <Timer time={time}/>
        <Question
            key={round}
            isRunning={isRunning}
            onCorrect={onCorrect}
            onSkip={onSkip}
            minAdd={minAdd}
            maxAdd={maxAdd}
            minMult={minMult}
            maxMult={maxMult}            
            operators={operators}
            infMode={infMode}
            onLogCorrect={onLogCorrect}
            onLogSkipped={onLogSkipped}
            />
        <Stats count={count} skipped={skipped}/>
        <button className="restart-button" onClick={onRestart}>Restart</button>
        </>
    )
}

export default PlayingScreen