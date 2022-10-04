import Section from "../components/layout/body/Section";
import SectionHeader from "../components/layout/body/SectionHeader";
import { FaCog } from "react-icons/fa";
import { useState, useEffect } from "react";
import Button from "../components/buttons/Button";
import Select from "react-select";
import { useAPI } from "../hooks/useAPI";
const Settings = () => {
  const API = useAPI();
  const [deviceSettings, setDeviceSettings] = useState(
    JSON.parse(localStorage.getItem("deviceSettings"))
  );

  const [events, setEvents] = useState([]);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getAllEvents = async () => {
      const events = await API.get("events");
      if (events.success) {
        setEvents(events.data);
      }
    };

    getAllEvents();
  }, [deviceSettings]);

  useEffect(() => {
    setOptions(
      events.map((event) => {
        return { ...event, label: event.name, value: event._id };
      })
    );
  }, [events]);

  useEffect(() => {
    if (value) {
      localStorage.setItem("deviceSettings", JSON.stringify(value));
      setDeviceSettings(value);
    }
  }, [value]);

  const handleCreateSettings = (e) => {
    const settings = JSON.stringify({});
    localStorage.setItem("deviceSettings", settings);
    setDeviceSettings(localStorage.getItem("deviceSettings"));
  };
  return (
    <>
      <Section>
        <SectionHeader
          title="Settings"
          icon={<FaCog size={28} className="text-aqua-100" />}
        ></SectionHeader>
        {!deviceSettings && (
          <div className="flex flex-col gap-4">
            <p className="text-2xl tracking-tight">
              No device settings available for this device. Create your
              setttings by clicking on the button below.
            </p>
            <Button
              label={"Create Settings"}
              className="bg-aqua-100 w-[300px] text-xl text-white px-3 py-3"
              onClick={handleCreateSettings}
            />
          </div>
        )}

        {deviceSettings && !deviceSettings._id && (
          <div>
            <Select
              options={options}
              onChange={(e) => {
                setValue(e);
              }}
              value={value}
            />
          </div>
        )}

        {deviceSettings && deviceSettings._id && (
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight font-extrabold">
              Current Event
            </h2>
            <ul className="flex flex-col gap-1">
              <li className="text-xl font-bold text-aqua-100">
                {deviceSettings.name}
              </li>
              <li className="text-lg font-bold text-gray-400">
                {deviceSettings.location}
              </li>
              <li className="font-bold">
                {deviceSettings.city}, {deviceSettings.state}
              </li>
              <li className="font-bold">
                {new Date(deviceSettings.date).toLocaleDateString()},{" "}
                {new Date(deviceSettings.date).toLocaleTimeString()}
              </li>
            </ul>
            <Button
              label="Remove Event"
              className="bg-red-700 text-white text-xl"
              onClick={(e) => {
                localStorage.removeItem("deviceSettings");
                setDeviceSettings(localStorage.getItem("deviceSettings"));
              }}
            />
          </div>
        )}
      </Section>
    </>
  );
};

export default Settings;
