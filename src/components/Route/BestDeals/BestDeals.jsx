/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const data = sortedData.filter((a, b) => {
      let totalValue = 0;
      for (let size in a.productSize) {
        totalValue += parseInt(a.productSize[size], 10);
      }
      console.log(totalValue, "let totalValue = 0; totalValue");
      return 0 < totalValue;
    });
    console.log(data);
    const firstFive = data && data.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  return (
    <div className="flex justify-center my-10">
      <div className={`${styles.section} `}>
        <div className={`${styles.heading}`}>
          <h1 className="text-center text-[#3A3836]  font-bold">
            Best selling
          </h1>
          <p className="text-center text-[#3A3836]  text-sm my-5">
            Get in on the trend with our curated selection of best-selling
            styles.
          </p>
        </div>
        {/* <div class="flex flex-wrap"></div> */}
        <div className="flex flex-wrap">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
