import React from "react";
import './directory-item.styles.scss'
import {CategoryType} from "../../store/categories/category.types";
import {Link} from "react-router-dom";


interface CategoryItemProps {
    category: CategoryType
    key: number
}

export const DirectoryItem = ({category, key}: CategoryItemProps) => {
    return (
        <div key={key} className='directory-item-container'>
            <div className='background-image' style={{
                'backgroundImage': `url(${category.items[0].imageUrl})`,
            }}></div>
            <div className="directory-body-container">
                <Link to={'shop/' + category.title.toLowerCase()}>
                    <h2>Shop {category.title}</h2>
                </Link>

            </div>
        </div>
    )
}