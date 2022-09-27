import { useState, useEffect } from "react";
import { useAPI } from "../hooks/useAPI";
import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import useListUsers from "../components/contexts/ListUsersContext";
import UsersList from "../lists/users/Users";

const Users = () => {
  // const API = useAPI();
  // const { getUserList } = useListUsers();
  // useEffect(() => {
  //   getUserList();
  // }, []);
  return (
    <>
      <Section>
        <SectionHeader title="Users"></SectionHeader>
        <UsersList />
      </Section>
    </>
  );
};

export default Users;
