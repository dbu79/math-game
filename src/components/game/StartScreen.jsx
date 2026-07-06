import SettingsBar from "../settings/SettingsBar"

function StartScreen({ onStart, ranges, onRangeChange, operators, onOperatorsChange, selectedTime, setSelectedTime, difficulty, onDifficultyChange }) { 
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