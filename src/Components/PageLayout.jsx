import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
export default function PageLayout({ styleOb }) {
  const { login, setLogin } = useContext(userContext);
  const styleObj = {
    textDecoration: "underline",
    color: "greenyellow",
  };
  const styleObj2 = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="w-100">
      <div
        className="header w-100 d-flex align-items-center justify-content-evenly px-4 py-2 position-fixed"
        style={styleOb}
      >
        <div className="logo d-flex col-md-6">
          <img
            src={require("../images/Logo.png")}
            alt=""
            style={{ width: "70px", height: "70px" }}
          />
          <NavLink
            to="/"
            className="fs-2 fw-bold pt-2 text-decoration-none text-dark"
          >
            Эрч Гранд
          </NavLink>
        </div>
        <div className="nav col-md-4">
          <ul className="list-unstyled d-flex justify-content-evenly  w-100">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? styleObj : styleObj2)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) => (isActive ? styleObj : styleObj2)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? styleObj : styleObj2)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? styleObj : styleObj2)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          {login ? (
            <button>
              <i class="bi bi-person-circle"></i>
            </button>
          ) : (
            <div className="d-flex justify-content-evenly align-items-center  ">
              <button className="btn btn-warning">
                <NavLink
                  to="/signin"
                  className="text-decoration-none text-dark"
                >
                  Нэвтрэх
                </NavLink>
              </button>
              <button className="btn btn-success">Бүртгүүлэх</button>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer d-flex pt-5 justify-content-between bg-secondary ">
        <div className="col-md-6">This is a Footer</div>
        <div className="col-md-6">This is a Footer</div>
      </div>
    </div>
  );
}
