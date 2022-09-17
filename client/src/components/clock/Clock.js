import { useEffect, useState } from "react";

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
    <div className="time text-6xl font-bold text-white p-4 rounded-md bg-black">
      {currentTime}
    </div>
  );
};

export default Clock;
