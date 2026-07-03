function Settings({ minAdd, maxAdd, onMinAddChange, onMaxAddChange, minMult, maxMult, onMinMultChange, onMaxMultChange, selectedTime, setSelectedTime }) {
    return (
        <section className="settings-bar">
            <div className="settings-box add-settings">
                <label className="box-title">Add/Sub Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={minAdd ?? ""}
                        onChange={e => onMinAddChange(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxAdd ?? ""}
                    onChange={e => onMaxAddChange(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
                <div className="settings-box mult-settings">
                <label className="box-title">Mult/Div Range:</label>
                <div className="range-inputs">
                    <input
                        className="min-box"
                        type="number"   
                        value={minMult ?? ""}
                        onChange={e => onMinMultChange(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                    <span className="range-seperator">to</span>
                    <input
                    className="max-box"
                    type="number"
                    value={maxMult ?? ""}
                    onChange={e => onMaxMultChange(e.target.value === "" ? "" : Number(e.target.value))}
                    />                
                </div>
            </div>
            <div className="operator-settings">
                <input className="operator-toggle" type="checkbox" id="toggle-add" />
                <label className="operator-label" htmlFor="toggle-add">+</label>
                <input className="operator-toggle" type="checkbox" id="toggle-subtract" />
                <label className="operator-label" htmlFor="toggle-subtract">-</label>
                <input className="operator-toggle" type="checkbox" id="toggle-multiply" />
                <label className="operator-label" htmlFor="toggle-multiply">×</label>
                <input className="operator-toggle" type="checkbox" id="toggle-divide" />
                <label className="operator-label" htmlFor="toggle-divide">÷</label>
            </div>
            <div className="time-settings">
                <input 
                className="time-toggle" 
                type="radio" 
                id="toggle-15" 
                name="time"
                value={15} 
                checked={selectedTime === 15}
                onChange={() => setSelectedTime(15)}
                />
                <label className="time-label" htmlFor="toggle-15">15</label>
                <input 
                className="time-toggle" 
                type="radio" 
                id="toggle-30" 
                name="time"
                value={30} 
                checked={selectedTime === 30}
                onChange={() => setSelectedTime(30)}
                />
                <label className="time-label" htmlFor="toggle-30">30</label>
                <input 
                className="time-toggle" 
                type="radio" 
                id="toggle-60" 
                name="time"
                value={60} 
                checked={selectedTime === 60}
                onChange={() => setSelectedTime(60)}
                />
                <label className="time-label" htmlFor="toggle-60">60</label>
                <input 
                className="time-toggle" 
                type="radio" 
                id="toggle-120" 
                name="time"
                value={120}
                checked={selectedTime === 120}
                onChange={() => setSelectedTime(120)} 
                />
                <label className="time-label" htmlFor="toggle-120">120</label>
            </div>
        </section>
    )
}

export default Settings