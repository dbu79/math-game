function Timer({ time }) {
    return (
        <div>
            {time > 0 ? <p>{time}</p> : <p>Time's Up</p>}
        </div>
    )
}

export default Timer