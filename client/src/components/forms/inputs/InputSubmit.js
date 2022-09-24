const InputSubmit = ({ value = "Submit", id = "submitNewEvent" }) => {
  return (
    <>
      <input
        id={id}
        className="w-[100%] bg-aqua-100 text-white antialiased font-bold text-lg h-10 rounded-md transition duration-500 cursor-pointer hover:bg-aqua-400 mt-2"
        type="submit"
        value={value}
      />
    </>
  );
};

export default InputSubmit;
