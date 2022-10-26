import {createContext, useState} from "react";
import PRODUCTS from '../../shop-data.json'

export type ProductType = { id: number; name: string; imageUrl: string; price: number; }

interface ProductsContextType {
    products: ProductType[] | null
}

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
})

interface ProductsProviderProps {
    children: any
}

export const ProductsProvider = ({children}: ProductsProviderProps) => {

    const [products, setProducts] = useState<ProductType[]>(PRODUCTS)
    const value = {products};

    return (
        <ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>
    )
}