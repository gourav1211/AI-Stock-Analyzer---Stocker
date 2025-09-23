import { useState } from "react";
import instance from "../api/axiosConfig";
import { ToastContainer, toast } from 'react-toastify';

const Search = () => {
  const [data, setdata] = useState("You will get your report here");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const notify = () => toast.error('Please select a Stock Ticker from the drop-down menu', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const handleReport = async () => {
    if (selectedValue) {
      setIsLoading(true);
      setdata("Please wait. Your report is being generated...")
      try {
        const res = await instance.get(`/result?data=${selectedValue}`);
        setdata(res.data.analysis);
      } catch (error) {
        setdata("Error generating report. Please try again.");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("No value selected");
      notify()
    }
  };

  const stockOptions = [
    { value: "", label: "-- Select a Stock --" },
    { value: "ABBOTINDIA", label: "Abbott India Ltd" },
    { value: "ADANIGREEN", label: "Adani Green Energy Ltd" },
    { value: "ADANIPORTS", label: "Adani Ports and SEZ Ltd" },
    { value: "CIPLA", label: "Cipla Ltd" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <ToastContainer />
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Stock <span className="text-gradient">Analysis</span>
            </h1>
            <p className="text-xl text-gray-600">
              Select your Stock Ticker from the dropdown below
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Stock Selection Card */}
            <div className="card p-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">
                  Choose Your Stock
                </h2>
                
                <div className="space-y-4">
                  <select
                    name="tickerSelect"
                    className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                    value={selectedValue}
                    onChange={(event) => {
                      setSelectedValue(event.target.value);
                    }}
                  >
                    {stockOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleReport}
                    disabled={isLoading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Report...
                      </>
                    ) : (
                      <>
                        Generate Report
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Analysis Report Card */}
            <div className="card p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Analysis Report
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 min-h-[200px]">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {data}
                  </p>
                </div>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="card p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Graphical Reports
                </h2>
                <p className="text-gray-600">
                  Interactive charts and visual analytics coming soon... Stay Tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
