export const initialState = {
  events: false,
  editState: {
    name: "",
    location: "",
    city: "",
    state: "",
    date: new Date(),
  },
  pop: false,
  isCreating: false,
  alert: false,
  alertID: null,
  isEditingForm: false,
};

const eventsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_EVENTS":
      return {
        ...state,
        events: payload.events,
      };
    case "CREATE_EVENT":
      console.log(state.events);
      return {
        ...state,
        events: [payload.event, ...state.events].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
        pop: !state.pop,
      };

    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => {
          return event._id !== payload.event._id;
        }),
      };

    case "EDIT_EVENT":
      const result = {
        ...state,
        editState: state.events.find((event) => {
          return event._id === payload.id;
        }),
        pop: !state.pop,
        isEditingForm: !state.isEditingForm,
      };
      console.log(result);
      return result;

    case "CLOSE_OVERLAY":
      return {
        ...state,
        pop: !state.pop,
      };

    case "SET_ALERT":
      return {
        ...state,
        alert: !state.alert,
        alertID: payload.id,
      };

    case "IS_CREATING":
      return {
        ...state,
        isCreating: !state.isCreating,
      };

    default:
      throw new Error("No dispatch detected");
  }
};

export default eventsReducer;
