const Section = ({ children }) => {
  return (
    <section className="flex flex-col gap-8 container m-auto px-4 py-10">
      {children}
    </section>
  );
};

export default Section;
