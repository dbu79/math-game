import { use, useEffect, useState } from "react"
import PlayingScreen from "./PlayScreen"
import StartScreen from "./StartScreen"
import EndScreen from "./EndScreen"

function Game() { 
    const [time, setTime] = useState(30)
    const [selectedTime, setSelectedTime] = useState(30)
    const [hasStarted, setHasStarted] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)
    const [round, setRound] = useState(0)
    const [count, setCount] = useState(0)
    const [skipped, setSkipped] = useState(0)
    const [minAdd, setMinAdd] = useState(2)
    const [maxAdd, setMaxAdd] = useState(10)
    const [minMult, setMinMult] = useState(2)
    const [maxMult, setMaxMult] = useState(10)
    const [operators, setOperators] = useState(["+", "-", "*", "/"])
    const [infMode, setInfMode] = useState(false)
    const [equationLog, setEquationLog] = useState([])

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

    useEffect(() => {
        if (selectedTime === Infinity) {
            setInfMode(true)
        }
    }, [selectedTime])
    
    function onRestart() {
        setHasStarted(false)
        setHasEnded(false)
    }

    function startGame() {   
        setTime(selectedTime)
        setHasStarted(true)
        setRound(r => r + 1)
        setCount(0)
        setSkipped(0)
        setEquationLog([])
        setHasEnded(false)
    }

    function logSkipped(equation) {
        setEquationLog(prev => [...prev, {...equation, result: "skipped"}])
    }

    function logCorrect(equation) {
        setEquationLog(prev => [...prev, {...equation, result: "correct"}])
    }

    useEffect(() => {
        if (!isRunning) return

        function handleKeyDown(e) {
            if (e.key === "Tab") {
                e.preventDefault()
                startGame()
            }
        }
            window.addEventListener("keydown", handleKeyDown)
            return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isRunning])


    return (
        <div className={`main${hasEnded ? " end-screen" : hasStarted ? " card" : ""}`}>
            {hasEnded ? (
                <EndScreen 
                count={count}
                skipped={skipped} 
                onRestart={onRestart}
                equationLog={equationLog}
                />
            ) : hasStarted ? (
                <PlayingScreen
                    time={time}
                    round={round}
                    count={count}
                    skipped={skipped}
                    isRunning={isRunning}
                    minAdd={minAdd}
                    maxAdd={maxAdd}
                    minMult={minMult}
                    maxMult={maxMult}
                    operators={operators}
                    onCorrect={() => setCount(c => c + 1)}
                    onSkip={() => setSkipped(s => s + 1)}
                    onLogCorrect={logCorrect}
                    onLogSkipped={logSkipped}
                    onRestart={startGame}
                    infMode={infMode}/>
            ) : (
                <StartScreen 
                onStart={startGame}
                minAdd={minAdd}
                maxAdd={maxAdd}
                onMinAddChange={setMinAdd}
                onMaxAddChange={setMaxAdd}
                minMult={minMult}
                maxMult={maxMult}
                onMinMultChange={setMinMult}
                onMaxMultChange={setMaxMult}
                operators={operators}
                onOperatorsChange={setOperators}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                />
            )}
        </div>
    )
}

export default Game

