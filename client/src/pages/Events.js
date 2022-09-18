import EventsList from "../lists/Events";

const Events = () => {
  return (
    <>
      <section className="container m-auto px-4 py-10">
        <h1 className=" text-4xl font-bold mb-5">Events</h1>
        <EventsList />
      </section>
    </>
  );
};

export default Events;
