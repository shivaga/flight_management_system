import React, { useState } from 'react';

const FlightForm = ({ addFlight }) => {
  const [flight, setFlight] = useState({
    flightId: '',
    startingPoint: '',
    endingPoint: '',
    seats: '',
    price: '',
    time: '',
    duration:'',
    date:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlight(flight);
    setFlight({
      flightId: '',
      startingPoint: '',
      endingPoint: '',
      seats: '',
      price: '',
      time: '',
      duration:'',
      date:'', 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="flightId"
        placeholder="Flight ID"
        value={flight.flightId}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="startingPoint"
        placeholder="Starting Point"
        value={flight.startingPoint}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="endingPoint"
        placeholder="Ending Point"
        value={flight.endingPoint}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="seats"
        placeholder="Seats"
        value={flight.seats}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={flight.price}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        placeholder="Time"
        value={flight.time}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={flight.duration}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={flight.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Flight</button>
    </form>
  );
};

export default FlightForm;
