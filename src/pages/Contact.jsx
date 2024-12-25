import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
   
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto ">
        <div class="text-center ">
            <p class="font-medium text-green-700 dark:text-green-500">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">Chat to our friendly team.</p>
        </div>

        <img class="object-fit w-full h-1/2 mt-10 rounded-lg lg:h-96" src="src/assets/images/Blog3.jpg" alt="Contact Us image"/>
        
        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <FaRegMessage className='text-green-500' />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                <p class="mt-2 text-sm text-green-500 dark:text-green-400">silofortune@gmail.com</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <IoLocation className='text-green-500'/>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                <p class="mt-2 text-sm text-green-500 dark:text-green-400">Beginest Co-working space,MG road,Bangalore</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <IoMdCall className='text-green-500'/>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 10am to 6pm.</p>
                <p class="mt-2 text-sm text-green-500 dark:text-green-400">95353 39311</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Contact