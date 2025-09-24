import React from "react";

const About = () => {
  const features = [
    {
      icon: "./Icon1.svg",
      title: "Our numbers speaks for itself.",
      description: "Proven track record with accurate market predictions"
    },
    {
      icon: "./Icon2.svg",
      title: "Accuracy our first priority.",
      description: "Advanced AI algorithms ensure precise analysis"
    },
    {
      icon: "./Icon3.svg",
      title: "Be Always in sync.",
      description: "Real-time market data and instant updates"
    }
  ];

  return (
    <div id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[400px] lg:h-[500px] object-cover" 
                src="./stock-image.jpg" 
                alt="image of a stock graph" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-gradient">Us</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light">
                We make it effortless all your analytics needs.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <img className="w-6 h-6 filter invert" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
