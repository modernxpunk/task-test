import axios from "axios"
import { loadProductsFailure, loadProductsRequest, loadProductsSuccess, setProducts } from "./actionCreators"


export const fetchProducts = () => async dispatch => {
    dispatch(loadProductsRequest())
    try {
        const res = await axios.get("https://fakestoreapi.com/products")
        dispatch(setProducts(res.data))
    } catch(err) {
        dispatch(loadProductsFailure(err.message))
    } finally {
        dispatch(loadProductsSuccess())
    }
}