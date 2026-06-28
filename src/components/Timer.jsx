import { useState, useEffect } from "react"

function Timer({ duration }) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1)
        }, 120);
    }, [time])
    return <div>{time}</div>
}