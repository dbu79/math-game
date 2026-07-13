import { useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { UserRoundPlus } from "lucide-react"

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState('')
    const [message, setMessage] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const { data, error } = await supabase.auth.signUp({
            email, 
            password,
            options: {
                data: {
                    username: username, 
                },
                emailRedirectTo: `${window.location.origin}/auth/callback`
            }
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage("Check your email to confirm your account.")
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSignUp} className="register-box">
            <p><UserRoundPlus/> Register</p>
            <input
                className="auth-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                className="auth-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
            </button>
            {message && <p>{message}</p>}
        </form>

    )
}

export default SignUp

