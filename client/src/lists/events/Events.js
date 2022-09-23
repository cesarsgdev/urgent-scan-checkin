import { TailSpin } from "react-loader-spinner";
import EventControllers from "./EventsControllers";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState, useContext, useEffect } from "react";
import EventItem from "./EventItem";
import useEvents from "../../components/contexts/EventsContext";

const Events = ({ events, setOverlay }) => {
  const context = useEvents();

  useEffect(() => {
    const getEvents = async () => {
      const events = await fetch("/api/events");
      const data = await events.json();

      if (data.success) {
        context.setEvents(data.data);
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
            <div className="headersEventMeta flex md:w-[60%] md: justify-between">
              <span className="md:w-[30%] text-center">City</span>
              <span className="md:w-[30%] text-center">Time</span>
              <span className="md:w-[30%] text-center">Date</span>
            </div>
          </div>
          {context.events.map((event) => {
            return (
              <EventItem
                key={event._id}
                event={event}
                setOverlay={setOverlay}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Events;
