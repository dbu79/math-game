import Question from "./Question";
import Timer from "./Timer";
import Stats from "./Stats";

function PlayingScreen({ time, round, count, skipped, onCorrect, onSkip, isRunning, onRestart, }) {
    return (
        <>
        <Timer time={time}/>
        <Question
            key={round}
            isRunning={isRunning}
            onCorrect={onCorrect}
            onSkip={onSkip}/>
        <Stats count={count} skipped={skipped}/>
        <button onClick={onRestart}>Restart</button>
        </>
    )
}

export default PlayingScreen