const InputText = ({ label, type = "text", name, id }) => {
  return (
    <>
      <div className=" w-[100%] formInput flex flex-col gap-1">
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
        <input
          className="border rounded-md border-aqua-100 h-10 py-1 px-2"
          type={type}
          name={name}
          id={id}
        />
      </div>
    </>
  );
};

export default InputText;
