import QuestionSettings from "./QuestionSettings"
import DifficultyTab from "./Difficulty"

function SettingsBar({ difficulty, onDifficultyChange, ranges, onRangeChange, selectedTime, setSelectedTime, operators, onOperatorsChange }) {
    return (
        <section className="settings-bar">
            <div className="settings-main">
                <DifficultyTab
                difficulty={difficulty}
                onDifficultyChange={onDifficultyChange}
                />
                <div className="time-settings">
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
                    id="toggle-200" 
                    name="time"
                    value={200}
                    checked={selectedTime === 200}
                    onChange={() => setSelectedTime(200)} 
                    />
                    <label className="time-label" htmlFor="toggle-200">200</label>
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
            </div>
            <div className={`${difficulty === "custom" ? "settings-expanded" : "settings-hidden"}`}>
                <QuestionSettings 
                    ranges={ranges}
                    onRangeChange={onRangeChange}
                    selectedTime={selectedTime} 
                    setSelectedTime={setSelectedTime} 
                    operators={operators} 
                    onOperatorsChange={onOperatorsChange}
                />
            </div>
        </section>
    )
}


export default SettingsBar