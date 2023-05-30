import { legacy_createStore } from "redux";

const cartStore = {
    openCart: false,
    count: {
        id: '',
        value: 0,
    },
}

const reducer = (state = cartStore, action) => {
    switch (action.type) {
        case 'OPEN_CART':
            return { ...state, openCart: true }
        case 'CLOSE_CART':
            return { ...state, openCart: false }
        // case 'INCREMENT':
        //     return {
        //         ...state,
        //         count: state.count.value + 1,
        //         id: action.payload
        //     }
        // case 'DECREMENT':
        //     if (state.count > 0) return { ...state, count: state.count - 1 }
        default: return state;
    }
}

export const store = legacy_createStore(reducer);