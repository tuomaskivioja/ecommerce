import React from "react";
import {CategoryType} from "../../App";
import './category-item.styles.scss'


interface CategoryItemProps {
    category: CategoryType
}

export const CategoryItemComponent = ({category}: CategoryItemProps) => {
    return (
        <div className='category-container'>
            <div className='background-image' style={{
                'backgroundImage': `url(${category.imageUrl})`,
            }}></div>
            <div className="category-body-container">
                <h2>Shop {category.title}</h2>
            </div>
        </div>
    )
}