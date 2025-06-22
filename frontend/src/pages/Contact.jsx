import React from "react";
// bg-[#00063F]
const Contact = () => {
  return (
    <div className="px-3 mt-2 pt-4 pb-5  bg-[url(/3.jpg)] bg-no-repeat bg-cover bg-center text-white lg:h-120 lg:flex lg:justify-around">
      <div className="flex-row lg:flex lg:justify-between lg:items-center">
        <div className="lg:mr-120">
          <div className="flex justify-center">
            <h1 className=" font-bold self-center text-2xl lg:text-4xl">
              Contact Us
            </h1>
          </div>
          <div className="mt-2 lg:mt-4 flex justify-center">
            <h1 className="text-l lg:text-lg ">
              We will be happy to connect with you
            </h1>
          </div>
        </div>
        <div className="mt-3 border-1 h-25 p-4 rounded-xl lg:h-54 lg:w-120 lg:flex lg:justify-center lg:items-center">
          <div className="lg:">
            <p className="lg:text-xl lg:pb-2">For any queries:</p>
            <a className="lg:text-3xl " href="mailto:k.gourav254@gmail.com">
              Mail to: k.gourav254@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
