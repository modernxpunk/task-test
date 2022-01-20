import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sumPricesCarts } from '../reducers/selectors'

function Navigation() {
    const priceOfCart = useSelector(state => sumPricesCarts(state))

    return (
        <div className='navigation'>
            <div className="navItem">
                <button>
                    <Link to ="/">shop</Link>
                </button>
            </div>
            <div className='navItem'>
                {priceOfCart > 0 && priceOfCart.toFixed(2)}
                <button>
                    <Link to="/cart">cart</Link>
                </button>
            </div>
        </div>
    )
}

export default Navigation
