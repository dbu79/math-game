import SettingsBar from "../settings/SettingsBar"

function StartScreen({ onStart, minAdd1, maxAdd1, onMinAdd1Change, onMaxAdd1Change, minMul1, maxMul1, onMinMul1Change, onMaxMul1Change, minAdd2, maxAdd2, onMinAdd2Change, onMaxAdd2Change, minMul2, maxMul2, onMinMul2Change, onMaxMul2Change, operators, onOperatorsChange, selectedTime, setSelectedTime }) { 
    return (
        <>
        <SettingsBar
        minAdd1={minAdd1} maxAdd1={maxAdd1} 
        onMinAdd1Change={onMinAdd1Change} onMaxAdd1Change={onMaxAdd1Change} 
        minMul1={minMul1} maxMul1={maxMul1}
        onMinMul1Change={onMinMul1Change} onMaxMul1Change={onMaxMul1Change}
        minAdd2={minAdd2} maxAdd2={maxAdd2} 
        onMinAdd2Change={onMinAdd2Change} onMaxAdd2Change={onMaxAdd2Change} 
        minMul2={minMul2} maxMul2={maxMul2}
        onMinMul2Change={onMinMul2Change} onMaxMul2Change={onMaxMul2Change}
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