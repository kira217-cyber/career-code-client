import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import loginLottie from "../../assets/lotties/login.json";
import Lottie from "lottie-react";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { login } = use(AuthContext);
  const location  =  useLocation()
  const from = location.state || '/'
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    login(email, password)
      .then((res) => {
        navigate(from)
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: "400px" }}
              animationData={loginLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login Now!</h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
              <div className="flex justify-center">
                <SocialLogin from={from}></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
