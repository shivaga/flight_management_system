import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./adminhome.css";
import FlightList from './flightlist';
import FlightForm from './flightform';
import axios from 'axios';
// import styles from './adminhome.module.css';

// const img_prop = {
//     maxWidth: '400px',
//     textAlign: 'center'
// }
function Adminhome() {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        try{fetch('http://localhost:8000/flights')
            .then(response => response.json())
            .then(data => setFlights(data));
    }catch(err){
        console.log(err);
    }
    }, []);

    const addFlight = (flight) => {
        fetch('http://localhost:8000/flights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flight),
        })
            .then(response => response.json())
            .then(newFlight => setFlights([...flights, newFlight]));
    };

    const updateFlight = (updatedFlight) => {
        fetch(`http://localhost:8000/flights/${updatedFlight._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFlight),
        })
            .then(response => response.json())
            .then(data => setFlights(flights.map(flight => flight._id === data._id ? data : flight)));
    };

    const deleteFlight = (id) => {
        fetch(`http://localhost:8000/flights/${id}`, {
            method: 'DELETE',
        })
            .then(() => setFlights(flights.filter(flight => flight._id !== id)));
    };
    function handlelogoutadmin() {
        localStorage.removeItem('admin_email');
        localStorage.removeItem('admin_password');
        navigate('/');
    }
    useEffect(() => {
        async function checkadminlogin(){
            const email = localStorage.getItem('admin_email');
            const password=localStorage.getItem('admin_password');
            if(email===null && password===null){
                navigate("/admin_login");
            }
            else{
                try {
                    await axios.post("http://localhost:8000/admin_login", {
                        email, password
                    })
                    .then(res => {
                        if (res.data === "notexist") {
                            navigate("/admin_login");
                        }
                    })
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        checkadminlogin();
    }, [navigate]);
    return (
        <div>
            <div className="adminhome">
                <h1>Flight Scheduling</h1>
                <FlightForm addFlight={addFlight} />
                <FlightList flights={flights} updateFlight={updateFlight} deleteFlight={deleteFlight} />
                <button onClick={() => handlelogoutadmin()}>Logout</button>
            </div>
        </div>
    )
}

export default Adminhome;