import { useState, useEffect } from "react";
import EventsList from "../lists/events/Events";
import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import Popup from "../components/popups/Popup";
import CreateEventForm from "../components/forms/CreateEventForm";

const Events = () => {
  const [events, setEvents] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const events = await fetch("/api/events");
      const data = await events.json();

      if (data.success) {
        setEvents(data.data);
      }
    };

    getEvents();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setOverlay(!overlay);
  };
  return (
    <>
      {overlay && (
        <Overlay>
          <Popup close={handleClick}>
            <CreateEventForm />
          </Popup>
        </Overlay>
      )}
      <section className="flex flex-col gap-8 container m-auto px-4 py-10">
        <div className="header flex justify-between items-center">
          <h1 className=" text-4xl font-bold">Events</h1>
          <Button
            label="Create Event"
            className=" bg-aqua-400 text-white select-none"
            onClick={handleClick}
          />
        </div>
        <EventsList events={events} />
      </section>
    </>
  );
};

export default Events;
