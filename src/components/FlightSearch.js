import React, { useState } from 'react';
import './FlightSearch.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ColorToggleButton from './TripToggle';
import SearchIcon from '@mui/icons-material/Search';

const airportList = [
  { name: "Singapore Changi", code: "SIN" },
  { name: "Los Angeles International", code: "LAX" },
  { name: "London Heathrow", code: "LHR" },
  { name: "Tokyo Haneda", code: "HND" },
  { name: "Tokyo Narita", code: "NRT" },
  { name: "Paris Charles de Gaulle", code: "CDG" }
];

function FlightSearch() {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(() => new Date(new Date().setDate(new Date().getDate() + 7)));
  const [passengers, setPassengers] = useState(1);

  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState("Tokyo Narita (NRT)");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const handleAutocomplete = (value, type) => {
    if (type === 'from') {
      setFromInput(value);
      if (value.trim() === '') {
        setFromSuggestions([]);
        return;
      }
      const matches = airportList.filter((airport) =>
        `${airport.name} (${airport.code})`.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(matches);
    } else {
      setToInput(value);
      if (value.trim() === '') {
        setToSuggestions([]);
        return;
      }
      const matches = airportList.filter((airport) =>
        `${airport.name} (${airport.code})`.toLowerCase().includes(value.toLowerCase())
      );
      setToSuggestions(matches);
    }
  };

  const handleSelect = (airport, type) => {
    const label = `${airport.name} (${airport.code})`;
    if (type === 'from') {
      setFromInput(label);
      setFromSuggestions([]);
    } else {
      setToInput(label);
      setToSuggestions([]);
    }
  };

  

  return (
    <div className='flight-search-wrapper'>

    <ColorToggleButton />
      <div className='flight-search-container'>
        
        {/* FROM Field */}
        <div className='flight-search-header autocomplete-wrapper'>
          <label htmlFor="departure-city">FROM</label>
          <input
            type="text"
            id="departure-city"
            placeholder="Flying from?"
            className="flight-search-input"
            value={fromInput}
            onChange={(e) => handleAutocomplete(e.target.value, 'from')}
            autoComplete="off"
          />
          {fromSuggestions.length > 0 && (
            <ul className="autocomplete-dropdown">
              {fromSuggestions.map((airport, idx) => (
                <li
                  key={idx}
                  className="autocomplete-item"
                  onClick={() => handleSelect(airport, 'from')}
                >
                  {airport.name} ({airport.code})
                </li>
              ))}
            </ul>
          )}
        </div>

      

        {/* TO Field */}
        <div className='flight-search-header autocomplete-wrapper'>
          <label htmlFor="arrival-city">TO</label>
          <input
            type="text"
            id="arrival-city"
            placeholder="Your Destination"
            className="flight-search-input"
            value={toInput}
            onChange={(e) => handleAutocomplete(e.target.value, 'to')}
            autoComplete="off"
          />
          {toSuggestions.length > 0 && (
            <ul className="autocomplete-dropdown">
              {toSuggestions.map((airport, idx) => (
                <li
                  key={idx}
                  className="autocomplete-item"
                  onClick={() => handleSelect(airport, 'to')}
                >
                  {airport.name} ({airport.code})
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Dates & Passengers */}
        <div className='flight-search-header'>
          <label htmlFor="departure-date">DEPARTURE DATE</label>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            placeholderText="Depart Date"
            className="flight-search-input"
          />
        </div>

        <div className='flight-search-header'>
          <label htmlFor="return-date">RETURN DATE</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            placeholderText="Return Date"
            className="flight-search-input"
          />
        </div>

        <div className='flight-search-header'>
          <label htmlFor="passengers">PAX</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="flight-search-input"
            min="1"
          />
        </div>

        <div className='flight-search-header'>
          <label htmlFor="class">CLASS</label>
          <select id="class" className="flight-search-class-input">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>

        <button className="flight-search-button">
          <SearchIcon /> 
        </button>

      </div>
    </div>

  );
}

export default FlightSearch;
