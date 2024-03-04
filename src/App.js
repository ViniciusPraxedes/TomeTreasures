import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Contact from './components/Contact/Contact';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Success from './pages/Payment/Success';
import Cancel from './pages/Payment/Cancel';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <CategoryBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:category" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/cancel" element={<Cancel />} />
                </Routes>
                <Contact />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
