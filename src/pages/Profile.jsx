import { useAuth } from "../components/auth/AuthContext"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp" 
import ProfileStats from "../components/profile/ProfileStats"
import { supabase } from "../utils/supabaseClient";
import "../styles/profile.css"

function Profile() {
    const { user, loading } = useAuth()

    if (loading) {
        return <p className="loading">Loading...</p>
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
        <>
            <ProfileStats/>
            <button className="sign-out"
            onClick={ async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.error(error)}}>
                Sign Out?
            </button>
        </>
    )
}

export default Profile