import React, { useState } from 'react';
import '../styles/SeatSelection.css';
import { useContext } from 'react';
import { dataContext } from './App';
import Navbar from './Navbar';


const SeatSelection = (props) => {
    const localContext=useContext(dataContext);
    const {setsearched}=localContext;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeatSelection = (seatNumber) => {
        const isSelected = selectedSeats.includes(seatNumber);
        if (isSelected) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const renderSeat = (seatNumber) => {
        const isSeatSelected = selectedSeats.includes(seatNumber);
        const seatClass = isSeatSelected ? 'selected' : 'unselected';
        return (
            <div
                key={seatNumber}
                className={`seat ${seatClass}`}
                onClick={() => handleSeatSelection(seatNumber)}
            >
                {seatNumber}
            </div>
        );
    };
    let seatNumber=0;
    const renderSeatRow = (rowNumber, seatsPerRow) => {
        const seatRow = [];
        for (let i = 1; i <= seatsPerRow; i++) {
           seatNumber++;
            seatRow.push(renderSeat(seatNumber));
        }
        return (
            <div key={rowNumber} className="seat-row">
                {seatRow}
            </div>
        );
    };

    const renderSeatMap = (numRows, seatsPerRow) => {
        const seatMap = [];
        for (let i = 1; i <= numRows; i++) {
            seatMap.push(renderSeatRow(i, seatsPerRow));
        }
        return seatMap;
    };

    const handleConfirmTicket = () => {
        if (selectedSeats.length > 0)
            setIsModalOpen(true);
        else
            alert("Please, Select At Least 1 Seat to Proceed")
        console.log(isModalOpen)
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    
        setSelectedSeats([]);
        props.setviewseat(false);
       setsearched(false);
    };



    return (
        
        <div className="seat-selection">
            <h2>Select a Seat</h2>
            <div className="seat-map" key={props.busname}>{renderSeatMap(4, 5)}</div>
             <button className='btn btn-success my-2' onClick={handleConfirmTicket}>Confirm Ticket</button>

            {/* modal */}
            {isModalOpen && <div className="container mx-5 my-3">
            <div className="modala">
                <h2 className='my-2 text-center'>Payment Details </h2>
                {selectedSeats.length > 0 ? (<div>
                {console.log(props.busname)}
                    <h4>Booking Details</h4>
                    <p>Seats Booked: {selectedSeats.join(', ')}</p>
                   <p>Bus:{props.busname.busName}</p>
                   <p>From:{props.busname.source}</p>
                   <p>Departure:{props.busname.departureTime}</p>
                   <p>To:{props.busname.destination}</p>
                   <p>Arrival:{props.busname.arrivalTime}</p>
                   <p>Total Fare:{props.busname.ticketPrice*selectedSeats.length} Rs</p>
                    <button className='btn btn-primary my-2'>PAY </button>
                    {console.log(props.busname)}
                    <button className="btn btn-danger my-2" onClick={handleModalClose}>
                    Cancel
                </button>
                </div>

                ) : (
                    <p>No seats selected</p>
                )}
                
            </div>
            </div>
            }
        </div>
    );
};

export default SeatSelection;
