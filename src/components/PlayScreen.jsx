import Question from "./Question";
import Timer from "./Timer";
import Stats from "./Stats";

function PlayingScreen({ time, round, count, skipped, onCorrect, onSkip, isRunning, onRestart, minAdd1, maxAdd1, minMul1, maxMul1, minAdd2, maxAdd2, minMul2, maxMul2, operators, infMode, onLogCorrect, onLogSkipped }) {
    return (
        <>
        <Timer time={time}/>
        <Question
            key={round}
            isRunning={isRunning}
            onCorrect={onCorrect}
            onSkip={onSkip}
            minAdd1={minAdd1}
            maxAdd1={maxAdd1}
            minMul1={minMul1}
            maxMul1={maxMul1} 
            minAdd2={minAdd2}
            maxAdd2={maxAdd2}
            minMul2={minMul2}
            maxMul2={maxMul2}           
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