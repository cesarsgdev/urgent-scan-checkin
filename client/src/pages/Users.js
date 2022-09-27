import { useState, useEffect } from "react";
import { useAPI } from "../hooks/useAPI";
import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";

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
      <Section>
        <SectionHeader title="Users"></SectionHeader>
      </Section>
    </>
  );
};

export default Users;
