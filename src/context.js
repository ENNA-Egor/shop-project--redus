import { createContext} from 'react';


export const ShopContext = createContext();

const value = {
    example: 'hello from context',
    thankyou: 'Спасибо за покупку'
}

export const ContextProvider = ({children}) => {
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}