import {ProductsContext} from "../../contexts/products.context";
import {useContext} from "react";

import './categories-preview.styles.scss'
import {CategoryType} from "../../store/categories/category.types";
import {CategoryPreview} from "../../components/category-preview/category-preview.component";


export const CategoriesPreview = () => {
    const {categoriesMap} = useContext(ProductsContext)
    console.log(categoriesMap)
    return (
        <div className={'categories-preview-container'}>
            {categoriesMap ? categoriesMap.map((category: CategoryType) => (
                <CategoryPreview title={category.title} products={category.items} />
            )) : <p>No products to show</p>}
        </div>
    );
};