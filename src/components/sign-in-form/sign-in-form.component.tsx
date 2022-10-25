import {FormInput} from "../form-input/form-input.component";
import {Button} from "../Button/button.component";
import {ButtonType} from "../../App";
import {BaseSyntheticEvent, useState} from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}

export const SignInForm = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response);
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password, } = formFields

    const handleChange = (event: BaseSyntheticEvent) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    const logIn = async (event: BaseSyntheticEvent) => {
        if (password) {
            try {
                signInAuthUserWithEmailAndPassword(email, password).then((response) => {
                    console.log(response)
                })

            } catch(err) {
                alert(err)
            }

        }
        else {
            alert("no password you fool!!!");
            return
        }
    }

    return (
        <div className='sign-in-container'>
            <br />
            <form onSubmit={logIn}>
                <FormInput required={true} label={'Email'} type={'email'} name={'email'} value={email} handleChange={handleChange}/>
                <FormInput required={true} label={'Password'} type={'password'} name={'password'} value={password} handleChange={handleChange}/>
                <div className={'buttons-container'}>
                    <Button type={"submit"} children={'Sign in'} buttonType={ButtonType.INVERTED}></Button>
                    <Button onClick={logGoogleUser} children={'Google login'} buttonType={ButtonType.GOOGLE} />
                </div>

            </form>
        </div>
    )
}