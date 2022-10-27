import {createContext, Dispatch, useState} from "react";
import {ProductType} from "./products.context";

export type CartType = {
    id: number
    name: string,
    imageUrl: string,
    price: number
    quantity: number
}

interface CartContextType {
    isOpen: boolean
    setIsCartOpen: Dispatch<any>
    cartItems: CartType[] | null
    addItemToCart: (productToAdd: ProductType) => void
    totalCartItems: number
    removeItemFromCart: (productToRemove: CartType) => void
    clearItemFromCart: (productToRemove: CartType) => void
    totalCartValue: number
}

export const CartContext = createContext<CartContextType>(
    {
        isOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        totalCartItems: 0,
        removeItemFromCart: () => {},
        clearItemFromCart: () => {},
        totalCartValue: 0
    }
)

interface CartProviderProps {
    children: any
}

const addCartItem = (cartItems: CartType[], productToAdd: ProductType) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id );

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id == productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
};

const removeCartItem = (cartItems: CartType[], cartItemToRemove: CartType) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem) {
        if (existingCartItem!.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
        }
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearProdFromCart = (cartItems: CartType[], product: CartType) => {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
}

export const CartProvider = ({children}: CartProviderProps) => {

    const [isOpen, setIsCartOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartType[]>([])
    const [totalCartItems, setTotalItems] = useState<number>(0)
    const [totalCartValue, setTotalCartValue] = useState<number>(0)

    const addItemToCart = (productToAdd: ProductType) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        const newTotalCartItems = totalCartItems + 1
        const newTotalValue = totalCartValue + productToAdd.price
        setTotalCartValue(newTotalValue)
        setTotalItems(newTotalCartItems)
    }

    const removeItemFromCart = (productToRemove: CartType) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
        const newTotalCartItems = totalCartItems - 1
        const newTotalValue = totalCartValue - productToRemove.price
        setTotalCartValue(newTotalValue)
        setTotalItems(newTotalCartItems)
    }

    const clearItemFromCart = (productToRemove: CartType) => {
        setCartItems(clearProdFromCart(cartItems, productToRemove));
        const newTotalCartItems = totalCartItems - productToRemove.quantity
        const newTotalValue = totalCartValue - productToRemove.price * productToRemove.quantity
        setTotalCartValue(newTotalValue)
        setTotalItems(newTotalCartItems)
    }
    const value = { isOpen , setIsCartOpen, cartItems, addItemToCart , totalCartItems, removeItemFromCart, clearItemFromCart, totalCartValue}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}