import { TailSpin } from "react-loader-spinner";
import EventControllers from "./EventsControllers";

const Events = ({ events }) => {
  return (
    <>
      {!events && (
        <div className="loadingEvents flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}
      {events && (
        <div className="eventsList flex flex-col gap-4">
          <div className="headersBar hidden font-bold text-sm antialiased text-gray-400 w-[100%] justify-between gap-4 px-8 uppercase tracking-tighter md:flex">
            <span className="w-[30%]">Event</span>
            <div className="headersEventMeta flex md:w-[60%] md: justify-between">
              <span className="md:w-[30%] text-center">City</span>
              <span className="md:w-[30%] text-center">Time</span>
              <span className="md:w-[30%] text-center">Date</span>
            </div>
          </div>
          {events.map((event) => {
            return (
              <article
                className="flex flex-col gap-4 px-4 py-4 bg-white cursor-pointer rounded-md shadow-sm md:justify-between md:items-center md:px-8 md:gap-4 md:flex md:flex-row md:hover:scale-[1.01] md:transition md:duration-500"
                key={event._id}
              >
                <div className="sm:w-[100%] eventInfo flex flex-col gap-0 md:w-[30%]">
                  <h2 className="sm:text-xl font-[800] text-aqua-100 tracking-tight antialiased md:text-2xl">
                    {event.name}
                  </h2>
                  <h3 className=" text-sm text-gray-400">{event.location}</h3>
                </div>
                <div className="eventMeta flex gap-1 justify-between text-xs md:w-[60%] md:text-sm">
                  <span className="font-bold tracking-tight text-gray-400 antialiased md:w-[30%] md:text-center">
                    {event.city}, {event.state}
                  </span>
                  <span className="font-bold antialiased md:w-[30%] md:text-center">
                    {event.time}
                  </span>
                  <span className="font-bold antialiased md:w-[30%] md:text-center">
                    {event.date}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Events;
