import GetEquation from "../functions/GetEquation"
import { useState, useEffect } from "react"

function Question({ isRunning, onCorrect, onSkip, minAdd, maxAdd, minMult, maxMult, operators, infMode, onLogCorrect, onLogSkipped }) { 
    const [equation, setEquation] = useState(() => GetEquation(Number(minAdd), Number(maxAdd), Number(minMult), Number(maxMult), operators))
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
            setEquation(GetEquation(Number(minAdd), Number(maxAdd), Number(minMult), Number(maxMult), operators))
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
                setEquation(GetEquation(Number(minAdd), Number(maxAdd), Number(minMult), Number(maxMult), operators))
                setGuess("")
                infMode ? setMiniTimer(Infinity) : setMiniTimer(4)
                onSkip()
            }
        }
    }, [miniTimer, isRunning, minAdd, maxAdd, minMult, maxMult, infMode])

    
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


