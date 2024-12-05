import React from 'react';

const hero1 = () => {
  return (
    <div className="relative flex items-start justify-between ml-11">
      {/* Text Section on the Left */}
      <div className="w-[217px] mt-182 ml-135 z-10">
        <div className="font-Poppins font-medium text-black flex items-center">
          <div className="text-black">
            Woman’s Fashion
          </div>
          <img src="/DropDown.svg" alt="DropDown" className="ml-2" />
        </div>

        {/* List of other items */}
        <div className="text-black mt-1 "> 
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
      </div>

      {/* Black Box Section on the Right */}
      <div className="bg-black w-[892px] h-[344px] p-4 border mr-20 border-black flex items-center justify-center relative z-20">
        <img
          src="/Frame 563.svg" // Replace with your actual image path
          alt="Frame 563"
          
            className="absolute top-[58px] left-20 gap-24  w-[150px] h-auto"
          />
        <h1 className="text-white text-[48px] font-Inter font-semibold leading-[60px] py-4 tracking-[4%] w-[294px] absolute top-[127px] left-64 transform -translate-x-1/2 h-[120px]">
          Up to 10% <br /> off Voucher
        </h1>
       
        <img src="mob.svg" alt="end frame" className=" absolute right-8 top-1/2 transform -translate-y-1/2 " />
        <img src="Frame 562.svg" alt="Frame 562" className="absolute bottom-3 left-353px w-[100px] h-auto"/>
        <img src="Frame 883.svg" alt="Frame 883" className='w-110px h-14px top-319px left-353px gap-12px'/>
      </div>
    </div>
  );
};

export default hero1;