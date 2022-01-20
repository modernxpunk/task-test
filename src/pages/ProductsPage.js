import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { erorrProducts, isLoadingProducts, selectAllProducts } from '../reducers/selectors'
import { fetchProducts } from '../reducers/asyncActions'

function ProductsPage() {
    const products = useSelector(state => selectAllProducts(state))
    const isLoading = useSelector(state => isLoadingProducts(state))
    const error = useSelector(state => erorrProducts(state))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((fetchProducts()))
    }, [dispatch])

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="products">
            {products.map(product => 
                <Product key={product.id} {...product}/>
            )}
        </div>
    )
}

export default ProductsPage
