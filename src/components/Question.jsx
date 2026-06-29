import GetEquation from "../functions/GetEquation"
import { useState, useEffect } from "react"

function Question({ isRunning }) { 
    const [equation, setEquation] = useState(() => GetEquation(1, 10))
    const [guess, setGuess] = useState("")
    const [count, setCount] = useState(0)

    const { n1, n2, operator, answer } = equation

    useEffect(() => {
        if (guess === "") return 
        if (Number(guess) === answer) {
            setEquation(GetEquation(1, 10))
            setGuess("")
            setCount(c => c + 1)
        }
    }, [guess, answer])
    
    return (
        <div className="question-area">
            <p className="equation">{n1} {operator} {n2} = ?</p>
            <input
                className="input-box"
                type="number"
                value={guess}
                onChange={e => setGuess(e.target.value)}
                disabled={!isRunning}
            />
            <p className="counter">Count: {count}</p>
        </div>
    )
}

export default Question


