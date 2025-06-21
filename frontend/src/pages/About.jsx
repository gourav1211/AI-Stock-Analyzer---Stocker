import React from "react";

const About = () => {
  return (
    <div id="about" className="px-3 flex-row lg:flex lg:justify-between items-center lg:h-120">
      <div className=" place-self-center border-1 w-[70%] lg:w-120 lg:h-84 mb-5 mt-4 rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src="./stock-image.jpg" alt="image of a stock graph" />
      </div>
      <div className="lg:w-240">
        <div className="flex justify-center">
          <h1 className=" font-bold self-center text-2xl lg:text-4xl ">About Us</h1>
        </div>
        <div className="mt-2 flex justify-center lg:text-xl">
          <h1 className="text-l">
            We make it effortless all your analytics needs.
          </h1>
        </div>
        <div className="mt-3 lg:font-semibold lg:text-xl">
          <div className="flex items-center py-4 px-3 hover:bg-gray-300 hover:rounded-2xl cursor-pointer">
            <img className="mr-3" src="./Icon1.svg" alt="" />
            <p>Our numbers speaks for itself.</p>
          </div>
          <hr className="mt-1 mb-1 cursor-pointer" />
          
          <div className="flex items-center  py-4 px-3 hover:bg-gray-300 hover:rounded-2xl cursor-pointer">
            <img className="mr-3" src="./Icon2.svg" alt="" />
            <p>Accuracy our first priority.</p>
          </div>
          <hr className="mt-1 mb-1" />
          
          <div className="flex items-center py-4 px-3 hover:bg-gray-300 hover:rounded-2xl cursor-pointer">
            <img className="mr-3" src="./Icon3.svg" alt="" />
            <p>Be Always in sync.</p>
          </div>
          {/* <hr className="mt-1" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
