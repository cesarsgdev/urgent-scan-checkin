import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const Events = () => {
  const [events, setEvents] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const events = await fetch("/api/events");
      const data = await events.json();

      if (data.success) {
        setEvents(data.data);
      }

      console.log(data);
    };

    getEvents();
  }, []);

  return (
    <>
      {!events && (
        <div className="loadingEvents flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}
      {events && (
        <div className="eventsList flex flex-col gap-4">
          <div className="headersBar font-bold text-sm antialiased text-gray-400 flex w-[100%] justify-between gap-4 px-8 uppercase tracking-tighter">
            <span className="w-[30%]">Event</span>
            <span>City</span>
            <span>Time</span>
            <span>Date</span>
          </div>
          {events.map((event) => {
            return (
              <article
                className="flex justify-between items-center bg-white px-8 py-4 gap-4 rounded-md shadow-sm cursor-pointer"
                key={event._id}
              >
                <div className="eventInfo flex flex-col gap-0 w-[30%]">
                  <h2 className="text-2xl font-[800] text-aqua-100 tracking-tight antialiased">
                    {event.name}
                  </h2>
                  <h3 className=" text-sm font-bold text-gray-400">
                    {event.location}
                  </h3>
                </div>
                <span className="font-bold tracking-tight text-gray-400 antialiased">
                  {event.city}, {event.state}
                </span>
                <span className="font-bold antialiased">{event.time}</span>
                <span className="font-bold antialiased">{event.date}</span>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Events;
