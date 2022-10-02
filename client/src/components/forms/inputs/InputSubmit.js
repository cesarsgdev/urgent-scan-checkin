const InputSubmit = ({
  value = "Submit",
  id = "submitNewEvent",
  disabled = false,
}) => {
  return (
    <>
      <input
        id={id}
        className="w-[100%] bg-aqua-100 text-white antialiased font-bold text-lg h-10 rounded-md transition duration-500 cursor-pointer hover:bg-aqua-400 mt-2 disabled:bg-gray-300 disabled:text-gray-500"
        type="submit"
        value={value}
        disabled={disabled}
      />
    </>
  );
};

export default InputSubmit;
