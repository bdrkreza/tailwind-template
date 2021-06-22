import React from 'react';
import Payment from '../Payment/Payment';
import Shipping from '../Shipping/Shipping';

const CheckOut = () => {
    return (
        <div>
            <div class="h-screen bg-gray-300">
                <div class="py-12">
                    <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                        <div class="md:flex ">
                            <div class="w-full p-4 px-5 py-5">
                                <div class="md:grid md:grid-cols-3 gap-2 ">

                                    <div class="col-span-2 p-5">
                                        <h1 class="text-xl font-medium ">Shopping Cart</h1>
                                        <div class="flex justify-between items-center mt-6 pt-6">
                                            <div class="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full " />
                                                <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">Chicken momo</span> <span class="text-xs font-light text-gray-400">#41551</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                                <div class="pr-8 "> <span class="text-xs font-medium">$10.50</span> </div>
                                                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center pt-6 mt-6 border-t">
                                            <div class="flex items-center"> <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" class="rounded-full " />
                                                <div class="flex flex-col ml-3 "> <span class="text-md font-medium w-auto">Spicy Mexican potatoes</span> <span class="text-xs font-light text-gray-400">#66999</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                                <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div class="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" class="rounded-full " />
                                                <div class="flex flex-col ml-3 "> <span class="text-md font-medium">Breakfast</span> <span class="text-xs font-light text-gray-400">#86577</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                                <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <span class="text-md font-medium text-blue-500">Continue Shopping</span> </div>
                                            <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg font-bold text-gray-800 "> $24.90</span> </div>
                                        </div>
                                    </div>




                                    <div id="summary" class="w-1/1 px-8 py-10">
                                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                                        <div class="flex justify-between mt-10 mb-5">
                                            <span class="font-semibold text-sm uppercase">Items 3</span>
                                            <span class="font-semibold text-sm">590$</span>
                                        </div>
                                        <div>
                                            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                            <select class="block p-2 text-gray-600 w-full text-sm">
                                                <option>Standard shipping - $10.00</option>
                                            </select>
                                        </div>
                                        <div class="py-10">
                                            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
                                        </div>
                                        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                                        <div class="border-t mt-8">
                                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                                <span>Total cost</span>
                                                <span>$600</span>
                                            </div>
                                            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;