import React ,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../admin/adminhome.css';

function Usersearch(){
    const location=useLocation();
    const [flights,setFlights]=useState([]);
    const query=(location.state.data);
    // console.log(query);
    // const query = new URLSearchParams(useLocation().search).get('q');

    useEffect(() => {
        // console.log(query);
        fetch(`http://localhost:8000/search?sl=${query.startinglocation}&el=${query.endinglocation}&dt=${query.startDate}`,{method:'GET'})
            .then((response) => response.json())
            .then((data) => setFlights(data));
    }, [query,location]);
    return (<div className='search-cards'>
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
        <button>Buy</button>
      </div>
    ))}
  </div>);
}


export default Usersearch;
