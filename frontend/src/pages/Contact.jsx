import React from "react";

const Contact = () => {
  return (
    <div className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url(/3.jpg)] bg-cover bg-center bg-no-repeat opacity-10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Contact <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 font-light">
              We will be happy to connect with you
            </p>
          </div>

          {/* Contact Card */}
          <div className="mx-auto max-w-md">
            <div className="card-glass p-8 text-center">
              <div className="space-y-6">
                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-lg text-white/90 font-medium">
                    For any queries:
                  </p>
                  <a 
                    className="inline-block text-2xl font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200 underline decoration-blue-300/50 hover:decoration-blue-200 underline-offset-4" 
                    href="mailto:k.gourav254@gmail.com"
                  >
                    k.gourav254@gmail.com
                  </a>
                </div>

                {/* Additional contact methods could go here */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/70">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
