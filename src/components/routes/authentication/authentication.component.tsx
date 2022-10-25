import {SignUpForm} from "../../sign-up-form/sign-up-form.component";
import {SignInForm} from "../../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

export const AuthenticationPage = () => {



    return (
        <div className="authentication-container">
            <h1>Sign in</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}