import React, { createContext, useState } from "react";

export const userDataContext = createContext();

function userContext({ children }) {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });
  return (
    <div>
      <userDataContext.Provider value={{ user, setUser }}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default userContext;
