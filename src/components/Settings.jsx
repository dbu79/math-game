import { useState, useEffect } from "react"

function Settings( { min, max, onMinChange, onMaxChange }) { 
    return (
        <div className="settings">
            <p>Equation range:</p>
            <input 
                className="min-box"
                type="number"
                value={min}
                onChange={e => setMin(e.target.value === "" ? "" : e.target.value)}
            />
            <p>to</p>
            <input
                className="max-box"
                type="number"
                value={max}
                onChange={e => setMax(e.target.value === "" ? "" : e.target.value)}
            ></input>
        </div>
    )
}

export default Settings