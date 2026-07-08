import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp" 

function AuthPage() {
    return (
        <section className="auth-page-content">
                <SignUp/>
                <SignIn/> 
        </section>
    )
}

export default AuthPage