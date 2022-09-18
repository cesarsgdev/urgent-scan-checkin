import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime((currentTime) => new Date().toLocaleTimeString());
    }, 1000);
  }, [currentTime]);
  return (
    <div className="flex gap-4 time text-6xl font-bold text-gray-100 p-4 rounded-md bg-black">
      <FiClock className="text-aqua-300" /> {currentTime}
    </div>
  );
};

export default Clock;
