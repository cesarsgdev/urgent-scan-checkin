import { useEffect } from "react";

const Header = ({ children }) => {
  return (
    <>
      <header className="w-[100%] h-[100px] bg-white shadow-sm p-4">
        <div className="container flex justify-between h-[100%] m-auto gap-8 items-center">
          {children}
        </div>
      </header>
    </>
  );
};

export default Header;
