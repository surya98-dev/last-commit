import React from "react";
import { useAuth } from "../context/AuthContext";

const dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
};

export default dashboard;
