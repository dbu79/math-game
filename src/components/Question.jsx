import GetEquation from "../functions/GetEquation"
import { useState, useEffect } from "react"

function Question({ isRunning, onCorrect, onSkip, minAdd1, maxAdd1, minMul1, maxMul1, minAdd2, maxAdd2, minMul2, maxMul2, operators, infMode, onLogCorrect, onLogSkipped }) { 
    const [equation, setEquation] = useState(() => GetEquation({
    minAdd1: Number(minAdd1),
    maxAdd1: Number(maxAdd1),
    minMul1: Number(minMul1),
    maxMul1: Number(maxMul1),
    minAdd2: Number(minAdd2),
    maxAdd2: Number(maxAdd2),
    minMul2: Number(minMul2),
    maxMul2: Number(maxMul2),
    operators
}))
    const [miniTimer, setMiniTimer] = useState(4)
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
            setEquation(GetEquation({
                minAdd1: Number(minAdd1),
                maxAdd1: Number(maxAdd1),
                minMul1: Number(minMul1),
                maxMul1: Number(maxMul1),
                minAdd2: Number(minAdd2),
                maxAdd2: Number(maxAdd2),
                minMul2: Number(minMul2),
                maxMul2: Number(maxMul2),
                operators
            }))
            setGuess("")
            infMode ? setMiniTimer(Infinity) : setMiniTimer(4)
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
                setEquation(GetEquation({
                    minAdd1: Number(minAdd1),
                    maxAdd1: Number(maxAdd1),
                    minMul1: Number(minMul1),
                    maxMul1: Number(maxMul1),
                    minAdd2: Number(minAdd2),
                    maxAdd2: Number(maxAdd2),
                    minMul2: Number(minMul2),
                    maxMul2: Number(maxMul2),
                    operators
                }))
                setGuess("")
                infMode ? setMiniTimer(Infinity) : setMiniTimer(4)
                onSkip()
            }
        }
    }, [miniTimer, isRunning, minAdd1, maxAdd1, minMul1, maxMul1, minAdd2, maxAdd2, minMul2, maxMul2, infMode])

    
    return (
        <div className="question-area">
            <p className="equation">{n1} {operator} {n2} = ?</p>
            <input
                className="input-box"
                type="number"
                value={guess}
                onChange={e => setGuess(e.target.value)}
                disabled={!isRunning}
                autoFocus
            />
        </div>
    )
}

export default Question


