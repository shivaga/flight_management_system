import React from 'react';
// import FlightCard from './flightcard';
import './adminhome.css'

const FlightList = ({ flights, updateFlight, deleteFlight }) => {
  const handleUpdate = (flight) => {
    const newStartingPoint = prompt('Enter new starting point', flight.startingPoint);
    const newEndingPoint = prompt('Enter new ending point', flight.endingPoint);
    const newSeats = prompt('Enter new seats', flight.seats);
    const newPrice = prompt('Enter new price', flight.price);
    const newTime = prompt('Enter new time', flight.time);
    const newduration = prompt('Enter new duration', flight.duration);
    const newdate = prompt('Enter new date', flight.date);
    if (newStartingPoint && newEndingPoint && newSeats && newPrice && newTime) {
      updateFlight({ ...flight, startingPoint: newStartingPoint, endingPoint: newEndingPoint, seats: newSeats, price: newPrice, time: newTime,duration:newduration,date:newdate});
    }
  };

  return (
    <div className='all-cards'>
      {flights.map(flight => (
        <div key={flight._id} className='card'>
        <div className="card-header">
                <h3>Flight ID: {flight.flightId}</h3>
            </div>
            <div className="card-body">
                <div className="flight-details">
                    <div>
                        <strong>From:</strong> {flight.startingPoint}
                    </div>
                    <div>
                        <strong>To:</strong> {flight.endingPoint}
                    </div>
                    <div>
                        <strong>Total Seats:</strong> {flight.seats}
                    </div>
                    <div>
                        <strong>Price:</strong> ${flight.price}
                    </div>
                    <div>
                        <strong>Flight Time:</strong> {flight.time}
                    </div>
                    <div>
                        <strong>Flight Duration:</strong> {flight.duration}
                    </div>
                    <div>
                        <strong>Flight Date:</strong> {flight.date}
                    </div>
                </div>
            </div>
          <button onClick={() => handleUpdate(flight)} >Update</button>
          <button onClick={() => deleteFlight(flight._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
