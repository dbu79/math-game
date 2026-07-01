function Settings({ min, max, onMinChange, onMaxChange }) {
    return (
        <section className="settings-bar">
            <div className="settings-box add-settings">
                <label className="box-title">Add/Sub Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={min ?? ""}
                        onChange={e => onMinChange(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={max ?? ""}
                    onChange={e => onMaxChange(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
                <div className="settings-box mult-settings">
                <label className="box-title">Mult/Div Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={min ?? ""}
                        onChange={e => onMinChange(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={max ?? ""}
                    onChange={e => onMaxChange(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
        </section>
    )
}

export default Settings