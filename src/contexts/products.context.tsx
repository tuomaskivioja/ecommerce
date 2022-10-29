import {createContext, useEffect, useState} from "react";
import {PRODUCTS} from '../shop-data'
import {addCollectionAndDocuments, getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
import {CategoryType, ProductType} from "../store/categories/category.types";



export type ProductsType = {title: string, items: ProductType[]}[]

interface ProductsContextType {
    categoriesMap: CategoryType[] | null
}

export const ProductsContext = createContext<ProductsContextType>({
    categoriesMap: [],
})

interface ProductsProviderProps {
    children: any
}

export const ProductsProvider = ({children}: ProductsProviderProps) => {

    const [categoriesMap, setCategoriesMap] = useState<CategoryType[]>([])
    const value = {categoriesMap: categoriesMap};

    useEffect(() => {
        const getCategoriesMap = async () => {
         const catMap =  await getCategoriesAndDocuments();
         setCategoriesMap(catMap)
        }
        getCategoriesMap()
    },[])

    return (
        <ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>
    )
}