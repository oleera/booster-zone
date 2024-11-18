import React from 'react'
import { GoRocket } from "react-icons/go";
import { TbBrandTiktok } from "react-icons/tb";

export default function Hero() {
    return (
        <div>
            <div className="bg-blue-200">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-pink-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stop-color="#7775D6" />
                                    <stop offset="1" stop-color="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <div className='flex flex-row'>
                                <TbBrandTiktok size={100} color='pink'/>
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl">Boost your TikTok.</h2>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">We help new/budding TikTokers gain more views and likes.</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <a href="#pricing" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
                                    </div>
                                </div>
                                <GoRocket size={200} color='#bdd8fb' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
