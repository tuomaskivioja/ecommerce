
import {CategoryType} from "/Users/tuomaskivioja/Desktop/Programming/Courses/ZTM/React/ecommerce/src/App";
import {CategoryItemComponent} from "../category-item/category-item.component";
import React from "react";
import './directory.styles.scss';

interface DirectoryProps {
    categories: CategoryType[]
}

export const Directory = ({categories}: DirectoryProps) => {
    return (
        <div className='categories-container'>
        {categories.map((category) => (
                <CategoryItemComponent category={category}/>
            )
            )}
        </div>
    )
}