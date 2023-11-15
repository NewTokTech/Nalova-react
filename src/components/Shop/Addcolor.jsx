/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const Addcolor = () => {
  const getSize = async () => {
    const res = await axios.get(`${server}/shop/getSize`, {
      withCredentials: true,
    });
    console.log(res);
    setSize(res.data.sizeData);
    return res.data.sizeData;
  };

  useEffect(() => {
    getSize();
  }, []);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(size);
    // const res = await axios.post(
    //   `${server}/shop/addColor`,
    // //   {
    // //     size,
    // //   },
    //   { withCredentials: true }
    // );
    // console.log(res);
  };
  return (
    <div className="w-[90%] 800px:w-[30%] bg-white  shadow h-auto rounded-[4px] p-3 overflow-y-scroll  ">
      <h5 className="text-[30px]  text-center">Add colors</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />

        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            // value={category}
            // onChange={(e) => setSize(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {size &&
              size.map((i) => (
                <>
                  {/* <h1>{i.size}Hello</h1> */}
                  <option value={i.size} key={i.id}>
                    {i.size}
                  </option>
                </>
              ))}
          </select>
        </div>

        <div>
          <label className="pb-2">
            size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="color"
            // value={color}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            // onChange={(e) => setSize(e.target.value)}
            placeholder="Enter your size..."
          />
        </div>

        <div>
          <label className="pb-2">
            size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="color"
            value={color}
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

export default Addcolor;
