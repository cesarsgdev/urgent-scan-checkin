const InputSubmit = ({ value = "Submit" }) => {
  return (
    <>
      <input
        className="w-[100%] bg-aqua-100 text-white antialiased font-bold text-lg h-10 rounded-md transition duration-500 cursor-pointer hover:bg-aqua-400"
        type="submit"
        value={value}
      />
    </>
  );
};

export default InputSubmit;
