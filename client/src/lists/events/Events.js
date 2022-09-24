import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import EventItem from "./EventItem";
import useEvents from "../../components/contexts/EventsContext";
import { useAPI } from "../../hooks/useAPI";

const Events = () => {
  const context = useEvents();
  const API = useAPI();

  useEffect(() => {
    const getEvents = async () => {
      const events = await API.get("events");

      if (events.success) {
        context.setEvents(events.data);
      }
    };

    getEvents();
  }, []);

  return (
    <>
      {!context.events && (
        <div className="loadingEvents flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}
      {context.events && (
        <div className="eventsList flex flex-col gap-4">
          <div className="headersBar hidden font-bold text-sm antialiased text-gray-400 w-[100%] justify-between gap-4 px-8 uppercase tracking-tighter md:flex">
            <span className="w-[30%]">Event</span>
            <div className="headersEventMeta flex md:w-[60%] md:justify-between">
              <span className="md:w-[30%] text-center">City</span>
              <span className="md:w-[30%] text-center">Time</span>
              <span className="md:w-[30%] text-center">Date</span>
            </div>
          </div>
          {context.events.map((event) => {
            return <EventItem key={event._id} event={event} />;
          })}
        </div>
      )}
    </>
  );
};

export default Events;
