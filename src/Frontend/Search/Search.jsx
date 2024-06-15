import React, { useEffect, useState } from 'react'

// imported icons ======>
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { RiAccountPinCircleLine } from "react-icons/ri";
import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-datepicker';
import { RxCalendar } from "react-icons/rx";

import { useNavigate } from 'react-router-dom';


//import aos =========>>>
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { query } from 'express';


const Search = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);
    const today = new Date();
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 2);
    nextDay=nextDay.toISOString().split('T')[0];
    //useEffect to set animation duration 
    useEffect(() => {
        Aos.init({ duration: 2000 });
        try {
            fetch('http://localhost:8000/flights')
            .then(response => response.json())
            .then(data => {setFlights(data)});
        } catch (err) {
            console.log(err);
        }
    }, [])
    //  document.getElementById('date-icon').addEventListener('click', function() {
    //     document.getElementById('hidden-date-input').click();
    // });
    // const [startinglocation, setStartinglocation] = useState(null);
    // const [endinglocation, setEndinglocation] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [query, setQuery] = useState({ startinglocation: null, endinglocation: null, startDate: null });
    // const [isdatepickeropen,setIsdatepickeropen]=useState(false);

    // const handleIconClick = () => {
    //     document.getElementById('date-picker').click();
    // };
    const handleDateChange = (e) => {
        setStartDate(e.target.value)
        setQuery(query => ({ ...query, startDate:(e.target.value) }));
        // setIsdatepickeropen(false);
    };
    function handlestartingpoint(e) {
        // setStartinglocation(e.target.value);
        setQuery(query => ({ ...query, startinglocation: e.target.value }));

    }
    function handlendingpoint(e) {
        // setEndinglocation(e.target.value);
        setQuery(query => ({ ...query, endinglocation: e.target.value }));
    }
    
    function handleSearch() {
        navigate('/search', { state: { data: query } });

    }


    return (
        <div className='search container section'>
            <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

                <div className="btns flex">

                    <div className="singleBtn">
                        <span>Economy</span>
                    </div>

                    <div className="singleBtn">
                        <span>Business class</span>
                    </div>


                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>

                </div>

                <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
                    {/* single input */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className="texts">
                            <h4>From</h4>
                            {/* <input type='text' placeholder='Jaipur' value={startinglocation} onChange={handlestartingpoint} /> */}
                            <select id="departureAirport" onChange={handlestartingpoint}>
                                <option value="">Select Airport</option>
                                {flights.map((airport, index) => (
                                    <option key={index} value={airport.startingPoint}>{airport.startingPoint}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* single input */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className="texts">
                            <h4>To</h4>
                            {/* <input type='text' placeholder='Guwahati' value={endinglocation} onChange={handlendingpoint} /> */}
                            <select id="arrivalAirport" onChange={handlendingpoint}>
                                <option value="">Select Airport</option>
                                {flights.map((airport, index) => (
                                    <option key={index} value={airport.endingPoint}>{airport.endingPoint}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    {/* single input */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' id="date-icon"  />
                        </div>
                        <div className="texts">
                            <h4>Departure</h4>
                            <input type="date" placeholder="Add date"  value={startDate} id='date-picker' onChange={handleDateChange} min={nextDay}/>
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Travellers</h4>
                            <select id="traveller-type" onChange={handlendingpoint}>
                                <option value="">Select Airport</option>
                                
                            </select>
                        </div>
                    </div>

                    <button className="btn btnBlock flex" onClick={() => handleSearch()}>Search Flight</button>

                </div>

            </div>

        </div>
    )
}

export default Search