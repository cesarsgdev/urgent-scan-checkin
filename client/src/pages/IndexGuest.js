import Clock from "../components/clock/Clock";

const IndexGuest = () => {
  return (
    <>
      <section className=" container m-auto h-[100vh] flex items-center justify-center flex-col gap-y-12">
        <button className=" w-[50%] bg-aqua-100 p-10 rounded-lg text-white text-6xl transition duration-500 cursor-pointer hover:bg-aqua-400">
          Check-in
        </button>
        <Clock />
      </section>
    </>
  );
};

export default IndexGuest;
