import { useEffect } from "react";
import useListUsers from "../../components/contexts/ListUsersContext";
import { TailSpin } from "react-loader-spinner";
import UserItem from "./UserItem";

const Users = () => {
  const { users, getUserList } = useListUsers();

  useEffect(() => {
    getUserList();
    console.log(users);
  }, []);
  return (
    <>
      {!users && (
        <div className="loadingUsers flex items-center justify-center h-[auto]">
          <TailSpin color="#009fbd" width={40} height={40} />
        </div>
      )}

      {users && (
        <div className="usersList flex flex-col gap-4">
          {users.map((user) => {
            return <UserItem key={user._id} user={user} />;
          })}
        </div>
      )}
    </>
  );
};

export default Users;
