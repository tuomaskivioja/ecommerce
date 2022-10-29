import {useParams} from "react-router-dom";
import React, {Fragment, useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/products.context";
import {ProductCard} from "../product-card/product-card.component";
import {ProductType} from "../../store/categories/category.types";

import './category.styles.scss'
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";


export const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(ProductsContext)
    const [products, setProducts] = useState<ProductType[]>([])

    const existingCategories = ['hats', 'womens', 'mens', 'jackets', 'sneakers']

    const upperCaseCategory = category![0].toUpperCase() + category!.substring(1);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const prods = categoriesMap!.filter((cat) => cat.title.toLowerCase() === category)[0].items
            setProducts(prods)
        }
        getCategoriesMap()
    },[categoriesMap, products])

    return (
        <Fragment>
            { existingCategories.includes(category!) ? (
                <Fragment>
                    <h2>Crown's {upperCaseCategory} catalogue</h2>
                    <h4>Chosen from our best suppliers. Only high quality and sustainable materials.</h4>
                    <br />
                    <div className={'categories-container'}>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
                    </div>
                </Fragment>
            ) : (<p>Page not found</p>) }


        </Fragment>
    )
}