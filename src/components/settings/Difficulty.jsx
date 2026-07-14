function DifficultyTab({ difficulty, onDifficultyChange }) {
    return (
        <div className="difficulty-settings">
            <input
            className="difficulty-toggle"
            type="radio"
            id="toggle-easy"
            name="difficulty"
            value="easy"
            checked={difficulty === "easy"}
            onChange={() => onDifficultyChange("easy")}
            />
            <label className="difficulty-label" htmlFor="toggle-easy">Easy</label>

            <input
            className="difficulty-toggle"
            type="radio"
            id="toggle-medium"
            name="difficulty"
            value="medium"
            checked={difficulty === "medium"}
            onChange={() => onDifficultyChange("medium")}
            />
            <label className="difficulty-label" htmlFor="toggle-medium">Medium</label>

            <input
            className="difficulty-toggle"
            type="radio"
            id="toggle-hard"
            name="difficulty"
            value="hard"
            checked={difficulty === "hard"}
            onChange={() => onDifficultyChange("hard")}
            />

            <label className="difficulty-label" htmlFor="toggle-hard">Hard</label>
            <input
            className="difficulty-toggle"
            type="radio"
            id="toggle-custom"
            name="difficulty"
            value="custom"
            checked={difficulty === "custom"}
            onChange={() => onDifficultyChange("custom")}/>
            <label className="difficulty-label" htmlFor="toggle-custom">Custom</label>
        </div>
    )
}

export default DifficultyTab