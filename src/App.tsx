import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import AddProductType from './components/pages/AddProductType/AddProductType';
import AddProduct from './components/pages/AddProduct/AddProduct';
import Cart from './components/pages/Cart/Cart';
import {
    ADDPRODUCTTYPE__PATH,
    ADDPRODUCT__PATH,
    CART__PATH,
} from './utils/consts';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path={ADDPRODUCTTYPE__PATH}
                        element={<AddProductType />}
                    />
                    <Route path={ADDPRODUCT__PATH} element={<AddProduct />} />
                    <Route path={CART__PATH} element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
