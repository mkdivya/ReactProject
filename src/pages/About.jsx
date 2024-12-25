import React from 'react'

const About = () => {
  return (
    <section class="bg-white dark:bg-gray-900 relative ">
    <div class="max-w-6xl px-6 py-10 mx-auto ">
        

        <h1 class="mt-2 text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            About Us
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="src/assets/images/CEO.jpeg" alt="CEO photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">Naveen Honnegowda</p>
                        <p class="text-blue-200 "> CEO and Founder @Silo Fortune pvt.limited</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                    
                   
                </div>
            </div>
        </main>
    </div>
</section>
  )
}

export default About