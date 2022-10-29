import './category-preview.styles.scss';
import {ProductCard} from "../product-card/product-card.component";
import {ProductType} from "../../store/categories/category.types";
import {Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import React from "react";

interface CategoryPreviewProps {
    title: string
    products: ProductType[]
}

export const CategoryPreview = ({ title, products }: CategoryPreviewProps) => (
    <div className='category-preview-container'>
        <Link to={title.toLowerCase()}>
            <span className='title'>{title.toUpperCase()}</span>
        </Link>
        <div className='preview'>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    </div>
);