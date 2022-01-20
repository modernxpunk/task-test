import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import CartsPage from '../pages/CartsPage';
import ProductsPage from '../pages/ProductsPage';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="/cart" element={<CartsPage />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRouter
