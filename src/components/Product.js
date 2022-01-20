import React from 'react'
import { useDispatch } from "react-redux"
import { addToCarts } from '../reducers/actionCreators'
import start from '../assets/star.png'
import view from '../assets/view.png'

function Product({id, title, rating, category, price, description, image}) {

    const dispatch = useDispatch()

    const addIdProductToCart = id => {
        dispatch(addToCarts(id))
    }

    return (
        <div className="product">
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
            <div className="buy">
                <button onClick={() => addIdProductToCart(id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
