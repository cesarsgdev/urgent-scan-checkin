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
  defaultForm: {
    name: "",
    location: "",
    city: "",
    state: "",
    date: new Date(),
  },
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
      return {
        ...state,
        events: [payload.event, ...state.events].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
        pop: !state.pop,
        isCreating: !state.isCreating,
      };

    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => {
          return event._id !== payload.event._id;
        }),
      };

    case "SET_EDIT_EVENT":
      const item = state.events.find((event) => {
        return event._id === payload.id;
      });

      item["date"] = new Date(item.date);

      const result = {
        ...state,
        editState: item,
        pop: !state.pop,
        isEditingForm: !state.isEditingForm,
      };
      return result;

    case "EDIT_EVENT":
      return {
        ...state,
        events: state.events.map((event) => {
          if (event._id === payload.event._id) {
            return payload.event;
          } else {
            return event;
          }
        }),
        isCreating: !state.isCreating,
        pop: !state.pop,
        isEditingForm: !state.isEditingForm,
      };

    case "CLOSE_OVERLAY":
      return {
        ...state,
        pop: !state.pop,
        editState: {
          ...state.defaultForm,
        },
        isEditingForm: false,
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
