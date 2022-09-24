import { useState, useEffect } from "react";
import Form from "./Form";
import InputText from "./inputs/InputText";
import InputSubmit from "./inputs/InputSubmit";
import DateTimePicker from "react-datetime-picker";
import useEvents from "../contexts/EventsContext";
import CreatingLoader from "../../lists/events/CreatingLoader";

const CreateEventForm = () => {
  const context = useEvents();
  const [form, setForm] = useState(context.editState);
  const [errors, setErrors] = useState({});
  const [isSubmission, setIsSubmission] = useState(false);

  useEffect(() => {
    console.log(form);
    if (
      Object.keys(errors).length === 0 &&
      isSubmission &&
      !context.isEditingForm
    ) {
      context.createEvent(form);
    }

    if (
      Object.keys(errors).length === 0 &&
      isSubmission &&
      context.isEditingForm
    ) {
      context.editEvent(context.editState._id, form);
    }
  }, [errors, isSubmission]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, date: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.length === 0) {
      setErrors((currentErrors) => {
        return { ...currentErrors, name: "Name is required" };
      });
    } else if (form.name.length < 5) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          name: "Name has to be longer than 5 characters",
        };
      });
    } else if (form.name.length > 30) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          name: "Name has to be shorter than 30 characters",
        };
      });
    } else {
      setErrors((currentErrors) => {
        const copy = { ...currentErrors };
        delete copy["name"];
        return copy;
      });
    }

    if (form.location.length === 0) {
      setErrors((currentErrors) => {
        return { ...currentErrors, location: "Location is required" };
      });
    } else if (form.location.length < 5) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          location: "Location has to be longer than 5 characters",
        };
      });
    } else if (form.location.length > 30) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          location: "Location has to be shorter than 30 characters",
        };
      });
    } else {
      setErrors((currentErrors) => {
        const copy = { ...currentErrors };
        delete copy["location"];
        return copy;
      });
    }

    if (form.state.length === 0) {
      setErrors((currentErrors) => {
        return { ...currentErrors, state: "State is required" };
      });
    } else if (form.state.length !== 2) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          state: "State has to be longer than 5 characters",
        };
      });
    } else if (form.state.length > 30) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          state: "State has to be shorter than 30 characters",
        };
      });
    } else {
      setErrors((currentErrors) => {
        const copy = { ...currentErrors };
        delete copy["state"];
        return copy;
      });
    }

    if (form.city.length === 0) {
      setErrors((currentErrors) => {
        return { ...currentErrors, city: "City is required" };
      });
    } else if (form.city.length < 5) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          city: "City has to be longer than 5 characters",
        };
      });
    } else if (form.city.length > 30) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          city: "City has to be shorter than 30 characters",
        };
      });
    } else {
      setErrors((currentErrors) => {
        const copy = { ...currentErrors };
        delete copy["city"];
        return copy;
      });
    }

    setIsSubmission(true);
  };

  return (
    <>
      {context.isCreating && <CreatingLoader />}
      {!context.isCreating && (
        <Form
          title={`${context.isEditingForm ? `Update` : `Create`} Event`}
          formHandler={handleSubmit}
        >
          <InputText
            label="Name"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <InputText
            label="Location"
            name="location"
            id="location"
            value={form.location}
            onChange={handleChange}
            error={errors.location}
            required
          />
          <InputText
            label="City"
            name="city"
            id="city"
            width={40}
            value={form.city}
            onChange={handleChange}
            error={errors.city}
            required
          />
          <InputText
            label="State"
            name="state"
            id="state"
            width={40}
            value={form.state}
            onChange={handleChange}
            error={errors.state}
            required
          />
          <DateTimePicker
            name="date"
            onChange={handleDateChange}
            value={form.date}
          />
          <InputSubmit
            id={`${context.editState._id ? context.editState._id : ``}`}
            value={`${context.isEditingForm ? `Update` : `Create`} Event`}
          />
        </Form>
      )}
    </>
  );
};

export default CreateEventForm;
