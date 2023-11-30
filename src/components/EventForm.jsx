import React, { useState } from "react";
import "./EventForm.css";
import { useLocalStorage } from "../custom hook/useLocalStorage";
import { useDispatch } from "react-redux";
import { addEvent } from "../store/eventSlice";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [capacity, setCapacity] = useState("");

  const dispatch = useDispatch();

  const [savedForm, setSavedForm, clearForm] = useLocalStorage("eventData");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit event data
    let startTime = new Date(eventStart);
    let endTime = new Date(eventEnd);

    const newEvent = {
      title,
      startTime,
      endTime,
      eventLocation,
      capacity,
    };
    dispatch(addEvent(newEvent));
    setTitle("");
    setCapacity("");
    setEventEnd("");
    setEventLocation("");
    setEventStart("");
  };

  return (
    <div className="eventForm">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Event Location:
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Start:
          <input
            type="datetime-local"
            value={eventStart}
            onChange={(e) => setEventStart(e.target.value)}
            required
          />
        </label>
        <label>
          End:
          <input
            type="datetime-local"
            value={eventEnd}
            onChange={(e) => setEventEnd(e.target.value)}
            required
          />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </label>

        <label htmlFor="visibility">
          Visibility
          <select id="visibility" name="visibility">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>

        <label htmlFor="event_theme">
          Theme
          <select id="event_theme" name="event_theme">
            <option value="minimal">Minimal</option>
            <option value="holiday">Holiday</option>
            <option value="quantum">Quantum</option>
          </select>
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
