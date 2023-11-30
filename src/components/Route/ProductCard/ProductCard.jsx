import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <>
      <div className="w-full  bg-white   relative cursor-pointer my-5  md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 ">
        {/* <div className="flex justify-end"></div> */}
        <Link to={""}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="lg:w-[250px] w-full h-[300px] "
            onClick={() => setOpen(!open)}
          />
        </Link>

        {/* <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        > */}
        <h4
          className=" text-[16px] text-center mt-5  w-[250px]"
          onClick={() => setOpen(!open)}
        >
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>

        <div className="py-2 flex items-center justify-between w-[250px]">
          {/* <div className="flex justify-center"> */}
          <h5
            className={`${styles.productDiscountPrice} mx-auto `}
            onClick={() => setOpen(!open)}
          >
            {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}
            $
          </h5>
          <hr className="rotate-90 w-6" />
          <h4
            className={`${styles.price} mx-auto text-gray-500`}
            onClick={() => setOpen(!open)}
          >
            {data.originalPrice ? data.originalPrice + " $" : null}
          </h4>
        </div>
        {/* </div> */}
        {/* </Link> */}

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-16 top-10"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-16 top-10"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-16 top-16"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
