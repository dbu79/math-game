import Settings from "./Settings"

function StartScreen({ onStart, min, max, onMinChange, onMaxChange }) { 
    return (
        <div className="start">
            <Settings min={min} max={max} onMinChange={onMinChange} onMaxChange={onMaxChange}/>
            <button className="start-button" onClick={onStart}>Start Game</button>
        </div>
    )
}

export default StartScreen