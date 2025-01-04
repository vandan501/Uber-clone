import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";
function CaptainProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(captainDataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [navigate, token]);

  if (!token) {
    return null;
  }

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/captainprofile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response?.data?.captain);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });
  if (loading) {
    return (
      <>
        <div className="text-3xl text-center content-center font-semibold h-screen">
          {" "}
          Loading...
        </div>
      </>
    );
  }

  return <>{children}</>;
}

export default CaptainProtectedWrapper;
