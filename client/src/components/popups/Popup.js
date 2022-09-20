import { AiFillCloseCircle } from "react-icons/ai";

const Popup = ({ children, close }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="relative w-[90%] h-[auto] min-h-[400px] bg-white rounded-md shadow-lg border-aqua-100 p-8 lg:w-[40%] xl:w-[33%]"
        onClick={handleClick}
      >
        {close && (
          <AiFillCloseCircle
            className="absolute right-[-12px] top-[-12px] text-[28px] text-aqua-100 bg-white rounded-[50%] antialiased cursor-pointer md:text-[36px]"
            onClick={close}
          />
        )}
        {children}
      </div>
    </>
  );
};

export default Popup;
