import { useState, useEffect } from "react";
import EventsList from "../lists/events/Events";
import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import Popup from "../components/popups/Popup";
import CreateEventForm from "../components/forms/CreateEventForm";
import useEvents from "../components/contexts/EventsContext";

const Events = () => {
  const context = useEvents();
  const [overlay, setOverlay] = useState(context.pop);
  useEffect(() => {}, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setOverlay(!overlay);
  };
  return (
    <>
      {context.pop && (
        <Overlay>
          <Popup close={handleClick}>
            <CreateEventForm update={context.editState} />
          </Popup>
        </Overlay>
      )}
      <section className="flex flex-col gap-8 container m-auto px-4 py-10">
        <div className="header flex justify-between items-center">
          <h1 className=" text-4xl font-bold">Events</h1>
          <Button
            label="Create Event"
            className=" bg-aqua-400 text-white select-none"
            onClick={context.handlePopup}
          />
        </div>
        <EventsList setOverlay={setOverlay} />
      </section>
    </>
  );
};

export default Events;
