import React from 'react'


 
    const Blogs = () => {
        return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src="src/assets/images/Blog1.png"
                  className="object-cover w-full h-100"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                  {/* Blog1 */}
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-4 text-2xl font-bold leading-5 transition-colors duration-200 text-green-700"
                  >
                    Steps to enhance Dairy Farming with AI
                  </a>
                  <p className="mb-2 text-gray-700">
                  Artificial Intelligence (AI) is one of the key innovations driving this change, helping farmers optimize processes, improve herd health, and increase milk production. Integrating AI into dairy farming operations can yield impressive results by automating tasks
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-green-500"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src="src/assets/images/Blog1.png"
                  className="object-cover w-full h-100"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                {/* Blog2 */}
                  <a
                    href="/"
                    aria-label="Category"
                    title="Simple is better"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-green-700"
                  >
                    5 Health Benefits of Dairy Fortune Feed for Cattle
                  </a>
                  <p className="mb-2 text-gray-700">
                  Artificial Intelligence (AI) is one of the key innovations driving this change, helping farmers optimize processes, improve herd health, and increase milk production. Integrating AI into dairy farming operations can yield impressive results by automating tasks

                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-green-500"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src="src/assets/images/Blog1.png"
                  className="object-cover w-full h-100"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                  {/* Blog3 */}
                  <a
                    href="/"
                    aria-label="Category"
                    title="Film It!"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-green-700"
                  >
                    A Comprehensive Guide to the Gau Sampurna App
                  </a>
                  <p className="mb-2 text-gray-700">
                  Artificial Intelligence (AI) is one of the key innovations driving this change, helping farmers optimize processes, improve herd health, and increase milk production. Integrating AI into dairy farming operations can yield impressive results by automating tasks

                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-green-500"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      };
  

export default Blogs