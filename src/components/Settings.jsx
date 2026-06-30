function Settings( { min, max, onMinChange, onMaxChange }) {
    return (
        <div className="settings">
            <p>Equation range:</p>
            <input 
                className="min-box"
                type="number"
                value={min ?? ""}
                onChange={e => onMinChange(e.target.value === "" ? "" : Number(e.target.value))}
            />
            <p>to</p>
            <input
                className="max-box"
                type="number"
                value={max ?? ""}
                onChange={e => onMaxChange(e.target.value === "" ? "" : Number(e.target.value))}
            />
        </div>
    )
}

export default Settings