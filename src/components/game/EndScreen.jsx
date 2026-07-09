import AccuracyChart from "./AccuracyChart"
import { supabase } from "../../utils/supabaseClient"
import { useAuth } from "../auth/AuthContext"
import { useEffect, useState } from "react";

function EndScreen({ count, skipped, onRestart, equationLog, selectedTime, difficulty }) {
    const { user } = useAuth()
    const total = count + skipped
    const accuracy = total > 0 ? Math.round((count / total) * 100) : 0
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        if (saved || !user || selectedTime === Infinity) return 

        async function saveScore() {
            const { error } = await supabase.from('scores').insert({
                user_id: user.id,
                score: count,
                accuracy: accuracy,
                duration: selectedTime,
                difficulty: difficulty,
            })
            if (!error) {
                setSaved(true)
            } else { 
                console.error('Error saving score:', error)
            }
        }

        saveScore()
    }, [user, count, accuracy, selectedTime, difficulty])
    


    return (    
        <>
            <div className="stats-row">
                <div className="stat">
                    <span className="stat-label">Correct</span>
                    <span className="stat-value">{count}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Skipped</span>
                    <span className="stat-value">{skipped}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Accuracy</span>
                    <span className="stat-value">{accuracy}%</span>
                </div>
            </div>
        <AccuracyChart equationLog={equationLog}/>
        <button className="play-again-button" onClick={onRestart}>Play again?</button>
        </>

    )
}

export default EndScreen