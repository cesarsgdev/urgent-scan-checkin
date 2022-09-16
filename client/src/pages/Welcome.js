import logo from "../images/logo.svg";
const Welcome = () => {
  return (
    <>
      <section className=" container m-auto h-[calc(100vh-100px)] flex items-center justify-center">
        <img src={logo} alt="Ultra Scan USA" className="w-[100%]" />
      </section>
    </>
  );
};

export default Welcome;
