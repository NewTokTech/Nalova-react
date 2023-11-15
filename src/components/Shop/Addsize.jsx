/* eslint-disable no-undef */
import axios from "axios";
import React, { useState } from "react";
import { server } from "../../server";

const Addsize = () => {
  const [size, setSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${server}/shop/addSize`,
      {
        size,
      },
      { withCredentials: true }
    );
    console.log(res);
  };
  return (
    <div className="w-[90%] 800px:w-[30%] bg-white  shadow h-auto rounded-[4px] p-3 overflow-y-scroll  ">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="size"
            value={size}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setSize(e.target.value)}
            placeholder="Enter your size..."
          />
        </div>
        <div>
          <div>
            <input
              type="submit"
              value="Add"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addsize;
