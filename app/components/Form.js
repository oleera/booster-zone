import React from 'react'

export default function Form() {
    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-pink-600 sm:text-3xl">Get started now</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Fill the form, make payment using the QR code below to make things faster and Send your request.
                </p>

                <form action="https://formsubmit.co/d1aeb935081533ec05ea7ad52868c310" method="POST" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Provide your information</p>

                    <div className="">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>

                        <input
                            required
                            type="email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Enter TikTok username
                        </label>

                        <input
                            type="text"
                            required
                            name="username"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter TikTok username"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                            Select a booster service
                        </label>

                        <select className='min-w-96 h-10' name='service' required>
                            <option value="0">Select a service</option>
                            <option value="250-views">250+ Views @Rs. 20</option>
                            <option value="500-views">500+ Views @Rs.30</option>
                            <option value="800-views">800+ Views @Rs.50</option>
                            <option disabled value="500-views">50+ Likes @Rs.80</option>
                            <option disabled value="800-views">100+ Views @Rs.120</option>
                            <option disabled value="500-views">150+ Likes @Rs.150</option>
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
                            Confirm payment
                        </label>

                        <select className='min-w-96 h-10' name='payment' required>
                            <option value="0">Select a service</option>
                            <option value="yes">Yes (process will be faster)</option>
                            <option value="no">No (we will send an email with QR Code)</option>
                        </select>
                    </div>
                    
                    <input type="hidden" name="_autoresponse" value="Thank you for your request. We will get back to you once all the process is completed." />

                    <button
                        type="submit"
                        style={{background:"#be185d"}}
                        className="block w-full rounded-lg px-5 py-3 text-sm font-bold text-blue-300"
                    >
                        Send Booster Request
                    </button>
                </form>
            </div>
        </div>
    )
}
