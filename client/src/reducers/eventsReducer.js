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
};

const eventsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_EVENTS":
      return {
        ...state,
        events: payload.events,
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => {
          return event._id !== payload.id;
        }),
      };

    case "EDIT_EVENT":
      const result = {
        ...state,
        editState: state.events.find((event) => {
          return event._id === payload.id;
        }),
        pop: true,
      };
      console.log(result);
      return result;

    case "CLOSE_OVERLAY":
      return {
        ...state,
        pop: !state.pop,
      };

    default:
      throw new Error("No dispatch detected");
  }
};

export default eventsReducer;
