import { useState, useEffect } from "react";
import { useAPI } from "../hooks/useAPI";
import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import UsersList from "../lists/users/Users";
import { BsPeopleFill } from "react-icons/bs";

const Users = () => {
  return (
    <>
      <Section>
        <SectionHeader
          title="Users"
          icon={<BsPeopleFill size={28} className="text-aqua-100" />}
        ></SectionHeader>
        <UsersList />
      </Section>
    </>
  );
};

export default Users;
