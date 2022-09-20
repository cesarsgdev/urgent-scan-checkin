import { useState } from "react";
import Form from "./Form";
import InputText from "./inputs/InputText";
import InputSubmit from "./inputs/InputSubmit";
import DateTimePicker from "react-datetime-picker";
import { useEffect } from "react";

const CreateEventForm = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    city: "",
    state: "",
    date: new Date(),
  });

  const [errors, setErrors] = useState({
    name: "",
    location: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, date: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      name: "",
      location: "",
      city: "",
      state: "",
    });

    if (form.name.length === 0) {
      setErrors((oldForm) => {
        return { ...oldForm, name: "Name is required" };
      });
    } else if (form.name.length < 5) {
      setErrors((oldForm) => {
        return { ...oldForm, name: "Name has to be longer than 5 characters" };
      });
    } else if (form.name.length > 30) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          name: "Name has to be shorter than 30 characters",
        };
      });
    } else {
      setErrors((oldForm) => {
        return { ...oldForm, name: "" };
      });
    }

    if (form.location.length === 0) {
      setErrors((oldForm) => {
        return { ...oldForm, location: "Location is required" };
      });
    } else if (form.location.length < 5) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          location: "Location has to be longer than 5 characters",
        };
      });
    } else if (form.location.length > 30) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          location: "Location has to be shorter than 30 characters",
        };
      });
    }

    if (form.state.length === 0) {
      setErrors((oldForm) => {
        return { ...oldForm, state: "State is required" };
      });
    } else if (form.state.length < 5) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          state: "State has to be longer than 5 characters",
        };
      });
    } else if (form.state.length > 30) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          state: "State has to be shorter than 30 characters",
        };
      });
    }

    if (form.city.length === 0) {
      setErrors((oldForm) => {
        return { ...oldForm, city: "City is required" };
      });
    } else if (form.city.length < 5) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          city: "City has to be longer than 5 characters",
        };
      });
    } else if (form.city.length > 30) {
      setErrors((oldForm) => {
        return {
          ...oldForm,
          city: "City has to be shorter than 30 characters",
        };
      });
    }
    console.log(errors);
  };

  return (
    <>
      <Form title="Create Event" formHandler={handleSubmit}>
        <InputText
          label="Name"
          name="name"
          id="name"
          val={form}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <InputText
          label="Location"
          name="location"
          id="location"
          val={form}
          onChange={handleChange}
          error={errors.location}
          required
        />
        <InputText
          label="City"
          name="city"
          id="city"
          width={40}
          val={form}
          onChange={handleChange}
          error={errors.city}
          required
        />
        <InputText
          label="State"
          name="state"
          id="state"
          width={40}
          val={form}
          onChange={handleChange}
          error={errors.state}
          required
        />
        <DateTimePicker
          name="date"
          onChange={handleDateChange}
          value={form.date}
        />
        <InputSubmit value="Create Event" onSubmit={handleSubmit} />
      </Form>
    </>
  );
};

export default CreateEventForm;
