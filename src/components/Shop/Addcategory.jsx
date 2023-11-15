/* eslint-disable no-undef */
import axios from "axios";
import React, { useState } from "react";
import { server } from "../../server";

const Addcategory = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  const res =  await axios.post(
      `${server}/shop/Addcategory`,
      {
        category,
      },
      { withCredentials: true }
    );
    console.log(res);
  };
  return (
    <div className="w-[90%] 800px:w-[30%] bg-white  shadow h-auto rounded-[4px] p-3 overflow-y-scroll  ">
      <h5 className="text-[30px]  text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Category"
            value={category}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter your product name..."
          />
        </div>
        <div>
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addcategory;
