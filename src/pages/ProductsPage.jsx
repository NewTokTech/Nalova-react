import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ShopCard from "../components/Route/ProductCard/ShopCard";
import styles from "../styles/styles";
import { categoriesData } from "../../src/static/data";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  const [checkboxes, setCheckboxes] = useState(categoriesData);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(allProducts);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    console.log(e.target.value);
    setSearchTerm(term);
    const filteredProducts =
      allProducts && allProducts.filter((product) => product.category === term);
    setSearchData(filteredProducts);
  };

  useEffect(() => {
    setSearchData(allProducts);

    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-20">
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="flex">
              <div className="w-4/12  h-auto">
                {/* <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category</h6> */}
                {/* <FilterComponent /> */}
                <h6 className="mb-3 text-center text-lg text-gray-900 dark:text-white">
                  Category
                </h6>

                <div className="flex items-center justify-center p-4">
                  {/* <div id="dropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"> */}

                  <ul
                    className="space-y-2 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    {categoriesData.map((id) => (
                      <li key={id.title} className="flex items-center">
                        <input
                          type="checkbox"
                          value={id.title}
                          onChange={handleSearchChange}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor={id.title}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          {id.title}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap">
                {searchData &&
                  searchData.map((i, index) => (
                    <ShopCard data={i} key={index} />
                  ))}
              </div>
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
