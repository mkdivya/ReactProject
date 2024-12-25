import React from 'react'

const Nav = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    


  return (
    <nav className='p-3 flex bg-white justify-between items-center'>
       <a href="#" id='brand' className='flex gap-2 items-center'>
        <img className='object-cover w-12 h-12' src="src/assets/images/logo.png" alt="Logo" />
        <span className='text-lg font-medium'>Silo Fortune</span>
       </a>

       <div id="nav-menu " className='hidden md:flex gap-12 '>

        <a href="#" className='font-medium text-black hover:text-green-500'>Home</a>
        <a href="#" className='font-medium text-black hover:text-green-500'>About Us</a>
        <a href="#" className='font-medium text-black hover:text-green-500'>Services</a>
        <a href="#" className='font-medium text-black hover:text-green-500'>Blog</a>
        <a href="#" className='font-medium text-black hover:text-green-500'>Contact Us</a>
       </div>

      <button className='p-2 md:hidden'  onClick={toggleMenu} >
      <i class="fa-solid fa-bars text-gray-600" 
       ></i>
      </button>

      <div id= ' nav-dialog' className='fixed bg-white  p-3'>
        <div id="nav-bar" className='flex justify-between'>
        <a href="#" id='brand' className='flex gap-2 items-center'>
        <img className='object-cover max-w-12 max-h-12' src="src/assets/images/logo.png" alt="Logo" />
        <span className='text-lg font-medium'>Silo Fortune</span>
       </a>

       <button className='p-2 md:hidden'  >
       <i class="fa-solid fa-xmark text-gray-500"></i>
      </button>
        </div>
        
        <div className='mt-6'>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded' >Home</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded' >Home</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded' >Home</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded' >Home</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded' >Home</a>
        </div>

      </div>
    </nav>
  )
}

export default Nav