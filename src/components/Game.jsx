import { useEffect, useState } from "react"
import PlayingScreen from "./game/PlayScreen"
import StartScreen from "./game/StartScreen"
import EndScreen from "./game/EndScreen"
import { DIFFICULTIES } from "../functions/Difficulties"

function Game() { 
    const DEFAULT_RANGES = {
        add1: { min: 2, max: 100 },
        add2: { min: 2, max: 100 },
        mul1: { min: 2, max: 12 },
        mul2: { min: 2, max: 100 }
    }
    const [time, setTime] = useState(30)
    const [selectedTime, setSelectedTime] = useState(30)
    const [hasStarted, setHasStarted] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)
    const [round, setRound] = useState(0)
    const [count, setCount] = useState(0)
    const [skipped, setSkipped] = useState(0)

    const [operators, setOperators] = useState(["+", "-", "*", "/"])
    const [infMode, setInfMode] = useState(false)
    const [equationLog, setEquationLog] = useState([])
    const [ranges, setRanges] = useState(DEFAULT_RANGES)
    const [difficulty, setDifficulty] = useState("easy")

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

    function updateRange(key, bound, value) {
        setRanges(prev => ({
            ...prev, 
            [key]: { ...prev[key], [bound]: value }
        }))
    }

    function onDifficultyChange(level) {
        setDifficulty(level)
        if (level !== "custom") {
            setRanges(DIFFICULTIES[level].ranges)
        }
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
                onRestart()
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
                    ranges={ranges}
                    operators={operators}
                    onCorrect={() => setCount(c => c + 1)}
                    onSkip={() => setSkipped(s => s + 1)}
                    onLogCorrect={logCorrect}
                    onLogSkipped={logSkipped}
                    onRestart={onRestart}
                    infMode={infMode}/>
            ) : (
                <StartScreen 
                onStart={startGame}
                ranges={ranges}
                onRangeChange={updateRange}
                operators={operators}
                onOperatorsChange={setOperators}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                difficulty={difficulty}
                onDifficultyChange={onDifficultyChange}
                />
            )}
        </div>
    )
}

export default Game

