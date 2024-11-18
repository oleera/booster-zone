import React from 'react'

export default function
    Steps() {
    return (
        <div className='bg-gray-300 pt-10 pb-36 px-8'>
            <h2 className='text-5xl text-center mx-16 py-20 text-gra'>How it works</h2>
            
            <div className='max-w-6xl mx-auto flex flex-col justify-between items-center md:flex-row gap-5'>

                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                    <div className="flex flex-1 items-start sm:gap-8">
                        <div
                            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-1">
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            </div>
                        </div>

                        <div>
                            <strong
                                className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Step #1
                            </strong>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                <a href="#" className="hover:underline"> Provide necessary info</a>
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">
                                Fill the form with your email address, tiktok username and the views, likes you want to boost.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                    <div className="flex flex-1 items-start sm:gap-8">
                        <div
                            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-1">
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            </div>
                        </div>

                        <div>
                            <strong
                                className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Step #2
                            </strong>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                <a href="#" className="hover:underline"> Make payment</a>
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">
                                To make process faster, Make your payment using the QR Code below and confirm the payment
                            </p>
                        </div>
                    </div>
                </article>

                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                    <div className="flex items-start sm:gap-8">
                        <div
                            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-1">
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            </div>
                        </div>

                        <div>
                            <strong
                                className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Step #3
                            </strong>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                <a href="#" className="hover:underline"> Send boost request </a>
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">
                                Once we verify the information, we will process your request as soon as possible.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

Steps