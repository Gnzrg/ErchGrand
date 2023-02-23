import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Contexts/UserContext";
export default function SignIn() {
  const { login, setLogin } = useContext(userContext);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setData(res.data.result));
  };
  const Check = () => {
    data.map((e) => {
      if (username == e.username) {
        localStorage.setItem("currentId", JSON.stringify({ id: e.userId }));
        setId(localStorage.getItem("currentId"));
        axios
          .get(`http://localhost:8090/api/user/${id}`)
          .then((res) => setUser(res.data.result));
        if (user.password == password) {
          alert("Success");
        } else {
          alert("Wrong");
        }
      }
    });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="w-50 d-flex flex-column align-items-center gap-4">
        <h2>Sign In</h2>
        <input
          className="form-control"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-flex justify-content-between w-100">
          <button className="btn btn-danger w-25">
            <NavLink to="/" className="text-decoration-none text-white">
              Cancel
            </NavLink>
          </button>
          <button className="btn btn-primary w-25" onClick={Check}>
            <NavLink to="/" className="text-decoration-none text-white">
              Sign In
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
