import GetEquation from "../functions/GetEquation"
import { useState, useEffect } from "react"

function Question() { 
    const [equation, setEquation] = useState(() => GetEquation(1, 10))
    const [guess, setGuess] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (guess === "") return 
        if (Number(guess) === answer) {
            newEquation()
            setGuess("")
            setCount(count + 1)
        }
        
    }, [guess])
    const { n1, n2, operator, answer } = equation
    
    function newEquation() {
        setEquation(GetEquation(1, 10))
    }
    function checkAnswer() {
        if (Number(guess) === answer) {
            newEquation()

        }
    }
    return (
        <div className="main">
            <p className="equation">{n1} {operator} {n2} = ?</p>
            <input
            className="input-box"
            type="number"
            value={guess}
            onChange={e => setGuess(e.target.value)}
            
            />
            <p className="counter">Count: {count}</p>
        </div>
    )
}

export default Question


