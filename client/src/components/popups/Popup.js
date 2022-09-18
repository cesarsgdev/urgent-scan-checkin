const Popup = ({ children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className=" w-[40%] min-h-[500px] bg-white rounded-md shadow-lg border-aqua-100"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};

export default Popup;
