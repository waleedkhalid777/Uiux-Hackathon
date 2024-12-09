import React from 'react';

const Product = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-black font-poppins text-2xl text-center py-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Product 1 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/levita.png"
              alt="Dining"
              className="w-full h-full object-cover"
            />
             
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Syltherine</h3>
          <p className='text-gray-600 mx-2'>Stylish Cafe chair</p>
          <h3 className='text-lg font-medium mx-2'>Rp 2,500,00</h3>

        </div>
        </div>

        
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/lolita.png"
              alt="Living"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Leviosa</h3>
          <p className='text-gray-600 mx-2'>Stylish Cafe chair</p>
          <h3 className='text-lg font-medium mx-2'>Rp 2,500,00</h3>

        </div>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/lolita.png"
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Lolito</h3>
          <p className='text-gray-600 mx-2'>Luxury Big Sofa</p>
          <h3 className='text-lg font-medium mx-2'>Rp 7,000,000</h3>

        </div>
        </div>

        {/* Product 4 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/respira.jpg"
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Respira</h3>
          <p className='text-gray-600 mx-2'>Out Door bar Table And School</p>
          <h3 className='text-lg font-medium mx-2'>Rp 500,000</h3>

        </div>
        </div>

        {/* Product 5 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/grifo.png"
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Grifo</h3>
          <p className='text-gray-600 mx-2'>Night Lamp</p>
          <h3 className='text-lg font-medium mx-2'>Rp 1,500,000</h3>

        </div>
        </div>

        {/* Product 6 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/muggo.png"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Muggo</h3>
          <p className='text-gray-600 mx-2'>Small mug</p>
          <h3 className='text-lg font-medium mx-2'>150,000</h3>

        </div>
        </div>

        {/* Product 7 */}
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/pingkey.jpg"
              alt="Decor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Pingkey</h3>
          <p className='text-gray-600 mx-2'>Cute Bed Set</p>
          <h3 className='text-lg font-medium mx-2'>Rp 7,000,000</h3>

        </div>
        </div>

        
        <div className="text-center">
          <div className="w-full h-72 overflow-hidden  bg-gray-100">
            <img
              src="/potty.jpg"
              alt="Outdoor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='bg-gray-200 w-full text-left '>
          <h3 className=" text-lg font-medium mx-2   ">Potty</h3>
          <p className='text-gray-600 mx-2'>Minimalist Flower Pot</p>
          <h3 className='text-lg font-medium mx-2'>Rp 500,000</h3>

        </div>
        </div>

      </div>

      <div className="flex justify-center items-center mx-2 px-4 py-8 ">
  <button className="border-2 border-red-500 px-4 ">Show More</button>
</div>
    </div>
  );
}

export default Product;
