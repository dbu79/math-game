import Settings from "./Settings"

function StartScreen({ onStart, min, max, onMinChange, onMaxChange }) { 
    return (
        <>
        <Settings min={min} max={max} onMinChange={onMinChange} onMaxChange={onMaxChange}/>
        <div className="start">
            <button className="start-button" onClick={onStart}>Start Game</button>
        </div>
        </>
    )
}

export default StartScreen