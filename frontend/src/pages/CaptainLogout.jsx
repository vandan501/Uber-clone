import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Captain Logout</div>;
}

export default CaptainLogout;
