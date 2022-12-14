const Overlay = ({ children, onClick }) => {
  return (
    <>
      <div
        className="flex items-center justify-center fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.25)] backdrop-blur-sm z-[10000]"
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default Overlay;
