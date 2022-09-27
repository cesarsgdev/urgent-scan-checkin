const SectionHeader = ({ children, title, icon = false }) => {
  return (
    <div className="header flex justify-between items-center">
      <h1 className=" text-4xl font-bold">
        {icon} {title}
      </h1>
      {children}
    </div>
  );
};

export default SectionHeader;
