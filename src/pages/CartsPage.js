import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import Form from '../components/Form'
import { selectAllCountsInCart, selectAllProductsInCart, sumPricesCarts } from '../reducers/selectors'

function CartsPage() {
    const carts = useSelector(state => selectAllProductsInCart(state))
    const counts = useSelector(state => selectAllCountsInCart(state))
    const allPrice = useSelector(state => sumPricesCarts(state))

    return (
        <div className="carts">
            <div className="productsCarts">
                {carts.map(product => 
                    <CartProduct key={product.id} {...product} count={counts[product.id]}/>
                )}
                {carts.length ? <strong>TOTAL: {allPrice.toFixed(2)}$</strong> : ""}
            </div>
            {carts.length !== 0 && <Form receiptInfo={counts}/>}
        </div>
    )
}

export default CartsPage
