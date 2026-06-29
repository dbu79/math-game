function Stats({ count, skipped }) {
    return (
        <div className="stats">
            <p className="count">Score: {count}</p>
            <p className="skipped">Skipped: {skipped}</p>
        </div>
    )
}

export default Stats