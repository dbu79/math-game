import { useAuth } from "../components/auth/AuthContext"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp" 

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
            <h1>Hello</h1>
        </section>
    )
}

export default Profile