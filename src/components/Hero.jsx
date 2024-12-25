import React from 'react'

const Hero = () => {
  const handleClick = () => {
    window.location.href = 'https://youtu.be/aMz0SCl6pBg?si=kzD8sTT4FrX3dE2I';
  };
  return (
    //  content section
    <div className='border-gray-500 bg-[#E8F5E9] m-6 rounded-3xl '>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-8xl text-5xl mb-4 font-medium text-green-500">Gau Swastha

              </h1>
              <h1 className="title-font sm:text-8xl text-4xl mb-4 font-medium text-black-500">Your Cow's Health Our Promise

              </h1>
              <p className="mb-8 leading-relaxed font-normal text-xl">Just upload photos or a short video,and we'll give you a full health report to keep your cows happy and productive</p>
              <div className="flex justify-center">

                
                <button onClick={handleClick} class="inline-flex text-white bg-green-500 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-2xl text-lg border-2 border-black">
  <i class="fa-regular fa-circle-play py-2 px-2"></i> Watch video
</button>




              </div>
            </div>
            {/* Image section */}
            <div class="lg:max-w-lg lg:w-full md:w-2/3 w-full ">
              <img class="object-cover  object-center rounded-3xl  " alt="hero" src="./src/assets/images/Hero.jpg" />
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Hero