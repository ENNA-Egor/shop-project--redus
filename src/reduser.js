export function reduser (state, {type, payload}){
    switch (type){
        case 'CLOSE_ALERT' :
            return {
                ...state,
                alertName: ''
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: order.filter (el => el.id !== payload.id),
            };    
        default:
            return state;
    };
};