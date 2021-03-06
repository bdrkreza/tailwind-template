import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromProduct } from '../../Redux/Action/Action';

const ShoppingCard = () => {
    const product = useSelector(state => {
        return state.product.singleProduct
    })
    const dispatch = useDispatch();

    return (
        <>


            <div class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-visible bg-white border-l-2 border-gray-300 ">
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-medium text-gray-700">Your select product</h3>
                    <button class="text-gray-600 focus:outline-none">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <hr class="my-3" />


                {
                    product?.map((data) =>
                        <div class="flex justify-between mt-6">
                            <div class="flex">
                                <img class="h-20 w-20 object-cover rounded" src={data.img} alt="" />
                                <div class="mx-3">
                                    <h3 class="text-sm text-gray-600">{data.name}</h3>
                                    <div class="flex items-center mt-2">
                                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </button>
                                        <span class="text-gray-700 mx-2">2</span>
                                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span class="text-gray-600">${data.price}</span>
                                <FontAwesomeIcon onClick={() => dispatch(removeFromProduct(data.id))} className="ml-2 mt-2 text-red-800 cursor-pointer" icon={faTrashAlt} />
                            </div>
                        </div>
                    )
                }


                <div class="mt-8">
                    <form class="flex items-center justify-center">
                        <input class="form-input w-48" type="text" placeholder="Add promocode" />
                        <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Apply</span>
                        </button>
                    </form>
                </div>
                <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Chechout</span>
                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </>
    );
};

export default ShoppingCard;