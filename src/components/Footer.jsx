import React from 'react'

const Footer = () => {
  return (

    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Image section */}
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              className='w-15 h-12'

            />
            <span class="ml-3 text-3xl">Silo Fortune</span>
          </a>

          <p class="mt-1 text-2xl ml-12 text-green-600">Brings out the best</p>
        </div>
        {/* Content Section */}
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-black hover:text-green-600 tracking-wide text-2xl mb-3 py-2">Quick Link</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Home</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">About</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Services</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Pricing</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Blog</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-black hover:text-green-600  text-2xl mb-3 py-2">Follow Us</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Facebook</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Twitter</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Instagram</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">LinkedIn</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-black hover:text-green-600 text-3xl mb-3 py-2">Contact Us</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm  "><i class="fa-solid fa-phone  text-green-500 px-2"></i> 1800 419 7848</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm  "><i class="fa-solid fa-envelope text-green-500 py-2 px-2"></i>  support@silofortune.com</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-green-500 text-sm">Beginest co-working space,MG road,Bangalore</a>
              </li>

            </nav>
          </div>

        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-6 flex flex-wrap flex-col sm:flex-row ">
          <p class="text-green-800 text-sm text-center sm:text-left">© 2024 Silo Fortune —
            <a href="https://www.silofortune.com/" rel="open silo" class="text-green-800 ml-1" target="_blank">@Silo Fortune</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class='text-green-500 hover:text-green-600'>
            <i class="fa-brands fa-facebook fa-2x" ></i>
            </a>
            <a class="ml-3 text-green-500 hover:text-green-600">
            <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a class="ml-3 text-green-500 hover:text-green-600">
            <i class="fa-brands fa-square-x-twitter fa-2x"></i>
            </a>
            <a class="ml-3  text-green-500 hover:text-green-600">
            <i class="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer