import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const FilterComponent = () => {
  const [checkboxes, setCheckboxes] = useState({
    apple: true,
    fitbit: true,
    dell: true,
    asus: true,
    logitech: true,
    msi: true,
    bosch: true,
    sony: true,
    samsung: true,
    canon: true,
    microsoft: true,
    razor: true,
  });

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    console.log(e.target,"handleSearchChange");
    const term = e.target.value;
    console.log(term);
    setSearchTerm(term,"handleSearchChange");

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
    console.log(checkboxes,"checkboxes");
  };

  return (
    
    <div className="flex items-center justify-center p-4">
      
      {/* <div id="dropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"> */}
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category</h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          {Object.keys(checkboxes).map((id) => (
            <li key={id} className="flex items-center">
              <input
                id={id}
                type="checkbox"
                value={id}
                // checked={checkboxes[id]}
                onChange={handleSearchChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {id.charAt(0).toUpperCase() + id.slice(1)} (56)
              </label>
            </li>
          ))}
        </ul>
      </div>
    // </div>
  );
};

export default FilterComponent;
