import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import { FaUserCog } from "react-icons/fa";

const Account = () => {
  return (
    <>
      <Section>
        <SectionHeader
          title="Account"
          icon={<FaUserCog size={28} className="text-aqua-100" />}
        ></SectionHeader>
      </Section>
    </>
  );
};

export default Account;
