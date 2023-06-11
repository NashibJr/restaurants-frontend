import React, { useState } from "react";
import Input from "../components/input.js";
import Button from "../components/button.js";
import Card from "../components/card.js";
import helperFunctions from "../components/helperFunctions.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user/userSlice.js";

const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleLogin = async () => {
    const data = { ...state };
    try {
      const response = await helperFunctions.loginUser(data);
      alert(response.data.user.message);
      if (response.data.user.message === "Successfully loggedin") {
        dispatch(loginUser(response.data.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 center-items">
      <Card>
        <div className="container mt-2 p-3">
          <p className="h4 fw-bold" style={{ width: "50vh" }}>
            An Admin? <span className="text-success">Login</span>
          </p>
          <form>
            <Input
              type="text"
              name="username"
              value={state.username}
              placeholder="Enter Username"
              handleChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter Password"
              handleChange={handleChange}
            />
            <div className="mt-5">
              <Button
                label="Login"
                onClickEvent={handleLogin}
                disabled={!state.username && !state.password}
              />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
