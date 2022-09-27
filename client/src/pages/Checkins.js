import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import { BsFillPersonCheckFill } from "react-icons/bs";

const Checkins = () => {
  return (
    <>
      <Section>
        <SectionHeader
          title="Checkins"
          icon={<BsFillPersonCheckFill size={28} className="text-aqua-100" />}
        ></SectionHeader>
      </Section>
    </>
  );
};

export default Checkins;
