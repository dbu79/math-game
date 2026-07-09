import { useAuth } from "../components/auth/AuthContext"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp" 
import { supabase } from "../utils/supabaseClient";

function Profile() {
    const { user, loading } = useAuth()

    if (loading) {
        return <p>Loading...</p>
    }

    if (!user) {
        return (
            <section className="auth-page-content">
                <SignUp/>
                <SignIn/> 
            </section>
        )
    }

    return (
        <section className="profile-page-content">
            <h1>Hello {user.user_metadata.username}</h1>
            <button onClick={ async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.error(error)}}>
                Sign Out?
            </button>
        </section>
    )
}

export default Profile