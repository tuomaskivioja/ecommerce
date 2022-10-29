import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/products.context";
import {ProductCard} from "../product-card/product-card.component";
import {ProductType} from "../../store/categories/category.types";

import './category.styles.scss'
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";


export const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(ProductsContext)
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const prods = categoriesMap!.filter((cat) => cat.title.toLowerCase() === category)[0].items
            setProducts(prods)
        }
        getCategoriesMap()
    },[categoriesMap, products])

    return (
        <div className={'category-container'}>
            {
                products && products.map((product) => <ProductCard product={product} />)
            }
        </div>
    )
}