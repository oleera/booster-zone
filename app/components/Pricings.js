import React from 'react'
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";

export default function Pricings() {
    return (
        <div id='pricing' className="max-w-6xl mx-auto pt-10 pb-36 px-8">
            <div className="max-w-md mx-auto mb-14 text-center">
                <h1 className="text-4xl font-semibold mb-6 lg:text-5xl"><span className="text-pink-600">Affordable</span> Prices</h1>
                <p className="text-xl text-gray-500 font-medium">Choose a service according to your needs.</p>
            </div>

            <div className="flex flex-col justify-between items-center md:flex-row lg:items-start">

                <div className="w-full hover:border-2 flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <FcLike size={50} />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold">TikTok Likes</span>
                        </div>
                    </div>
                    <ul className="mb-7 font-medium text-gray-500">
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">50+ Likes <span className="text-black">@Rs.70</span></span>
                        </li>
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">100+ Likes <span className="text-black">@Rs.100</span></span>
                        </li>
                        <li className="flex text-lg">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3"><span className="text-black">150+ Likes</span>@Rs.120</span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-pink-500 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </a>
                </div>

                <div className="w-full hover:border-2  flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                    <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                        <FaEye size={50} />
                        <div className="ml-5">
                            <span className="block text-3xl font-semibold text-white">Tiktok Views</span>
                        </div>
                    </div>
                    <ul className="mb-10 font-medium text-xl">
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">250+ Views <span className="text-white">@Rs. 20</span></span>
                        </li>
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">500+ Views <span className="text-white">@Rs.30</span></span>
                        </li>
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">800+ Views <span className="text-white">@Rs.50</span></span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-blue-300 rounded-xl py-5 px-4 text-center text-black text-xl">
                        Choose
                    </a>
                </div>

                <div className="w-full hover:border-2 flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <FcManager size={50} />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold">TikTok Followers</span>
                        </div>
                    </div>
                    <ul className="mb-10 font-medium text-xl">
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">50 Followers <span className="text-gray-400">@Rs. 100</span></span>
                        </li>
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">100 Followers <span className="text-gray-400">@Rs.150</span></span>
                        </li>
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">200 Followers <span className="text-gray-400">@Rs.200</span></span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-pink-500 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </a>
                </div>

            </div>

        </div>
    )
}
