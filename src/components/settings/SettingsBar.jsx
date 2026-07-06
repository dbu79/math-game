import QuestionSettings from "./QuestionSettings"

function SettingsBar({ ranges, onRangeChange, selectedTime, setSelectedTime, operators, onOperatorsChange }) {

    return (
        <section className="settings-bar">
            <QuestionSettings 
                ranges={ranges}
                onRangeChange={onRangeChange}
                selectedTime={selectedTime} 
                setSelectedTime={setSelectedTime} 
                operators={operators} 
                onOperatorsChange={onOperatorsChange}
            />
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
                <input 
                className="time-toggle" 
                type="radio" 
                id="toggle-inf" 
                name="time"
                value={Infinity}
                checked={selectedTime === Infinity}
                onChange={() => setSelectedTime(Infinity)} 
                />
                <label className="time-label" htmlFor="toggle-inf">∞</label>
            </div>
        </section>
    )
}

export default SettingsBar