/* eslint-disable jsx-a11y/anchor-has-content */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../server";
import { useSelector } from "react-redux";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            // if(isAuthenticated){
            //   navigate('/')
            // }
            console.log(res.status);
            if(res.status === 201){
                navigate('/login')
            }
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <>
        <p>Your account has been created suceessfully!</p>
        <br />
        <a href="http://localhost:3000/">GO TO HOME PAGE</a>
        </>
      )}
    </div>
  );
};

export default ActivationPage;
