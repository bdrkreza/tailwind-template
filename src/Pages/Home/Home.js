import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header/Header';
import Product from '../../Components/Product/Product/Product';

const Home = () => {
    return (
        <div>
            <Header />
            <Product />
            <Banner />
        </div>
    );
};

export default Home;