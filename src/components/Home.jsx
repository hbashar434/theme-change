import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ThemeContext } from "../utilities/ThemeContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`h-screen ${theme}`}>
      <h2 className="text-center pt-16">
        This is Home {user && <span>{user.displayName}</span>}{" "}
      </h2>
    </div>
  );
};

export default Home;
