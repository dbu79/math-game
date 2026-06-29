import { use, useEffect, useState } from "react"
import PlayingScreen from "./PlayScreen"
import StartScreen from "./StartScreen"

function Game() { 
    const [time, setTime] = useState(20)
    const [hasStarted, setHasStarted] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)
    const [round, setRound] = useState(0)
    const [count, setCount] = useState(0)
    const [skipped, setSkipped] = useState(0)

    const isRunning = hasStarted && time > 0 

    useEffect(() => {
        if (!isRunning) return 
        const countdown = setInterval(() => setTime(prev => prev - 1), 1000)
        return () => clearInterval(countdown) 
    }, [isRunning])
    
    function startGame() { 
        setTime(20)
        setHasStarted(true)
        setRound(r => r + 1)
        setCount(0)
        setSkipped(0)
    }

    return (
        <div className="main">
            {hasStarted ? (
                <PlayingScreen
                    time={time}
                    round={round}
                    count={count}
                    skipped={skipped}
                    isRunning={isRunning}
                    onCorrect={() => setCount(c => c + 1)}
                    onSkip={() => setSkipped(s => s + 1)}
                    onRestart={startGame}/>
            ) : (
                <StartScreen onStart={startGame} />
            )}
        </div>
    )
}

export default Game