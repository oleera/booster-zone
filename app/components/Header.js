import React from 'react'
import { FaTiktok } from "react-icons/fa";

export default function Header() {
    return (
        <div>
            <div className="flex flex-wrap mx-3">
                <div className="px-3 mb-6  mx-auto w-11/12 bg-white rounded-xl">
                    <div className="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
                        <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
                            <span className="my-0 flex flex-row text-dark font-semibold text-[1.35rem]/[1.2]">
                                <FaTiktok fillOpacity={1} stopColor='' />
                                <span className='text-pink-500'> Booster</span> <span> Nepal</span>
                            </span>
                            <span className="pt-1 text-secondary-dark text-[0.95rem] font-medium">
                                Grow your tiktok
                            </span>
                        </div>
                        <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
                            <a
                                className="inline-block rounded border border-blue-400 bg-blue-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                href="mailto:oleeranjan@gmail.com"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
