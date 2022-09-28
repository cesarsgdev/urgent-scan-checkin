const UserItem = ({ user }) => {
  const { _id, name, email } = user;
  return (
    <>
      <div className=" w-[100%] bg-white shadow-sm p-4 rounded-md flex flex-col justify-between md:flex-row">
        <span className=" flex flex-auto text-xl antialiased font-bold text-aqua-100 md:text-lg md:w-[40%] md:border-r-2 md:border-gray-100 md:justify-center">
          {name}
        </span>
        <span className="flex  flex-auto text-sm text-gray-400 font-bold antialiased md:text-lg md:w-[40%] md:justify-center">
          {email}
        </span>
      </div>
    </>
  );
};

export default UserItem;
