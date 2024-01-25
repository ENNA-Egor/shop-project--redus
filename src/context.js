import { createContext, useReducer} from 'react';
import {reduser} from './reduser';


export const ShopContext = createContext();

const intialState = {
    goods: [],
    loading : true,
    order : [],
    isBasketShow : false,
    alertName : '',
}

// const value = {
//     example: 'hello from context',
//     thankyou: 'Спасибо за покупку'
// }

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer (reduser, intialState)

    value.closeAlert =()=> {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }


    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}