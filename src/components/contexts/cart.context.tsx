import {createContext, Dispatch, useState} from "react";


interface CartContextType {
    isOpen: boolean
    setIsCartOpen: Dispatch<any>
}

export const CartContext = createContext<CartContextType>(
    {
        isOpen: false,
        setIsCartOpen: () => {}
    }
)

interface CartProviderProps {
    children: any
}

export const CartProvider = ({children}: CartProviderProps) => {

    const [isOpen, setIsCartOpen] = useState<boolean>(false)

    const value = { isOpen , setIsCartOpen}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}