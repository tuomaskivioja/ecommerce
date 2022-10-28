import {ProductsContext} from "../../components/contexts/products.context";
import {useContext} from "react";
import {ProductCard} from "../../components/product-card/product-card.component";

import './shop.styles.scss'


export const Shop = () => {
    const {products} = useContext(ProductsContext)
    return (
        <div className={'products-container'}>
            {products!.map((item) => (
                    <ProductCard product={item} />
                ))
            };
        </div>
    )
};