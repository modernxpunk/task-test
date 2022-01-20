import React from 'react'
import { useDispatch } from 'react-redux'
import start from '../assets/star.png'
import view from '../assets/view.png'
import { decrementProduct, incrementProduct } from '../reducers/actionCreators'

function CartProduct({id, title, rating, category, price, description, image, count}) {

    const dispatch = useDispatch()

    const decrementCountOfProduct = id => {
        dispatch(decrementProduct(id))
    }

    const incrementCountOfProduct = id => {
        dispatch(incrementProduct(id))

    }

    return (
        <div className='product'>
            <div className="image">
                <img className="image_img" src={image} alt="product"></img>
            </div>
            <div className="desc">
                <p className="title">{title}</p>
                <p className="rating">
                    <img src={start}/>{rating.rate}
                    <img src={view}/>{rating.count}
                </p>
                {/* <p className="description">{description}</p> */}
                <p className="category">{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buyMore">
                <span className='decrementProduct' onClick={() => decrementCountOfProduct(id)}>-</span>
                <span className='counterProduct'>{count}</span>
                <span className='incrementProduct' onClick={() => incrementCountOfProduct(id)}>+</span>
            </div>
        </div>
    )
}

export default CartProduct
