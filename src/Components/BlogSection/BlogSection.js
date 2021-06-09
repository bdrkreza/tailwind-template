import React from 'react';
import './BlogSection.css'
import { blog } from '../../assests/Data/blogData';

const BlogSection = () => {
    return (
        <div>
            <div class="container py-16 px-10">
                <h2 class="text-3xl font-medium text-gray-800 uppercase text-center mb-6">Latest Blog</h2>

                <div class="grid grid-cols-3 gap-3">

                    {
                        blog.map((data) =>
                            <div className="text-center">
                                <div class="relative group rounded-sm overflow-hidden inner single-blog">
                                    <img src={data.img} class="w-full" />
                                    <div class="single-blog-img-overlay"></div>
                                </div>
                                <div className=" bg-gradient-to-b from-yellow-100 to-red-100 py-1 mt-3 rounded-lg">
                                    <h1 className="text-xl bold text-blue-800 mt-3">{data.title}</h1>
                                    <h4 className="text-black mt-1">{data.date}</h4>
                                    <p className="mt-2">{data.describe}</p>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogSection;