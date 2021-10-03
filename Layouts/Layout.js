import React from "react";
import { Navbar } from "../components";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { logout, currentUser } = useAuth();

  return (
    <div>
      <Navbar isAuthenticated={!!currentUser} handleLogout={logout} />
      {children}
    </div>
  );
};

export default Layout;
