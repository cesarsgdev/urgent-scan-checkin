import useEvents from "../contexts/EventsContext";

const DeleteAlert = () => {
  const context = useEvents();
  return (
    <>
      <div className="h-[100%] w-[100%] flex flex-wrap gap-y-8 gap-x-4 items-center justify-center">
        <h1 className="w-[100%] text-3xl font-bold antialiased tracking-tight text-center">
          Are you sure you want to delete this event?
        </h1>
        <button
          onClick={() => {
            context.setAlert();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md w-[40%] flex-auto cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={(e) => {
            context.deleteEvent(e.target.id);
          }}
          id={context.alertID}
          className="bg-aqua-400 text-white px-4 py-2 rounded-md w-[40%] flex-auto cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteAlert;
