import { TailSpin } from "react-loader-spinner";
import EventControllers from "./EventsControllers";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import EventItem from "./EventItem";

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
            return <EventItem event={event} />;
          })}
        </div>
      )}
    </>
  );
};

export default Events;
