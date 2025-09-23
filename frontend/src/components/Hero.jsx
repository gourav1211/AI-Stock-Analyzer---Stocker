import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const trynowhandler = () => {
    navigate("/search");
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url(/3.jpg)] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/70"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Analyze and Decide Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                MultiBagger
              </span>{" "}
              Stocks
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-light max-w-3xl mx-auto">
              Leverage the power of AI to grow your assets
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={trynowhandler}
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></span>
              <span className="relative">Try Now</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm md:text-base text-red-300 font-medium flex items-center justify-center">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Note: We only provide analysis and reports; we do not offer Financial Advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
