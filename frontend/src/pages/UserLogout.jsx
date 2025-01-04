import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        // Optionally show an error message or redirect
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default UserLogout;
