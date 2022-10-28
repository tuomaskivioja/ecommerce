import {createContext, useEffect, useState} from "react";
import {PRODUCTS} from '../../shop-data'
import {addCollectionAndDocuments, getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export type ProductType = { id: number; name: string; imageUrl: string; price: number; }

export type ProductsType = {title: string, items: ProductType[]}[]

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

    const [products, setProducts] = useState<ProductType[]>([])
    const value = {products};

    useEffect(() => {
        const getCategoriesMap = async () => {
         const catMap =  getCategoriesAndDocuments()
            console.log(catMap);
        }
        getCategoriesMap()
    },[])

    return (
        <ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>
    )
}