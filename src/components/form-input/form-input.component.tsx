import {BaseSyntheticEvent} from "react";
import './form-input.styles.scss';

interface FormInputProps {
    label: string,
    type: string,
    required: boolean
    name: string,
    value: string
    handleChange: (event: BaseSyntheticEvent) => void,
}

export const FormInput = ({label, type, handleChange, name, value, required}: FormInputProps )=> {
    return (
        <div className={'group'}>
            <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            <input className='form-input' required={required} type={type} onChange={handleChange} name={name} value={value}/>
        </div>

    )
}