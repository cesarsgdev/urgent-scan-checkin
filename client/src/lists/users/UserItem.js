const UserItem = ({ user }) => {
  const { _id, name, email } = user;
  return (
    <>
      <div className=" w-[100%] bg-white shadow-sm p-4 rounded-md flex justify-between">
        <span className="w-[40%] flex justify-center flex-auto text-md antialiased font-bold text-aqua-100 text-lg border-r-2 border-gray-100">
          {name}
        </span>
        <span className="w-[40%] flex justify-center flex-auto text-gray-400 font-bold antialiased text-lg">
          {email}
        </span>
      </div>
    </>
  );
};

export default UserItem;
