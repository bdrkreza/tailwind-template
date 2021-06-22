import React from 'react';

import Image01 from '../../../../assets/customer/user-36-01.jpg';
import Image02 from '../../../../assets/customer/user-36-02.jpg';
import Image03 from '../../../../assets/customer/user-36-04.jpg';
import Image04 from '../../../../assets/customer/user-36-05.jpg';
import Image05 from '../../../../assets/customer/user-36-06.jpg';

const customers = [
    {
        id: '0',
        image: Image01,
        name: 'Alex Shatov',
        email: 'alexshatov@gmail.com',
        location: '🇺🇸',
        spent: '$2,890.66',
    },
    {
        id: '1',
        image: Image02,
        name: 'Philip Harbach',
        email: 'philip.h@gmail.com',
        location: '🇩🇪',
        spent: '$2,767.04',
    },
    {
        id: '2',
        image: Image03,
        name: 'Mirko Fisuk',
        email: 'mirkofisuk@gmail.com',
        location: '🇫🇷',
        spent: '$2,996.00',
    },
    {
        id: '3',
        image: Image04,
        name: 'Olga Semklo',
        email: 'olga.s@cool.design',
        location: '🇮🇹',
        spent: '$1,220.66',
    },
    {
        id: '4',
        image: Image05,
        name: 'Burak Long',
        email: 'longburak@gmail.com',
        location: '🇬🇧',
        spent: '$1,890.66',
    },
];

function FutureProduct() {

    return (
        <div className="col-span-full xl:col-span-6 backgroundColor shadow-lg rounded-lg border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-gray-500">FutureProduct</h2>
            </header>
            <div className="p-3 text-white">

                {/* Table */}
                <div className="overflow-x-auto  shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-1xl font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Products</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">title</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Role</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Country</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                            {
                                customers.map(customer => {
                                    return (
                                        <tr key={customer.id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                                                    </div>
                                                    <div className="font-medium text-gray-400">{customer.name}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.email}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-gray-300">{customer.spent}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <td>
                                                    <div class="flex item-center justify-center">
                                                        <div class="w-5 mr-3 transform  hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-5 mr-3 text-blue-800 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-5  transform text-red-800 hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}

export default FutureProduct;
