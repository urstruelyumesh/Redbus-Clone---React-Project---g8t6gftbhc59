import React, { useEffect, useState } from 'react';
import { Link } from 'react';
import SeatSelection from './SeatSelection';

export default function SearchResult(props) {
  const [sortBy, setSortBy] = useState('price-low-to-high');
  const [buses, setBuses] = useState([]);
  const[viewseat,setviewseat]=useState(false);

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
  const renderseats=()=>{
    if(!viewseat)
    setviewseat(true)
    else
    setviewseat(false)
    
  }
 
  return (
    <div className="container">
      <div id='sort-wrap' className="sort-btn-wrap displaybus">
  
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
        <div id={bus.busName} className="displaybus"  >
          <table key={bus.name} className="table table-responsive">
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
              <tr><td colSpan="4"><button onClick={renderseats} >VIEW SEATS</button></td></tr>
            </tbody>
            
          </table>
          {viewseat && <SeatSelection busname={bus} viewseat={viewseat} setviewseat={setviewseat} searched={props.searched} setsearched={props.setsearched}/>} 
        </div>
      ))}
    
    </div>
  );
}

