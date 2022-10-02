import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import { FaCog } from "react-icons/fa";

const Settings = () => {
  return (
    <>
      <Section>
        <SectionHeader
          title="Settings"
          icon={<FaCog size={28} className="text-aqua-100" />}
        ></SectionHeader>
      </Section>
    </>
  );
};

export default Settings;
