import GetEquation from "../../utils/GetEquation"
import { useState, useEffect } from "react"

function Question({ isRunning, onCorrect, onSkip, ranges, operators, infMode, onLogCorrect, onLogSkipped, onMiniTimerChange }) { 
    const [equation, setEquation] = useState(() => GetEquation({ ranges, operators }))
    const [miniTimer, setMiniTimer] = useState(8)
    const [guess, setGuess] = useState("")

    const { n1, n2, operator, answer } = equation

    useEffect(() => {
        if (infMode) {
            setMiniTimer(Infinity)
        }
    }, [infMode])

    useEffect(() => {
        if (guess === "") return 
        if (Number(guess) === answer) {
            onLogCorrect(equation)
            setEquation(GetEquation({ ranges, operators }))
            setGuess("")
            infMode ? setMiniTimer(Infinity) : setMiniTimer(8)
            onCorrect()
        }
    }, [guess, answer])

    useEffect(() => {
        if (!isRunning) return 
        const countdown = setInterval(() => setMiniTimer(prev => prev - 1), 1000)
        return () => clearInterval(countdown)
    }, [isRunning])

    useEffect(() => {
        if (isRunning) {
            if (miniTimer === 0) {
                onLogSkipped(equation)
                setEquation(GetEquation({ ranges, operators }))
                setGuess("")
                infMode ? setMiniTimer(Infinity) : setMiniTimer(8)
                onSkip()
            }
        }
    }, [miniTimer, isRunning, ranges, operators, infMode])

    useEffect(() => {
        onMiniTimerChange?.(miniTimer)
    }, [miniTimer])

    return (
        <>
            <p className="equation">{n1} {operator} {n2}</p>
            <p className="equal-to">= ?</p>
            <input
                className="input-box"
                type="number"
                value={guess}
                onChange={e => setGuess(e.target.value)}
                disabled={!isRunning}
                autoFocus
            />
        </>
    )
}

export default Question


