import React, { createContext, useContext, useState } from 'react';

// Tạo UserContext
const UserContext = createContext();

// Tạo UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Sử dụng UserContext trong một component
export const useUser = () => useContext(UserContext);
