import { ADD_CARTS, DECREMENT_COUNT_IN_CART, INCREMENT_COUNT_IN_CART, LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, SET_PRODUCTS } from "./types"

export const setProducts = payload => ({type: SET_PRODUCTS, payload})
export const addToCarts = payload => ({type: ADD_CARTS, payload})
export const decrementProduct = payload => ({type: DECREMENT_COUNT_IN_CART, payload})
export const incrementProduct = payload => ({type: INCREMENT_COUNT_IN_CART, payload})
export const loadProductsRequest = () => ({type: LOAD_PRODUCTS_REQUEST})
export const loadProductsSuccess = () => ({type: LOAD_PRODUCTS_SUCCESS})
export const loadProductsFailure = payload => ({type: LOAD_PRODUCTS_FAILURE, payload})