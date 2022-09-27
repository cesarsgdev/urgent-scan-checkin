import { createContext, useContext, useReducer } from "react";
import { useAPI } from "../../hooks/useAPI";
import userReducer, { initialState } from "../../reducers/usersReducer";

const ListUsers = createContext(initialState);

export const ListUsersContext = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const API = useAPI();

  const getUserList = async () => {
    const users = await API.get("users");

    if (users.success) {
      dispatch({
        type: "SET_USER_LIST",
        payload: {
          users: users.data,
        },
      });
    }
  };

  const values = {
    users: state.users,
    getUserList,
  };
  return <ListUsers.Provider value={values}>{children}</ListUsers.Provider>;
};

const useListUsers = () => {
  const context = useContext(ListUsers);
  return context;
};

export default useListUsers;
