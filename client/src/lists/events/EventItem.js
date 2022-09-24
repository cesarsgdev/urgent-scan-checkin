import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import useEvents from "../../components/contexts/EventsContext";

const EventItem = ({ event }) => {
  const [subMenu, setSubMenu] = useState(false);
  const handleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  const context = useEvents();
  const date = new Date(event.date);

  return (
    <article
      className="relative flex flex-col gap-4 px-4 py-4 bg-white cursor-pointer rounded-md shadow-sm md:justify-between md:items-center md:px-8 md:gap-4 md:flex md:flex-row  md:transition md:duration-500"
      key={event._id}
      id={event._id}
    >
      <button
        className="absolute top-2 right-0 md:top-[calc(50%-14px)] text-aqua-100"
        onClick={handleSubMenu}
        onBlur={() => {
          setSubMenu(false);
        }}
      >
        <BiDotsVerticalRounded size={28} />
        {subMenu && (
          <ul className="flex flex-col items-start gap-2 text-md antialiased font-bold rounded-md right-[0] bg-aqua-400 py-2 absolute z-[1000] text-white md:top-[100%] md:w-[100px] ">
            <li className="uppercase text-[10px] text-aqua-200 px-4">
              Options
            </li>
            <li
              className="w-[100%] flex flex-start px-4 py-2 transition duration-500 hover:bg-aqua-300"
              onClick={() => {
                context.setEditEvent(event._id);
              }}
            >
              Edit
            </li>
            <li
              className="w-[100%] flex flex-start px-4 py-2 transition duration-500 hover:bg-aqua-300"
              onClick={() => {
                context.setAlert(event._id);
              }}
            >
              Delete
            </li>
          </ul>
        )}
      </button>
      <div className="sm:w-[100%] eventInfo flex flex-col gap-0 md:w-[30%]">
        <h2 className="sm:text-xl font-[800] text-aqua-100 tracking-tight antialiased md:text-2xl">
          {event.name}
        </h2>
        <h3 className=" text-sm text-gray-400">{event.location}</h3>
      </div>
      <div className="eventMeta flex gap-1 justify-between text-xs md:w-[60%] md:text-sm">
        <span className="font-bold tracking-tight text-gray-400 antialiased md:w-[30%] md:text-center">
          {event.city}, {event.state}
        </span>
        <span className="font-bold antialiased md:w-[30%] md:text-center">
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <span className="font-bold antialiased md:w-[30%] md:text-center">
          {date.toLocaleDateString()}
        </span>
      </div>
    </article>
  );
};

export default EventItem;
