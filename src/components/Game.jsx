import { use, useEffect, useState } from "react"
import PlayingScreen from "./game/PlayScreen"
import StartScreen from "./game/StartScreen"
import EndScreen from "./game/EndScreen"

function Game() { 

    const [time, setTime] = useState(30)
    const [selectedTime, setSelectedTime] = useState(30)
    const [hasStarted, setHasStarted] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)
    const [round, setRound] = useState(0)
    const [count, setCount] = useState(0)
    const [skipped, setSkipped] = useState(0)
    const [minAdd1, setMinAdd1] = useState(2)
    const [maxAdd1, setMaxAdd1] = useState(100)
    const [minMul1, setMinMul1] = useState(2)
    const [maxMul1, setMaxMul1] = useState(12)
    const [minAdd2, setMinAdd2] = useState(2)
    const [maxAdd2, setMaxAdd2] = useState(100)
    const [minMul2, setMinMul2] = useState(2)
    const [maxMul2, setMaxMul2] = useState(100)
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
                    minAdd1={minAdd1}
                    maxAdd1={maxAdd1}
                    minMul1={minMul1}
                    maxMul1={maxMul1} 
                    minAdd2={minAdd2}
                    maxAdd2={maxAdd2}
                    minMul2={minMul2}
                    maxMul2={maxMul2}
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
                minAdd1={minAdd1} maxAdd1={maxAdd1} 
                onMinAdd1Change={setMinAdd1} onMaxAdd1Change={setMaxAdd1} 
                minMul1={minMul1} maxMul1={maxMul1}
                onMinMul1Change={setMinMul1} onMaxMul1Change={setMaxMul1}
                minAdd2={minAdd2} maxAdd2={maxAdd2} 
                onMinAdd2Change={setMinAdd2} onMaxAdd2Change={setMaxAdd2} 
                minMul2={minMul2} maxMul2={maxMul2}
                onMinMul2Change={setMinMul2} onMaxMul2Change={setMaxMul2}
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

