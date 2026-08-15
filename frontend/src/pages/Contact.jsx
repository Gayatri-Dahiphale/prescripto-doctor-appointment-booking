import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>

            {/* Contact Heading */}
            <div className='text-2xl font-medium text-center mt-10 mb-12'>
                <p className='text-gray-500'>
                    CONTACT <span className='text-gray-900'>US</span>
                </p>
            </div>

            {/* Contact Section */}
            <div className='flex flex-col md:flex-row gap-12 items-center mb-20'>

                {/* Image */}
                <img
                    className='w-full md:max-w-[390px] rounded-lg'
                    src={assets.contact_image}
                    alt='Contact Us'
                />

                {/* Contact Information */}
                <div className='flex flex-col gap-8 text-sm text-gray-600'>

                    {/* Office */}
                    <div>
                        <p className='text-xl font-semibold text-gray-700 mb-5'>
                            OUR OFFICE
                        </p>

                        <p>
                            00000 Willms Station
                            <br />
                            Suite 000, Washington, USA
                        </p>

                        <p className='mt-6'>
                            Tel: (000) 000-0000
                            <br />
                            Email:gayatridahiphale05@gmail.com
                        </p>
                    </div>

                    {/* Careers */}
                    <div>
                        <p className='text-xl font-semibold text-gray-700 mb-5'>
                            CAREERS AT PRESCRIPTO
                        </p>

                        <p className='mb-6'>
                            Learn more about our teams and job openings.
                        </p>

                        <button className='border border-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300'>
                            Explore Jobs
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact