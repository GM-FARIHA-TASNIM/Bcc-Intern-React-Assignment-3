import React, { useState } from "react";
import "../App.css";

function Task3EventList() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [search, setSearch] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return alert("Title and Date are required!");
    setEvents((prev) =>
      [...prev, form].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    setForm({ title: "", description: "", date: "", location: "" });
  };

  const filteredEvents = events.filter(
    (ev) =>
      ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="event-container">
      <h2>Event Listing Page</h2>
      <input
        type="text"
        placeholder="Search event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleAddEvent}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="date"
          type="datetime-local"
          value={form.date}
          onChange={handleChange}
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <button type="submit">Add Event</button>
      </form>

      <h3>Event List</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((ev, index) => (
            <tr key={index}>
              <td>{ev.title}</td>
              <td>{ev.description}</td>
              <td>{new Date(ev.date).toLocaleString()}</td>
              <td>{ev.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task3EventList;
