// src/UserContext.jsx
import { createContext, useState } from "react";
import React from "react";
import { Route } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
