import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className=" h-[100%]">
        <Link to="/admin">
          <img src={logo} alt="Urgent Scan USA" className=" h-[100%]" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
