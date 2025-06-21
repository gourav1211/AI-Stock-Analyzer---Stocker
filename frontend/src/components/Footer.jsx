import React from "react";

const Footer = () => {
  return (
    <div className="px-3 lg:h-96">
      <div className="flex justify-center mt-2 mb-3">
        <p className="font-semibold lg:text-2xl mb-4">
          This application was developed by{" "}
          <span className="font-bold underline-offset-4 underline">
            <a href="https://www.linkedin.com/in/gourav12/" target="_blank">
              K Gourav
            </a>
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-7xl lg:text-[18rem]" style={{ fontFamily: "Limelight" }}>
          STOCKER
        </p>
      </div>
      <div className="flex justify-center pb-1 mt-2">
        <p className="">All rights reserved. &copy; 2025 </p>
      </div>
    </div>
  );
};

export default Footer;
