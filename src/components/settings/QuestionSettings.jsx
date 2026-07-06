function QuestionSettings({ minAdd1, maxAdd1, onMinAdd1Change, onMaxAdd1Change, minMul1, maxMul1, onMinMul1Change, onMaxMul1Change, minAdd2, maxAdd2, onMinAdd2Change, onMaxAdd2Change, minMul2, maxMul2, onMinMul2Change, onMaxMul2Change, operators, onOperatorsChange }) {

    
    function toggleOperators(op) {
        if (operators.includes(op)) {
            if (operators.length === 1) return
            onOperatorsChange(operators.filter(o => o != op))
        } else {
            onOperatorsChange([...operators, op])
        }   
    }
    
    return (
        <>
            <div className="settings-box add-settings">
                <label className="box-title">Add/Sub Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={minAdd1 ?? ""}
                        onChange={e => onMinAdd1Change(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxAdd1 ?? ""}
                    onChange={e => onMaxAdd1Change(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                    <label>+</label>                
                    <input
                        className="min-box"
                        type="number"   
                        value={minAdd2 ?? ""}
                        onChange={e => onMinAdd2Change(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxAdd2 ?? ""}
                    onChange={e => onMaxAdd2Change(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
                <div className="settings-box mult-settings">
                <label className="box-title">Mult/Div Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={minMul1 ?? ""}
                        onChange={e => onMinMul1Change(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxMul1 ?? ""}
                    onChange={e => onMaxMul1Change(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                <label>×</label>
                    <input
                        className="min-box"
                        type="number"   
                        value={minMul2 ?? ""}
                        onChange={e => onMinMul2Change(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxMul2 ?? ""}
                    onChange={e => onMaxMul2Change(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>

            <div className="operator-settings">
                <input 
                className="operator-toggle" 
                type="checkbox" 
                id="toggle-add"
                checked={operators.includes("+")}
                onChange={() => toggleOperators("+")}
                disabled={operators.length === 1 && operators.includes("+")}  
                />
                <label className="operator-label" htmlFor="toggle-add">+</label>
                <input 
                className="operator-toggle" 
                type="checkbox" 
                id="toggle-subtract"
                checked={operators.includes("-")}
                onChange={() => toggleOperators("-")} 
                disabled={operators.length === 1 && operators.includes("-")}  
                />
                <label className="operator-label" htmlFor="toggle-subtract">-</label>
                <input 
                className="operator-toggle" 
                type="checkbox" 
                id="toggle-multiply"
                checked={operators.includes("*")}
                onChange={() => toggleOperators("*")}
                disabled={operators.length === 1 && operators.includes("*")}  
                />
                <label className="operator-label" htmlFor="toggle-multiply">×</label>
                <input 
                className="operator-toggle" 
                type="checkbox" 
                id="toggle-divide" 
                checked={operators.includes("/")}
                onChange={() => toggleOperators("/")}
                disabled={operators.length === 1 && operators.includes("/")}  
                />
                <label className="operator-label" htmlFor="toggle-divide">÷</label>
            </div>
        </>
    )
}

export default QuestionSettings