import SettingsBar from "../settings/SettingsBar"
import { useEffect } from "react"

function StartScreen({ onStart, ranges, onRangeChange, operators, onOperatorsChange, selectedTime, setSelectedTime, difficulty, onDifficultyChange }) { 
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Enter") {
                e.preventDefault()
                onStart()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onStart])
    
    return (
        <>
        <SettingsBar
        difficulty={difficulty} onDifficultyChange={onDifficultyChange}
        ranges={ranges} onRangeChange={onRangeChange}
        selectedTime={selectedTime} setSelectedTime={setSelectedTime} 
        operators={operators} onOperatorsChange={onOperatorsChange}
        />
        <div className="start">
            <button className="start-button" onClick={onStart}>Start Game</button>
        </div>
        </>
    )
}

export default StartScreen