import { useState, useEffect } from "react";
import { useAPI } from "../hooks/useAPI";

const Users = () => {
  const API = useAPI();
  useEffect(() => {
    const getUsers = async () => {
      const users = await API.get("users");

      if (users.success) {
        console.log(users.data);
      }
    };

    getUsers();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-8 container m-auto px-4 py-10">
        <div className="header flex justify-between items-center">
          <h1 className=" text-4xl font-bold">Users</h1>
        </div>
      </section>
    </>
  );
};

export default Users;
