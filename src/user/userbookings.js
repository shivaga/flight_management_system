import React,{useState,useEffect} from 'react';

import '../admin/adminhome.css';

function Userbookings(){
    const [flights, setFlights] = useState([]);
    const query = localStorage.getItem('email');
    // console.log(query);
    // const query = new URLSearchParams(useLocation().search).get('q');

    useEffect(() => {
        // console.log(query);
        fetch(`http://localhost:8000/bookings?email=${query}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => setFlights(data));
    }, [query]);
    return (flights.length === 0 ? <div className="no-flights-container">
        <h2>No Bookings Available</h2>
        <p>You have not booked any flights yet. Start exploring flights and make your first booking!</p>
    </div> :
        <div className='search-cards'>
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
                </div>
            ))}
        </div>);

}

export default Userbookings;