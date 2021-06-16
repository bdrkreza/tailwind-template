import { faChevronRight, faHome, faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ShopSideBar from '../../Components/ShopSideBar/ShopSideBar';
const Shops = () => {
    return (
        <div>
            <div className="flex bg-gray-100">
                <div class="container ml-12 py-4 flex items-center gap-3">
                    <a href="index.html" class="text-primary text-base">
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                    <span class="text-sm text-gray-400">
                        <FontAwesomeIcon icon={faChevronRight} />
                        <i class="fas fa-chevron-right"></i>
                    </span>
                    <p class="text-gray-600 font-medium">Shop</p>
                </div>

                <div class="flex gap-2 mr-40 mt-12">
                    <div class="border border-primary w-10 h-9 flex items-center justify-center text-red bg-primary rounded cursor-pointer">
                        <FontAwesomeIcon icon={faTh} />
                    </div>
                    <div class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                        <i class="fas fa-list"></i>
                        <FontAwesomeIcon icon={faList} />
                    </div>
                </div>
            </div>
            <ShopSideBar />
            <Footer />
        </div >
    );
};

export default Shops;