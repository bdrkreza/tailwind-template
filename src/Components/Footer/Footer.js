import React from 'react';
import logo from '../../assests/icons/logo.png'
import brandIcon from '../../assests/icons/methods.png'
const Footer = () => {
    return (
        <div>
            <footer class="bg-pink-100 pt-16 pb-12 border-t border-gray-100">
                <div class="container grid grid-cols-3">

                    <div class="col-span-1 space-y-8">
                        <img src={logo} class="w-30" />
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div class="col-span-2 grid grid-cols-2 gap-8">
                        <div class="grid grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Marketing
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Analytics
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Commerce
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Insights
                            </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-400 tracking-wider uppercase">
                                    Support
                        </h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Pricing
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Documentation
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Guides
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        API Status
                            </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Marketing
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Analytics
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Commerce
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Insights
                            </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-400 tracking-wider uppercase">
                                    Support
                        </h3>
                                <div class="mt-4 space-y-4">
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Pricing
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Documentation
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        Guides
                            </a>
                                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                        API Status
                            </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>



            <div class="bg-gray-800 py-4">
                <div class="container flex items-center justify-between">
                    <p class="text-white">© Fixture - All Rights Reserved</p>
                    <img src={brandIcon} class="h-5" />
                </div>
            </div>
        </div>
    );
};

export default Footer;