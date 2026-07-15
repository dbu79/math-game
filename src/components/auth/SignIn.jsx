import { useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { LogIn } from "lucide-react"

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { error } = await supabase.auth.signInWithPassword({
            email, 
            password,
        })

        if (error) {
            setError(error.message)
        } else {
            window.location.href = "/"
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSignIn} className="login-box">
            <p><LogIn/> Sign In</p>
            {error && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                    {error}
                </div>
            )}

            <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>

            <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

            <button type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    )
}

export default SignIn