import { ADD_CARTS, DECREMENT_COUNT_IN_CART, INCREMENT_COUNT_IN_CART, LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, SET_PRODUCTS } from "./types"

const initialState = {
    data: JSON.parse(localStorage.getItem('data')) || [],
    isLoading: true,
    error: null,
    carts: JSON.parse(localStorage.getItem('carts')) || {}
}

export const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, data: action.payload}
        case ADD_CARTS:
            if (state.carts[action.payload]) {
                return {...state, carts: {...state.carts, [action.payload]: state.carts[action.payload] + 1}}
            }
            return {...state, carts: {...state.carts, [action.payload]: 1}}
        case LOAD_PRODUCTS_REQUEST:
            return {...state, isLoading: true}
        case LOAD_PRODUCTS_SUCCESS:
            return {...state, isLoading: false}
        case LOAD_PRODUCTS_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        case DECREMENT_COUNT_IN_CART:
            if (state.carts[action.payload] === 1) {
                delete state.carts[action.payload]
                return {...state, carts: {...Object.assign(state.carts, {})}}
            }
            return {
                ...state,
                carts: {
                    ...state.carts,
                    [action.payload]: state.carts[action.payload] - 1
                }
            }
        case INCREMENT_COUNT_IN_CART:
            return {
                ...state,
                carts: {
                    ...state.carts,
                    [action.payload]: state.carts[action.payload] + 1
                }
            }
        default:
            return {...state}
    }
}