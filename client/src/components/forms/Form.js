const Form = ({ title, children, formHandler }) => {
  return (
    <form
      className="flex flex-row flex-wrap gap-4 justify-center"
      onSubmit={formHandler}
    >
      {title && (
        <h1 className="lg:w-[100%] text-4xl font-bold antialiased tracking-tight mb-4">
          {title}
        </h1>
      )}
      {children}
    </form>
  );
};

export default Form;
