import React from 'react';
import { NewProduct } from '../../../assests/Data/productData';

import NewArrivalProduct from '../NewArrivalProduct/NewArrivalProduct';

const Product = () => {
    return (
        <div>

            <div class="container px-28">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>

                <div className="grid grid-cols-3 gap-12">
                    {
                        NewProduct.map((product) => <NewArrivalProduct productData={product} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Product;