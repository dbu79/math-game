import "../../styles/profile.css"
import { CircleUser } from "lucide-react"

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { useAuth } from "../auth/AuthContext"
import ProfileRecords from "./ProfileRecords"
import ProfileGraph from "./ProfileGraph";

function ProfileStats() {
    const { user } = useAuth()
    const [scores, setScores] = useState([])
    const [loading, setLoading] = useState(true)
    const [time, setTime] = useState(30)

    useEffect(() => {
        if (!user) return 

        async function fetchScores() {
            const { data, error } = await supabase
                .from('scores')
                .select('*')
                .eq('user_id', user.id)            
            if (error) {
                console.error('Error fetching scores:', error)
            } else {
                setScores(data)
            }
            setLoading(false)
        }
        fetchScores()
    }, [user])

    if (loading) return <div className="past-scores">Loading stats...</div>
    if (scores.length === 0) return <div className="past-scores">No games played yet.</div>
    
    const totalGames = scores.length
    const timeSpent = scores.reduce((sum, game) => sum + game.duration, 0)

    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    const isoString = user.created_at
    const dateJoined = new Date(isoString)

    const formatter = new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    });    

function getDayStreak(scores) {
    const uniqueDates = [...new Set(scores.map(s => new Date(s.created_at).toDateString()))]
    const dateSet = new Set(uniqueDates) 

    let streak = 0
    let cursor = new Date() 

    if (!dateSet.has(cursor.toDateString())) {
        cursor.setDate(cursor.getDate() - 1)
    }

    while (dateSet.has(cursor.toDateString())) {
        streak++
        cursor.setDate(cursor.getDate() - 1)
    }
    return streak
    }

    function onTimeChange(level) {
        setTime(level)
    }

    return (
        < >
        <div className="profile-header">
            <div className="profile-info-box">
                <span className="profile-name">{user.user_metadata.username}</span>
                <span className="joined">Joined {formatter.format(dateJoined)} </span>
            </div>
            <div className="tests-completed">
                <span className="profile-head-title">Tests completed</span>
                <span className="total-stat">{totalGames}</span>
            </div>
            <div className="time-spent">
                <span className="profile-head-title">Time playing</span>
                <span className="total-stat">{formatTime(timeSpent)}</span>
            </div>
            <div className="playing-streak"> 
                <span className="profile-head-title">Playing Streak</span>
                <span className="total-stat">{getDayStreak(scores)}</span>
            </div>
            
        </div>
        <ProfileRecords scores={scores} time={time} onTimeChange={onTimeChange}/>
        <h1 className="past-scores-title">Past Scores</h1>
        <table className="past-scores">
            <thead>
                <tr>
                    <th>Score</th>
                    <th>Accuracy</th>
                    <th>Difficulty</th>
                    <th>Duration</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {scores.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5).map(s => (
                <tr key={s.id}>
                    <td>{s.score}</td>
                    <td>{s.accuracy}%</td>
                    <td>{s.difficulty}</td>
                    <td>{formatTime(s.duration)}</td>
                    <td>{formatter.format(new Date(s.created_at))}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <ProfileGraph scores={scores}/>
        </>
    )
}

export default ProfileStats