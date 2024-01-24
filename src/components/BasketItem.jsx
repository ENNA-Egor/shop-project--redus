import { useContext } from "react";
import { ShopContext } from "../context";


function  BasketItem (props) {
    const {
            id,
            name,
            price,
            quantity,
            removeFromBasket = Function.prototype,
            incQuantity = Function.prototype,
            decQuantity = Function.prototype,
    } = props;

    const{example} = useContext (ShopContext);

        return (
        <>
            <li className="collection-item ">
            {example} {''} {name} {price} x {' '}<i className="material-icons basket-quantity" onClick={() => decQuantity(id)} >remove</i>{' '} {quantity} {' '}<i className="material-icons basket-quantity" onClick={() => incQuantity(id)} >add</i> {' '} = {price * quantity} 
                
                <span  className="secondary-content close-item" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons icons-color" >close</i></span>
                </li>
        </>
            );
}

export {BasketItem}