import Settings from "./Settings"

function StartScreen({ onStart, minAdd, maxAdd, onMinAddChange, onMaxAddChange, minMult, maxMult, onMinMultChange, onMaxMultChange, selectedTime, setSelectedTime }) { 
    return (
        <>
        <Settings 
        minAdd={minAdd} maxAdd={maxAdd} 
        onMinAddChange={onMinAddChange} onMaxAddChange={onMaxAddChange} 
        minMult={minMult} maxMult={maxMult}
        onMinMultChange={onMinMultChange} onMaxMultChange={onMaxMultChange}
        selectedTime={selectedTime} setSelectedTime={setSelectedTime} 
        />
        <div className="start">
            <button className="start-button" onClick={onStart}>Start Game</button>
        </div>
        </>
    )
}

export default StartScreen