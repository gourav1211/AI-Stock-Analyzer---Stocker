import axios from "axios";
import { useState } from "react";
import instance from "../api/axiosConfig";
import { ToastContainer, toast } from 'react-toastify';

const Search = () => {
  const [data, setdata] = useState("You will get your report here");
  const [selectedValue, setSelectedValue] = useState("");
  const notify = () => toast('Please select a Stock Ticker from the drop-down menu');

  const handleReport = async () => {
    if (selectedValue) {
      setdata("Please wait. Your report is being generated...")
      const res = await instance.get(`/result?data=${selectedValue}`);
      // console.log(res);
      setdata(res.data.analysis);
    } else {
      console.log("No value selected");
      notify()
    }
  };

  return (
    <div className="px-3 mt-3">
      
      <div className="">
        <p>Select your Stock Ticker from the drop down below</p>
        <ToastContainer />
        <div className="">
          <form action="post">
            <select
              name="tickerSelect"
              id=""
              className="border-1 mt-2 px-4 py-2 rounded"
              value={selectedValue}
              onChange={() => {
                setSelectedValue(event.target.value);
              }}
            >
              <option value="">--select--</option>
              <option value="ABBOTINDIA">ABBOTINDIA</option>
              <option value="ADANIGREEN">ADANIGREEN</option>
              <option value="ADANIPORTS">ADANIPORTS</option>
              <option value="CIPLA">CIPLA</option>
            </select>
          </form>
        </div>
        <button
          onClick={handleReport}
          className="my-3 rounded border-1 px-4 py-2 hover:scale-95 hover:bg-black hover:text-white hover:border-black active:scale-95 duration-75"
        >
          Generate Report
        </button>
        <div className="border-1 rounded w-full mt-2 p-2">
          <p id="here">{data}</p>
        </div>
        <div className="border-1 w-full rounded mt-5 p-2">
          <p id="here">Graphical reports coming soon...Stay Tuned</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
