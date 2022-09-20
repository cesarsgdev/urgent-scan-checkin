const Form = ({ children, formHandler }) => {
  return (
    <form className="flex flex-col gap-2" onClick={formHandler}>
      {children}
    </form>
  );
};

export default Form;
