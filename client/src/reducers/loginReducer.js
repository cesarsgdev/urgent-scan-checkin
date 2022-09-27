export const userState = {
  user: null,
};

const loginReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "SET_EXPIRED":
      return {
        ...state,
        isExpired: true,
      };
    default:
      throw new Error("No dispatch detected");
  }
};

export default loginReducer;
