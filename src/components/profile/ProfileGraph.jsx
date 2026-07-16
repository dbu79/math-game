import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../../styles/profile.css"

function ProfileGraph({ scores }) {

    if (scores.length === 0) return (
        <div className="no-data">
            Play a game to log stats
        </div>
    )
    const sorted = [...scores].sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    const data = sorted.map((s, i) => ({
        gameNumber: i + 1,
        created_at: s.created_at,
        easyScore: s.difficulty === "easy" ? Math.round((s.score / s.duration) * 60) : null,
        mediumScore: s.difficulty === "medium" ? Math.round((s.score / s.duration) * 60) : null,
        hardScore: s.difficulty === "hard" ? Math.round((s.score / s.duration) * 60) : null,
    }))

    return (
        <div className="profile-chart-box">
            <ResponsiveContainer className="profile-chart">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <CartesianGrid stroke="#2c2c2a"/>
                    <XAxis dataKey="gameNumber"/>
                    <YAxis domain={['auto', 'auto']}/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="easyScore" stroke="#5ec4ff" connectNulls/>
                    <Line type="monotone" dataKey="mediumScore" stroke="#ffb84d" connectNulls/>
                    <Line type="monotone" dataKey="hardScore" stroke="#ff5e5e" connectNulls/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProfileGraph