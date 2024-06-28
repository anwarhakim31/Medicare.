import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/images/portrait-3d-male-doctor.jpg";

const navLinks = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/doctors",
    name: "Find a Doctor",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <figure>
            <img src={logo} alt="Medicare" />
          </figure>

          <div className="navigation">
            <ul className="primary-list flex items-center gap-[2.7rem]">
              {navLinks.map((link, i) => (
                <li key={i + 1}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-semibold"
                        : "text-textColor text-base leading-7 font-medium"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link to={"/"}>
              <figure className="w-[35px] h-[35px] rounded-full">
                <img
                  src={userImg}
                  alt="user-image"
                  className="w-full h-full object-cover rounded-full"
                />
              </figure>
            </Link>

            <Link to={"/login"}>
              <button className="bg-primaryColor py-2 px-6 text-white font-semibold  flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
