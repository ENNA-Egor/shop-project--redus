import { useContext } from 'react';
import { ShopContext } from '../context';

import {BasketItem} from './BasketItem'

function BasketList (props){
    const {order =[], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce ((sum, el)=> {
        return sum + el.price * el.quantity
    }, 0);

    const {thankyou} = useContext (ShopContext);

    return  <ul className="collection basket-list">
    <li  className="collection-item  indigo lighten-2">Корзинa</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item} 
            removeFromBasket = {removeFromBasket}
            incQuantity = {incQuantity}
            decQuantity = {decQuantity}/>
        )) :  <li className="collection-item indigo lighten-5">Корзина пуста</li>
    }
    <li className="collection-item  indigo lighten-2">Общая стомость: {totalPrice} rub. {'  '} {thankyou}<button className='btn indigo darken-1 btn-fin'>Оформить</button></li>
    <i className='material-icons  basket-close' onClick={handleBasketShow}>close</i>
  </ul>
}

export {BasketList}