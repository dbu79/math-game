import { use, useEffect, useState } from "react"
import PlayingScreen from "./PlayScreen"
import StartScreen from "./StartScreen"
import EndScreen from "./EndScreen"

function Game() { 
    const [time, setTime] = useState(20)
    const [hasStarted, setHasStarted] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)
    const [round, setRound] = useState(0)
    const [count, setCount] = useState(0)
    const [skipped, setSkipped] = useState(0)
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(10)

    const isRunning = hasStarted && time > 0 

    useEffect(() => {
        if (!isRunning) return 
        const countdown = setInterval(() => setTime(prev => prev - 1), 1000)
        return () => clearInterval(countdown) 
    }, [isRunning])
    
    useEffect(() => {
        if (time === 0) {
            setHasEnded(true)
        }
    }, [time])
    function startGame() {   
        setTime(20)
        setHasStarted(true)
        setRound(r => r + 1)
        setCount(0)
        setSkipped(0)
        setHasEnded(false)
    }
    return (
        <div className={`main${hasStarted ? " card" : ""}`}>
            {hasEnded ? (
                <EndScreen count={count} skipped={skipped} onRestart={startGame}/>
            ) : hasStarted ? (
                <PlayingScreen
                    time={time}
                    round={round}
                    count={count}
                    skipped={skipped}
                    isRunning={isRunning}
                    min={min}
                    max={max}
                    onCorrect={() => setCount(c => c + 1)}
                    onSkip={() => setSkipped(s => s + 1)}
                    onRestart={startGame}/>
            ) : (
                <StartScreen 
                onStart={startGame}
                min={min}
                max={max}
                onMinChange={setMin}
                onMaxChange={setMax}
                />
            )}
        </div>
    )
}

export default Game

