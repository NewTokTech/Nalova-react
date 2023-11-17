import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import bannerImg from "../../../Assests/hero.png";
import bannerImg2 from "../../../Assests/hero-2.png";

const Hero = () => {
  return (
    <div className="flex  bg-[#222a32] w-full xl:px-5  px-5 h-[60vh] xl:h-[90vh] mt-20 ">
      <div className="bg-[#222a32] w-6/12 flex h-auto  items-center xl:ml-28">
        <div className="">
          <h1
            className={` text-[25px] leading-[1.2] 800px:text-[60px] text-white  font-[600] capitalize`}
          >
            Discover and <br /> FindYour Own <br /> Fashion!
          </h1>
          <p className="pt-5 text-[10px]  800px:text-[24px] font-[Poppins] max-w-xl font-[400] text-white ">
            Explore our curated collection of stylish <br /> clothing and
            accessories tailored to your .
            <br /> unique taste
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#222a32] w-6/12  hidden xl:flex justify-start">
        <img src={bannerImg} className="h-[90vh] w-10/12" alt="" />
      </div>
      <div className="bg-[#222a32] w-6/12 flex xl:hidden my-auto">
        <img src={bannerImg2} className="h-[40vh] w-full my-auto" alt="" />
      </div>
    </div>
  );
};

export default Hero;
