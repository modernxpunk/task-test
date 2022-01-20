import firebase from '../setFirebase'
import React, { useState } from 'react';

const Form = ({receiptInfo}) => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        address: "",
        phone: ""
    })

    const changeInput = e => {
        const name = e.target.name
        const value = e.target.value
        setUserInfo(userInfo => ({...userInfo, [name]: value}))
    }

    const handleOrder = () => {
        const ordersRef = firebase.database().ref('Orders')
        const order = { userInfo, receiptInfo }
        ordersRef.push(order)
        
        setUserInfo({
            name: "",
            surname: "",
            address: "",
            phone: ""
        })
    }

    return (
        <div className="form_wrapper">
            <form className='form' onSubmit={e => e.preventDefault()}>
                <input type="text" value={userInfo.name} name="name" placeholder='NAME' onChange={changeInput}/>
                <input type="text" value={userInfo.surname} name="surname" placeholder='SURNAME' onChange={changeInput}/>
                <input type="text" value={userInfo.address} name="address" placeholder='ADDRESS' onChange={changeInput}/>
                <input type="text" value={userInfo.phone} name="phone" placeholder='PHONE' onChange={changeInput}/>
                <input type="submit" value='ORDER' onClick={handleOrder}/>
            </form>
        </div>
    )
};

export default Form;
