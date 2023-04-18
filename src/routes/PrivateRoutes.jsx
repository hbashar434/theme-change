import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="grid justify-center items-center mt-32">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  alert("Please login first");
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
