import React from "react";
import { Navbar } from "../components";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { logout, currentUser } = useAuth();

  return (
    <>
      <Navbar isAuthenticated={!!currentUser} handleLogout={logout} />
      <div className=" bg-main ">{children}</div>
    </>
  );
};

export default Layout;
