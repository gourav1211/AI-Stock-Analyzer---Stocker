import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const trynowhandler = () => {
    navigate("/search");
  };
  // bg-[#00063F]
  return (
    <div className="px-3 pt-2 bg-[url(/3.jpg)] bg-cover bg-center bg-no-repeat text-white pb-3">
      <div className="flex-row md:flex-col">
        <div className=" h-[20vh] md:h-84 flex items-center justify-center">
          <div className="">
            <p className="text-3xl md:text-4xl font-semibold md:font-bold leading-10">
              Analyze and Decide Your MultiBagger Stocks
            </p>
            <small className="md:flex md:mt-4 md:justify-center md:text-2xl">Leverage the power of AI to grow your assets</small>
          </div>
        </div>
        <div> </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={trynowhandler}
          className="border-2 mt-2 mb-3 px-5 py-2 rounded-3xl hover:scale-95 hover:border-white hover:bg-white hover:text-black active:bg-white active:text-black cursor-pointer active:scale-95 duration-50 font-semibold active:border-white md:mt-1 md:px-20 md:py-6"
        >
          Try Now
        </button>
      </div>

      <hr className="mt-4 mb-5" />
      <small className="text-red-600 font-semibold flex justify-center">
        Note: We only provide analysis and reports; we do not offer Financial
        Advise.
      </small>
    </div>
  );
};

export default Hero;
