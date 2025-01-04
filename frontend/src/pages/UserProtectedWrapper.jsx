import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
