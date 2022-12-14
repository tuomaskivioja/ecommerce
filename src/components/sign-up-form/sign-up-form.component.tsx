import {BaseSyntheticEvent, useContext, useState} from "react";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {FormInput} from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import {ButtonType} from "../../App";
import {Button} from "../Button/button.component";
import firebase from "firebase/compat";
import {User} from '@firebase/auth-types';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword } = formFields

    const handleChange = (event: BaseSyntheticEvent) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const response: any = await createAuthUserWithEmailAndPassword(email, password)
                if (response) {
                    await createUserDocumentFromAuth(response.user, {displayName: displayName})
                }
                else {
                    console.log("Error creating user")
                }

            } catch(err) {
                console.log(err)
            }

        }
        else {
            alert("passwords do not match!");
            return
        }
        resetFields();
    }

    return (
        <div className='sign-up-container'>
            <br />
            <h2>Don't have an account? Sign up below!</h2>
            <form onSubmit={handleSubmit}>
                <FormInput required={true} label={'Display Name'} type={'text'} name={'displayName'} value={displayName} handleChange={handleChange}/>
                <FormInput required={true} label={'Email'} type={'email'} name={'email'} value={email} handleChange={handleChange}/>
                <FormInput required={true} label={'Password'} type={'password'} name={'password'} value={password} handleChange={handleChange}/>
                <FormInput required={true} label={'Confirm Password'} type={'password'} name={'confirmPassword'} value={confirmPassword} handleChange={handleChange}/>
                <Button buttonText={'Sign Up'} type={"submit"} buttonType={ButtonType.DEFAULT}></Button>
            </form>
        </div>
    )
}