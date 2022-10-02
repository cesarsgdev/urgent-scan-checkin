import InputText from "./inputs/InputText";
import Form from "./Form";
import InputSubmit from "./inputs/InputSubmit";
import { useEffect, useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { TailSpin } from "react-loader-spinner";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const AccountForm = () => {
  const API = useAPI();
  const [account, setAccount] = useState(null);
  const [original, setOriginal] = useState(null);
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordBtn, setPasswordButton] = useState(true);
  const { _id: id } = jwt_decode(localStorage.getItem("token"));
  useEffect(() => {
    const getUser = async () => {
      const user = await API.getSingle("users", id);
      if (user.success) {
        setAccount({ name: user.data.name, email: user.data.email });
        setOriginal({ name: user.data.name, email: user.data.email });
      }
      return;
    };

    getUser();
  }, []);

  useEffect(() => {
    if (account) {
      setButton(
        (current) => JSON.stringify(account) === JSON.stringify(original)
      );
    }
  }, [account]);

  useEffect(() => {
    if (password) {
      setPasswordButton(false);
    } else {
      setPasswordButton(true);
    }
  }, [password]);

  const handleChange = (e) => {
    setAccount((account) => {
      return { ...account, [e.target.name]: e.target.value };
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await API.edit("users", id, account);
    if (user.success) {
      toast.success("User details have been updated", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setButton(true);
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    const user = await API.edit("users", id, { password });
    if (user.success) {
      toast.success("Your password has been updated", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setPasswordButton(true);
      setPassword("");
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setPassword("");
    }
  };
  return (
    <>
      {!account && (
        <div className="loadingUserDetails flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}
      {account && (
        <>
          <Form formHandler={handleSubmit} id="updateDetails">
            <h1 className="text-3xl font-bold antialiased tracking-tight uppercase text-gray-500 text-left w-[100%]">
              Update Details
            </h1>
            <InputText
              label="Name"
              id="name"
              name="name"
              type="text"
              value={account.name}
              onChange={handleChange}
            />
            <InputText
              label="Email"
              id="email"
              name="email"
              type="email"
              value={account.email}
              onChange={handleChange}
            />
            <InputSubmit
              value="Save"
              disabled={button}
              id="submitUserDetails"
            />
          </Form>

          <Form
            className="w-[50%]"
            formHandler={handleSubmitPasswordChange}
            id="changePassword"
          >
            <h1 className="text-3xl font-bold antialiased tracking-tight uppercase text-gray-500 text-left w-[100%]">
              Update Password
            </h1>
            <InputText
              label="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <InputSubmit
              value="Change Password"
              disabled={passwordBtn}
              id="submitChangePassword"
            />
          </Form>
        </>
      )}
    </>
  );
};

export default AccountForm;
