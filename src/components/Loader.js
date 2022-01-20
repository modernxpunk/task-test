import React from 'react'
import loader from '../assets/loading.gif'

function Loader() {
    return (
        <div className='loader'>
            <img src={loader}></img>
        </div>
    )
}

export default Loader
