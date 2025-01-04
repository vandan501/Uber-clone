import React, { createContext, useState } from "react";

export const captainDataContext = createContext();

function CaptainContext({ children }) {
  const [captain, setCaptain] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
    vehicle: { brand: "", color: "", plate: "", capacity: "", vehicleType: "" },
  });

  return (
    <div>
      <captainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </captainDataContext.Provider>
    </div>
  );
}

export default CaptainContext;
