import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-blue-100">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-center md:justify-between">
                    <span className="my-0 flex flex-row text-dark font-semibold text-[1.35rem]/[1.2] justify-center">
                        <FaTiktok fillOpacity={1} stopColor='' />
                        <span> Booster Nepal</span>
                    </span>

                    <ul className="my-8 flex lg:justify-start sm:justify-center gap-6 sm:mt-0">
                        <li>
                            <a
                                href="https://www.tiktok.com/@tiktok.booster75"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">TikTok</span>

                                <MdOutlineEmail size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:oleeranjan@gmail.com"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Email</span>

                                <FaTiktok size={20} />
                            </a>
                        </li>
                    </ul>
                    <div className='sm:flex sm:justify-center'>
                        <img className='' src='./qr.png' style={{ height: '200px' }} />
                    </div>
                </div>



                <p className="text-xs text-gray-500">&copy; 2024. TikTok Booster Nepal. All rights reserved.</p>
            </div>
        </footer>
    )
}
