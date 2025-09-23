import React from "react";

const Footer = () => {
  return (
    <div className="section-padding bg-gradient-to-br from-gray-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Developer Credit */}
        <div className="text-center">
          <p className="text-lg lg:text-2xl font-semibold mb-4 text-gray-300">
            This application was developed by{" "}
            <span className="font-bold text-white">
              <a 
                href="https://www.linkedin.com/in/gourav12/" 
                target="_blank"
                className="hover:text-blue-400 transition-colors duration-200 underline decoration-blue-400/50 hover:decoration-blue-400 underline-offset-4"
              >
                K Gourav
              </a>
            </span>
          </p>
        </div>

        {/* Main Logo */}
        <div className="text-center">
          <h1 
            className="text-6xl md:text-8xl lg:text-[12rem] xl:text-[15rem] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-none"
            style={{ fontFamily: "Limelight" }}
          >
            STOCKER
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm lg:text-base">
            All rights reserved. &copy; 2025
          </p>
        </div>

        {/* Optional: Add some decorative elements */}
        <div className="flex justify-center space-x-8 pt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
