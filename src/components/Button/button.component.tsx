import {ButtonType} from "../../App";
import './button.styles.scss'

interface ButtonProps {
    children: any
    buttonType: ButtonType
    onClick?: () => any
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({children, buttonType, onClick, type}: ButtonProps) => {
    return <button onClick={onClick} type={type ? type : 'button'} className={`button-container ${buttonType}`}>{children}</button>
}