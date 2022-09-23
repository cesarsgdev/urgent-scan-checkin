import { createContext, useContext, useReducer } from "react";
import eventsReducer, { initialState } from "../../reducers/eventsReducer";

const Events = createContext(initialState);

export const EventsContext = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);

  const setEvents = (events) => {
    dispatch({
      type: "SET_EVENTS",
      payload: {
        events,
      },
    });
  };

  const deleteEvent = (id) => {
    dispatch({
      type: "DELETE_EVENT",
      payload: {
        id,
      },
    });
  };

  const editEvent = (id) => {
    dispatch({
      type: "EDIT_EVENT",
      payload: {
        id,
      },
    });
  };

  const handlePopup = () => {
    dispatch({
      type: "CLOSE_OVERLAY",
    });
  };

  const values = {
    events: state.events,
    editState: state.editState,
    pop: state.pop,
    setEvents,
    deleteEvent,
    editEvent,
    handlePopup,
  };

  return <Events.Provider value={values}>{children}</Events.Provider>;
};

const useEvents = () => {
  const context = useContext(Events);

  return context;
};

export default useEvents;
