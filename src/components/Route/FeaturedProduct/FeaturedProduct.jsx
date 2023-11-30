import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState();
  useEffect(() => {
    if(allProducts){
      const productdatas = allProducts.filter((a, b) => {
        let totalValue = 0;
        for (let size in a.productSize) {
          totalValue += parseInt(a.productSize[size], 10);
        }
        console.log(totalValue, "let totalValue = 0; totalValue");
        return 0 < totalValue;
      });
      console.log(productdatas);
      setData(productdatas);
    }else{
      setData(allProducts)
    }
   
   
  }, [allProducts]);
  // setData(allProducts)
  // console.log(allProducts);
  return (
    <div className="flex justify-center my-10">
      <div className={`${styles.section} `}>
        <div className={`${styles.heading}`}>
          <h1 className="text-center text-[#3A3836]  font-bold">
            ALL PRODUCTS
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

export default FeaturedProduct;
