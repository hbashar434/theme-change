import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { ThemeContext } from "../utilities/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-primary text-primary-content flex justify-between px-10">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        authMaster
      </Link>
      <div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
      </div>
      <div>
        {user ? (
          <>
            <button className="btn btn-active btn-ghost normal-case">
              {user.email}
            </button>
            <button
              onClick={handleLogOut}
              className="ml-2 btn btn-active btn-ghost normal-case hover:bg-indigo-900"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-active btn-ghost hover:bg-indigo-900 normal-case">
              Login
            </button>
          </Link>
        )}
        <button className="pl-6" onClick={toggleTheme}>
          {theme === "light" ? (
            <MdDarkMode size={30} />
          ) : (
            <MdLightMode size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
