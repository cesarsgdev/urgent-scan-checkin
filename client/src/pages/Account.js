import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import AccountForm from "../components/forms/AccountForm";
import { FaUserCog } from "react-icons/fa";

const Account = () => {
  return (
    <>
      <Section>
        <SectionHeader
          title="Account"
          icon={<FaUserCog size={28} className="text-aqua-100" />}
        ></SectionHeader>
        <AccountForm />
      </Section>
    </>
  );
};

export default Account;
