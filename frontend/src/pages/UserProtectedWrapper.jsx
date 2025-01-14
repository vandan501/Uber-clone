import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import axios from "axios";
function UserProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(userDataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/userprofile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response?.data?.user);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/login");
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
  if (!token) {
    return null;
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
