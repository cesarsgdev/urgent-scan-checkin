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
  useEffect(() => {
    const getUser = async () => {
      const { _id: id } = jwt_decode(localStorage.getItem("token"));
      const user = await API.getSingle("users", id);
      if (user.success) {
        setAccount(user.data);
        setOriginal({ name: user.data.name, email: user.data.email });
      }
      return;
    };

    getUser();
  }, []);

  useEffect(() => {
    if (account) {
      const compare = {
        name: account.name,
        email: account.email,
      };

      setButton(
        (current) => JSON.stringify(compare) === JSON.stringify(original)
      );
    }
  }, [account]);

  const handleChange = (e) => {
    setAccount((account) => {
      return { ...account, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await API.edit("users", account._id, account);
    if (user.success) {
      toast.success("User Details have been updated", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setButton(true);
    }
  };
  return (
    <>
      {!account && (
        <div className="loadingEvents flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}
      {account && (
        <>
          <Form formHandler={handleSubmit}>
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
            <InputSubmit value="Save" disabled={button} />
          </Form>

          <Form className="w-[50%]" formHandler={handleSubmit}>
            <h1 className="text-3xl font-bold antialiased tracking-tight uppercase text-gray-500 text-left w-[100%]">
              Update Password
            </h1>
            <InputText
              label="Password"
              id="name"
              name="name"
              type="text"
              value={password}
              onChange={handleChange}
            />

            <InputSubmit value="Change Password" disabled={button} />
          </Form>
        </>
      )}
    </>
  );
};

export default AccountForm;
