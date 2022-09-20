const InputText = ({
  label,
  type = "text",
  name,
  id,
  value,
  width,
  onChange,
  error,
  required,
}) => {
  return (
    <>
      <div
        className={`${
          width ? `w-[${width}%]` : `w-[100%]`
        } formInput flex flex-col flex-auto gap-1`}
      >
        <label
          className="cursor-pointer text-sm uppercase tracking-tight antialiased text-aqua-400 font-bold"
          htmlFor={id}
        >
          {label}
          {required && <span className="text-red-500 text-md ml-1">*</span>}
        </label>
        <input
          className={`border-2 rounded-md border-gray-300 h-10 py-1 px-2 focus:outline-aqua-400 ${
            error ? `border-red-500` : ``
          }`}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
        {error && (
          <span className=" bg-red-500 rounded-md w-[fit-content] px-2 py-1 text-xs text-white antialiased font-bold">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default InputText;
