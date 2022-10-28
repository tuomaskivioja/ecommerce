import {ButtonType} from "../../App";
import './button.styles.scss'

interface ButtonProps {
    buttonText: any
    buttonType: ButtonType
    onClick?: () => any
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({buttonText, buttonType, onClick, type}: ButtonProps) => {
    return <button onClick={onClick} type={type ? type : 'button'} className={`button-container ${buttonType}`}>{buttonText}</button>
}