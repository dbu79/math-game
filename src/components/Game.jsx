import { useEffect, useState } from "react"
import Question from "./Question"
import Timer from "./Timer"

function Game() { 
    const [time, setTime] = useState(30)
    const [time2, setTime2] = useState(5)
    const [hasStarted, setHasStarted] = useState(false)
    const [round, setRound] = useState(0)
    const isRunning = hasStarted && time > 0 

    useEffect(() => {
        if (!isRunning) return 
        const countdown = setInterval(() => setTime(prev => prev - 1), 1000)
        return () => clearInterval(countdown)
    }, [isRunning])

    useEffect(() => {
        if (!isRunning) return
        const countdown2 = setInterval(() => setTime2(prev => prev - 1), 1000);
        return () => clearInterval(countdown2)
    }, [isRunning])
    
    function startGame() { 
        setTime(10)
        setHasStarted(true)
        setRound(r => r + 1)
    }

    return (
        <div className="main"> 
            <Timer time={time}/>
            <Question key={round} isRunning={isRunning} />
            <button onClick={startGame}>
                {hasStarted ? "Restart" : "Start"}
            </button>
        </div>

    )
}

export default Game