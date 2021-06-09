import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BlogSection from '../../Components/BlogSection/BlogSection';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header/Header';
import FeatureProduct from '../../Components/Product/FeatureProduct/FeatureProduct';
import Product from '../../Components/Product/Product/Product';

const Home = () => {
    return (
        <div>
            <Header />
            <Product />
            <Banner />
            <FeatureProduct />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Home;