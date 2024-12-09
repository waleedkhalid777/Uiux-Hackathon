import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Shop = () => {
  return (
    <div>

    <div className="relative h-80 flex items-center justify-center">
      
      <div className="absolute inset-0">
        <Image
          src="/shop.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority={true} // Optimize for loading
          className="z-0 blur-[3px]" // Apply an extra-light blur
        />
      </div>

      
      <div className="relative z-10 text-center ">
        <h1 className="text-4xl font-bold text-black"> Shop</h1>
        <div className='flex'>
        <h2 className="text-xl font-bold text-black">Home </h2><MdKeyboardArrowRight className='text-2xl text-black text-center' /> <h2 className='text-xl font-bold text-black'>Shop</h2>
        </div>
        
        

        
      </div>
      
    </div>
    <div className=" relative  h-[50px] flex items-center  bg-amber-50">
        
      <div className="absolute inset-0">
      </div>
      </div>

      <div className="container mx-auto px-6 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center">

    {/* Product 1 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/levita.png" alt="Dining" className="w-full h-full object-cover" />
      </div>
      <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Potty</h3>
          <p className='text-gray-600 mx-2'>Minimalist Flower Pot</p>
          <h3 className='text-lg font-medium mx-2'>Rp 500,000</h3>

        </div>
      
    </div>

    {/* Product 2 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/lolita.png" alt="Living" className="w-full h-full object-cover" />
      </div>
     
    </div>

    {/* Product 3 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/lolita.png" alt="Bedroom" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 4 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/respira.jpg" alt="Bedroom" className="w-full h-full object-cover" />
      </div>
    
    </div>

    {/* Product 5 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/grifo.png" alt="Kitchen" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 6 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/muggo.png" alt="Office" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 7 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/pingkey.jpg" alt="Decor" className="w-full h-full object-cover" />
      </div>
     
    </div>

    {/* Product 8 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/potty.jpg" alt="Outdoor" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 9 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/levita.png" alt="Product 9" className="w-full h-full object-cover" />
      </div>
     
    </div>

    {/* Product 10 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/respira.jpg" alt="Product 10" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 11 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/lolita.png" alt="Product 11" className="w-full h-full object-cover" />
      </div>
      
    </div>

  
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/pingkey.jpg" alt="Product 12" className="w-full h-full object-cover" />
      </div>
      
    </div>

    
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/potty.jpg" alt="Product 13" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 14 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/muggo.png" alt="Product 14" className="w-full h-full object-cover" />
      </div>
      
    </div>

    {/* Product 15 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/levita.png" alt="Product 15" className="w-full h-full object-cover" />
      </div>
     
    </div>

    {/* Product 16 */}
    <div className="text-center">
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img src="/respira.jpg" alt="Product 16" className="w-full h-full object-cover" />
      </div>
      
    </div>

  </div>
</div>


<div className="flex space-x-6 justify-center items-center">
  
  <button className="px-4 py-2 bg-red-600 text-black rounded hover:bg-blue-600">
    1
  </button>

  
  <button className="px-4 py-2 bg-amber-50 text-black rounded hover:bg-blue-600">
    2
  </button>

  
  <button className="px-4 py-2 bg-amber-50 text-black rounded hover:bg-blue-600">
    3
  </button>

  <button className="px-4 py-2 bg-amber-50 text-black rounded hover:bg-blue-600">
    Next
  </button>
</div>




<div className=" relative  h-[50px] flex items-center  bg-amber-50">
        
      <div className="absolute inset-0">
      </div>
      </div>




    </div>
  );
};

export default Shop;
