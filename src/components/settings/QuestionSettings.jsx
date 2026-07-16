function QuestionSettings({ ranges, onRangeChange, operators, onOperatorsChange }) {

    
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
                        value={ranges.add1.min ?? ""}
                        onChange={e => onRangeChange("add1", "min", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={ranges.add1.max ?? ""}
                    onChange={e => onRangeChange("add1", "max", e.target.value === "" ? "" : Number(e.target.value))}
                    />
                    <label>+</label>                
                    <input
                        className="min-box"
                        type="number"   
                        value={ranges.add2.min ?? ""}
                        onChange={e => onRangeChange("add2", "min", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={ranges.add2.max ?? ""}
                    onChange={e => onRangeChange("add2", "max", e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
                <div className="settings-box mult-settings">
                <label className="box-title">Mult/Div Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={ranges.mul1.min ?? ""}
                        onChange={e => onRangeChange("mul1", "min", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={ranges.mul1.max ?? ""}
                    onChange={e => onRangeChange("mul1", "max", e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                <label>×</label>
                    <input
                        className="min-box"
                        type="number"   
                        value={ranges.mul2.min ?? ""}
                        onChange={e => onRangeChange("mul2", "min", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={ranges.mul2.max ?? ""}
                    onChange={e => onRangeChange("mul2", "max", e.target.value === "" ? "" : Number(e.target.value))}
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