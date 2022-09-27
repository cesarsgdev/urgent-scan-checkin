import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import InputText from "../components/forms/inputs/InputText";
import InputSubmit from "../components/forms/inputs/InputSubmit";
import logo from "../images/logo.svg";
import useUser from "../components/contexts/UserContext";
const Login = () => {
  const { logIn, checkToken } = useUser();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(userDetails);
  };

  const handleChange = (e) => {
    setUserDetails((details) => {
      return { ...details, [e.target.name]: e.target.value };
    });
  };

  if (checkToken()) return <Navigate to="/admin" />;
  return (
    <>
      <section className=" container m-auto h-[100vh] flex items-center justify-center flex-col gap-[40px]">
        <h1 className=" text-4xl font-bold">Login</h1>
        <div className=" w-[100%] bg-white h-[auto] rounded-md shadow-md md:w-[30%]">
          <form
            onSubmit={handleSubmit}
            className="w-[100%] p-10 flex flex-col gap-5 h-[100%] justify-center items-center"
          >
            <img className="w-[60%]" src={logo} alt="Urgent Scan USA" />
            <InputText
              label="Email"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <InputText
              label="Password"
              type="password"
              name="password"
              id="password"
              value={userDetails.password}
              onChange={handleChange}
            />
            <InputSubmit value="Login" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
