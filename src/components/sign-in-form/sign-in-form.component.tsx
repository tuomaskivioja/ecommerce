import {FormInput} from "../form-input/form-input.component";
import {Button} from "../Button/button.component";
import {ButtonType} from "../../App";
import {BaseSyntheticEvent, useContext, useState} from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'
import {UserContext} from "../../contexts/user-context.component";


const defaultFormFields = {
    email: '',
    password: '',
}

export const SignInForm = () => {

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password, } = formFields

    const handleChange = (event: BaseSyntheticEvent) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }

    const logIn = async (event: BaseSyntheticEvent) => {
        event.preventDefault()
        if (password) {
            try {
                await signInAuthUserWithEmailAndPassword(email, password);
            }

             catch(err) {
                alert(err)
            }

        }
        else {
            alert("no password you fool!!!");
            return
        }
        resetFields();
    }

    return (
        <div className='sign-in-container'>
            <br />
            <form onSubmit={logIn}>
                <FormInput required={true} label={'Email'} type={'email'} name={'email'} value={email} handleChange={handleChange}/>
                <FormInput required={true} label={'Password'} type={'password'} name={'password'} value={password} handleChange={handleChange}/>
                <div className={'buttons-container'}>
                    <Button type={"submit"} buttonText={'Sign in'} buttonType={ButtonType.INVERTED}></Button>
                    <Button onClick={logGoogleUser} buttonText={'Google login'} buttonType={ButtonType.GOOGLE} />
                </div>

            </form>
        </div>
    )
}