import "../../styles/profile.css"
import { CircleUser } from "lucide-react"

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { useAuth } from "../auth/AuthContext"
import ProfileRecords from "./ProfileRecords"

function ProfileStats() {
    const { user } = useAuth()
    const [scores, setScores] = useState([])
    const [loading, setLoading] = useState(true)

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
            
        </div>
        <ProfileRecords scores={scores}/>
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
                {scores.map(s => (
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
        </>
    )
}

export default ProfileStats