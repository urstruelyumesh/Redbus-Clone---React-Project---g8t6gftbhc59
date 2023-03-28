import React from 'react'
import { useState, useEffect } from 'react';




function BusListPage() {
  const [busData, setBusData] = useState([]);
  const [sortBy, setSortBy] = useState('price-low-to-high');
  useEffect(() => {
    async function fetchBusData() {
      const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses');
      const data = await response.json();
      console.log(data);
      setBusData(data);
    }
    fetchBusData();
  }, []);
  const getSortedBuses = () => {
    switch (sortBy) {
      case 'sortbyprice':
        return [...busData].sort((a, b) => a.ticketPrice - b.ticketPrice);
      case 'sortbydeparture':
        return [...busData].sort((a, b) =>
          a.departureTime.localeCompare(b.departureTime)
        );
      case 'sortbyarrival':
        return [...busData].sort((a, b) =>
          a.arrivalTime.localeCompare(b.arrivalTime)
        );
      default:
        return busData;
    }
  };
  const sortedBuses=getSortedBuses();


  return (
    <div className="container">
    <h3>Available Buses</h3>
    
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
                <th>Busname</th>
                <th>Source</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Arrival</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >{bus.busName}</td>
                <td>{bus.source}</td>
                <td>{bus.departureTime}</td>
                <td>{bus.destination}</td>
                <td>{bus.arrivalTime}</td>
                <td>{bus.ticketPrice}/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      ))}
    </div>
  );
}
export default BusListPage;
