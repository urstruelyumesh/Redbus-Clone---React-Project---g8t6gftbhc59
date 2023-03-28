import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchResult(props) {
  const [sortBy, setSortBy] = useState('price-low-to-high');
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const handleSearch = async (source, destination) => {
      const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`;
      const response = await fetch(url);
      const data = await response.json();
      setBuses(data);
    };
    handleSearch(props.source, props.destination);
  }, [props.source, props.destination]);

  const getSortedBuses = () => {
    switch (sortBy) {
      case 'sortbyprice':
        return [...buses].sort((a, b) => a.ticketPrice - b.ticketPrice);
      case 'sortbydeparture':
        return [...buses].sort((a, b) =>
          a.departureTime.localeCompare(b.departureTime)
        );
      case 'sortbyarrival':
        return [...buses].sort((a, b) =>
          a.arrivalTime.localeCompare(b.arrivalTime)
        );
      default:
        return buses;
    }
  };

  const sortedBuses = getSortedBuses();

  return (
    <div className="container">
      <div className="sort-btn-wrap displaybus">
      <p>SORT BY:</p>
        <button
          onClick={() => setSortBy('sortbydeparture')}
          className='sortbtn'
        >
          Departure
        </button>
        <button
          onClick={() => setSortBy('sortbyarrival')}
          className='sortbtn'>
          Arrival
        </button>
        <button
          onClick={() => setSortBy('sortbyprice')}
          className='sortbtn'
        >
          Price
        </button>
      </div>
      {sortedBuses.map((bus) => (
        <div key={bus.name} className="displaybus"  >
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Departure</th>
                <th scope="col">Arrival</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bus.busName}</td>
                <td>{bus.departureTime}</td>
                <td>{bus.arrivalTime}</td>
                <td>{bus.ticketPrice}/-</td>
              </tr>
            <tr><td colSpan="4"><Link to='/SeatSelection'><button id='book' >VIEW SEATS</button></Link></td></tr>
            </tbody>

          </table>
        </div>
      ))}
    </div>
     );
}

