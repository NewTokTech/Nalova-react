import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEvent, getAllEventsShop } from "../../redux/actions/event";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";

const AllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const { seller } = useSelector((state) => state.seller);
  const [categoryTable,setCategory] = useState()

  const dispatch = useDispatch();

  const getCatefgory = async()=>{
    const res = await axios.get(`${server}/shop/getCategory`, {
      withCredentials: true,
    });
    console.log(res.data.categoryData);
    setCategory(res.data.categoryData);
  }

  useEffect(() => {
    dispatch(getAllEventsShop(seller._id));
    getCatefgory()
  }, [dispatch]);



  const columns = [
    { field: "id", headerName: "Category Id", minWidth: 150, flex: 0.7 },
    {
      field: "category",
      headerName: "category",
      minWidth: 180,
      flex: 1.4,
    },
  ];

  // const row = [];

  const row = categoryTable &&
  categoryTable.map((item) => {
      return {
        id: item._id,
        category: item.category}
    });
    console.log(row);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          {categoryTable && 
               <DataGrid
               rows={row}
               columns={columns}
               pageSize={10}
               disableSelectionOnClick
               autoHeight
             />
          }
     
        </div>
      )}
    </>
  );
};

export default AllEvents;
