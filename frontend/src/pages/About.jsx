import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>

            {/* About Heading */}
            <div className='text-2xl font-medium text-center mt-10 mb-14'>
                <p className='text-gray-500'>
                    ABOUT <span className='text-gray-900'>US</span>
                </p>
            </div>

            {/* About Section */}
            <div className='flex flex-col md:flex-row gap-12 items-center mb-16'>

                <img
                    className='w-full md:max-w-[360px] rounded-lg'
                    src={assets.about_image}
                    alt='About Us'
                />

                {/* Text */}
                <div className='flex flex-col justify-center gap-5 md:w-2/3 md:max-w-[650px] text-sm text-gray-600'>

                    <p>
                        Welcome to Prescripto, your trusted partner in managing
                        your healthcare needs conveniently and efficiently. At
                        Prescripto, we understand the challenges individuals
                        face when it comes to scheduling doctor appointments
                        and managing their health records.
                    </p>

                    <p>
                        Prescripto is committed to excellence in healthcare
                        technology. We continuously strive to enhance our
                        platform, integrating the latest advancements to improve
                        user experience and deliver superior service. Whether
                        you're booking your first appointment or managing
                        ongoing care, Prescripto is here to support you every
                        step of the way.
                    </p>

                    <div className='my-2'>
                        <p className='text-gray-950 font-bold mb-6'>
                            Our Vision
                        </p>

                        <p>
                            Our vision at Prescripto is to create a seamless
                            healthcare experience for every user. We aim to
                            bridge the gap between patients and healthcare
                            providers, making it easier for you to access the
                            care you need, when you need it.
                        </p>
                    </div>

                </div>
            </div>

            {/* Why Choose Us */}
            <div className='mt-10 mb-6 text-lg font-semibold'>
                <p className='text-gray-600'>
                    WHY <span className='text-gray-800'> CHOOSE US</span>
                </p>
            </div>

            {/* Why Choose Us Cards */}
            <div className='flex flex-col md:flex-row mb-20'>

                <div className='flex-1 border border-gray-300 p-10 md:p-14 text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'>
                    <p className='mb-4 text-sm font-bold'>
                        EFFICIENCY:
                    </p>

                    <p className='text-sm'>
                        Streamlined appointment scheduling that fits into your
                        busy lifestyle.
                    </p>
                </div>

                <div className='flex-1 border border-gray-300 p-10 md:p-14 text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'>
                    <p className='mb-4 text-sm font-bold'>
                        CONVENIENCE:
                    </p>

                    <p className='text-sm'>
                        Access to a network of trusted healthcare professionals
                        in your area.
                    </p>
                </div>

                <div className='flex-1 border border-gray-300 p-10 md:p-14 text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'>
                    <p className='mb-4 text-sm font-bold'>
                        PERSONALIZATION:
                    </p>

                    <p className='text-sm'>
                        Tailored recommendations and reminders to help you stay
                        on top of your health.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About