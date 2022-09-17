import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import InputText from "../components/forms/inputs/InputText";
import InputSubmit from "../components/forms/inputs/InputSubmit";
import logo from "../images/logo.svg";
const Login = () => {
  const [logedIn, setLogedIn] = useState(false);
  const token = localStorage.getItem("token");

  if (logedIn || token) return <Navigate to="/admin" />;
  return (
    <>
      <section className=" container m-auto h-[100vh] flex items-center justify-center flex-col gap-[40px]">
        <h1 className=" text-4xl font-bold">Login</h1>
        <div className=" w-[100%] bg-white h-[auto] rounded-md shadow-md md:w-[30%]">
          <form className="w-[100%] p-10 flex flex-col gap-5 h-[100%] justify-center items-center">
            <img className="w-[60%]" src={logo} alt="Urgent Scan USA" />
            <InputText label="Email" name="email" id="email" />
            <InputText
              label="Password"
              type="password"
              name="password"
              id="password"
            />
            <InputSubmit value="Login" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
