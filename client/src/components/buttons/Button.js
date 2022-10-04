const Button = ({ className, label, onClick }) => {
  const btnClass = ["cursor-pointer px-4 py-2 rounded-md", className].join(" ");

  return (
    <>
      <button className={btnClass} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
