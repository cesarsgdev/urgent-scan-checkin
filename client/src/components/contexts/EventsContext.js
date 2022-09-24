import { createContext, useContext, useReducer } from "react";
import { useAPI } from "../../hooks/useAPI";
import eventsReducer, { initialState } from "../../reducers/eventsReducer";
import { toast } from "react-toastify";

const Events = createContext(initialState);

export const EventsContext = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);
  const API = useAPI();

  const setEvents = (events) => {
    dispatch({
      type: "SET_EVENTS",
      payload: {
        events,
      },
    });
  };

  const createEvent = async (data) => {
    dispatch({
      type: "IS_CREATING",
    });

    const event = await API.create("events", data);
    console.log(event);
    if (event.success) {
      dispatch({
        type: "CREATE_EVENT",
        payload: {
          event: event.data,
        },
      });
      toast.success(`Event ${event.data.name} created`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      dispatch({
        type: "IS_CREATING",
      });
      toast.error(`Ooops! Something went wrong! Please try again!`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const deleteEvent = async (id) => {
    console.log(id);
    dispatch({
      type: "SET_ALERT",
      payload: {
        id: null,
      },
    });
    const event = await API.delete("events", id);
    console.log(event);
    if (event.success) {
      dispatch({
        type: "DELETE_EVENT",
        payload: {
          event: event.data,
        },
      });
      toast.success("Event deleted!", { position: toast.POSITION.TOP_CENTER });
    }
  };

  const editEvent = (id) => {
    dispatch({
      type: "EDIT_EVENT",
      payload: {
        id,
      },
    });
  };

  const setAlert = (id) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        id: id || null,
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
    isCreating: state.isCreating,
    alert: state.alert,
    alertID: state.alertID,
    isEditingForm: state.isEditingForm,
    setEvents,
    createEvent,
    deleteEvent,
    editEvent,
    setAlert,
    handlePopup,
  };

  return <Events.Provider value={values}>{children}</Events.Provider>;
};

const useEvents = () => {
  const context = useContext(Events);

  return context;
};

export default useEvents;
