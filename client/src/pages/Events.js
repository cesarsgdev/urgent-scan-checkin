import EventsList from "../lists/events/Events";
import Button from "../components/buttons/Button";
import Overlay from "../components/overlays/Overlay";
import Popup from "../components/popups/Popup";
import CreateEventForm from "../components/forms/CreateEventForm";
import useEvents from "../components/contexts/EventsContext";
import DeleteAlert from "../components/alerts/DeleteAlert";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const Events = () => {
  const context = useEvents();
  const [alert, setAlert] = useState(false);

  return (
    <>
      <CSSTransition
        in={context.pop}
        timeout={200}
        classNames="overlay"
        mountOnEnter={true}
        unmountOnExit={true}
        onEntering={() => {
          setAlert(true);
        }}
        onExiting={() => {
          setAlert(false);
        }}
      >
        <Overlay>
          <CSSTransition
            in={alert}
            timeout={500}
            classNames="alert"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Popup close={true}>
              <CreateEventForm update={context.editState} />
            </Popup>
          </CSSTransition>
        </Overlay>
      </CSSTransition>

      <CSSTransition
        in={context.alert}
        timeout={200}
        classNames="overlay"
        mountOnEnter={true}
        unmountOnExit={true}
        onEntering={() => {
          setAlert(true);
        }}
        onExiting={() => {
          setAlert(false);
        }}
      >
        <Overlay>
          <CSSTransition
            in={alert}
            timeout={500}
            classNames="alert"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Popup>
              <DeleteAlert />
            </Popup>
          </CSSTransition>
        </Overlay>
      </CSSTransition>
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
