/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../Assests/logo.png";

const Header = ({ activeHeading }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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

  return (
    <nav className="fixed top-0 right-0  p-4 bg-white  w-full z-20  left-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 mt-3">
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button> */}
          <div className="flex ">
            <div className={`${styles.noramlFlex}`}>
              <div className={`${styles.noramlFlex} lg:block hidden`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(true)}
                >
                  <AiOutlineHeart size={30} color="#000000ba" />
                  <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white  text-[12px] leading-tight text-center">
                    {wishlist && wishlist.length}
                  </span>
                </div>
              </div>

              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} color="#000000ba" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white  text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
          </div>

          {isAuthenticated ? (
            <Link to="/profile" className="flex justify-between items-center align-middle">
              <BiUser size={30}/> <span className="pl-2">{user?.name}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="lg:block hidden rounded bg-primary-100 ml-5 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 border-2 text-lg text-primary"
            >
              LOGIN
            </Link>
          )}

          <button
            type="button"
            onClick={toggleMobileMenu} // Call the toggle function on button click
            className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"} // Set aria-expanded based on the state
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <Link to={"/"}>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-primary  rounded md:bg-transparent md:text-secondary md:p-0 "
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
            </Link>
            <Link to={"/shop"}>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
                >
                  SHOP
                </a>
              </li>
            </Link>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
      {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
      {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
    </nav>
  );
};

export default Header;
