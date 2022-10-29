
import {DirectoryItem} from "../directory-item/directory.item";
import React from "react";
import './directory.styles.scss';
import {CategoryType} from "../../store/categories/category.types";

interface DirectoryProps {
    categories: CategoryType[] | null
}

export const Directory = ({categories}: DirectoryProps) => {
    return (
        <div className='directory-container'>
        {categories ? categories.map((category) => (
                <DirectoryItem key={category.id} category={category}/>
            )
            ) : <p>No products to show</p>}
        </div>
    )
}