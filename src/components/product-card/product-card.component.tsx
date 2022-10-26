import './product-card.styles.scss'
import {Button} from "../Button/button.component";
import {ButtonType} from "../../App";
import {ProductType} from "../contexts/products.context";

interface ProductCardProps {
    product: ProductType
}

export const ProductCard = ({ product }: ProductCardProps) => {

    const {name, price, imageUrl } = product;

    return (
        <div className={'product-card-container'}>
            <img src={imageUrl} alt={`${name}`} />
            <div className={'footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button buttonText={''} buttonType={ButtonType.INVERTED}></Button>
        </div>
    )
}

