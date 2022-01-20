import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/products'

const rootReducer = combineReducers({
    products: productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    const { data, carts } = store.getState().products
    localStorage.setItem('data', JSON.stringify(data))
    localStorage.setItem('carts', JSON.stringify(carts))
});