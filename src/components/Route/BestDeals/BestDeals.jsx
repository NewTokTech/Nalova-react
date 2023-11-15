import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  

  return (
    <div className="flex justify-center my-10">
      <div className={`${styles.section} `}>
        <div className={`${styles.heading}`}>
          <h1 className="text-center text-[#3A3836] font-Roboto font-bold">Best selling</h1>
          <p className="text-center text-[#3A3836] font-Roboto text-sm my-5">Get in on the trend with our curated selection of best-selling styles.</p>
        </div>
        {/* <div class="flex flex-wrap"></div> */}
        <div className="flex flex-wrap">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
