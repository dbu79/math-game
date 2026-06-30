import GetEquation from "../functions/GetEquation"
import Settings from "./Settings"
import { useState, useEffect } from "react"

function Question({ isRunning, onCorrect, onSkip, min, max }) { 
    const [equation, setEquation] = useState(() => GetEquation(Number(min), Number(max)))
    const [miniTimer, setMiniTimer] = useState(4)
    const [guess, setGuess] = useState("")

    const { n1, n2, operator, answer } = equation

    useEffect(() => {
        if (guess === "") return 
        if (Number(guess) === answer) {
            setEquation(GetEquation(Number(min), Number(max)))
            setGuess("")
            setMiniTimer(4)
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
                setEquation(GetEquation(Number(min), Number(max)))
                setGuess("")
                setMiniTimer(4)
                onSkip()
            }
        }
    }, [miniTimer, isRunning, min, max])

    
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


