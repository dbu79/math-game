import { useAuth } from "../components/auth/AuthContext"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp" 
import ProfileStats from "../components/profile/ProfileStats"
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
            <ProfileStats/>
            <button onClick={ async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.error(error)}}>
                Sign Out?
            </button>
        </section>
    )
}

export default Profile