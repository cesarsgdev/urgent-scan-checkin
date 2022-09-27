export const initialState = {
  users: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER_LIST":
      console.log(payload.users);
      return {
        ...state,
        users: payload.users,
      };
      break;

    default:
      throw new Error("No dispatch detected");
  }
};

export default userReducer;
