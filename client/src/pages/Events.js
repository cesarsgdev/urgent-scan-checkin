import EventsList from "../lists/events/Events";
import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import Popup from "../components/popups/Popup";
import CreateEventForm from "../components/forms/CreateEventForm";
import useEvents from "../components/contexts/EventsContext";
import DeleteAlert from "../components/alerts/DeleteAlert";

const Events = () => {
  const context = useEvents();

  return (
    <>
      {context.pop && (
        <Overlay>
          <Popup close={true}>
            <CreateEventForm update={context.editState} />
          </Popup>
        </Overlay>
      )}

      {context.alert && (
        <Overlay>
          <Popup>
            <DeleteAlert />
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
        <EventsList />
      </section>
    </>
  );
};

export default Events;
