import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../viewBookingsPage/Bookings.css"
import { Button } from '@chakra-ui/react'

const Bookings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("https://octa-bac.onrender.com/bookings")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://octa-bac.onrender.com/bookings/${id}`)
            .then(() => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <>
            <h1 id="booking-h1">ALL BOOKINGS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Wheels</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Model</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.firstName}</td>
                            <td>{booking.lastName}</td>
                            <td>{booking.wheels}</td>
                            <td>{booking.vehicleType}</td>
                            <td>{booking.vehicleModel}</td>
                            {/* <td>{(booking.startDate)}</td> */}
                            <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                            {/* <td>{(booking.endDate)}</td> */}
                            <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                            <td>
                                <Button colorScheme='blue' onClick={() => handleDelete(booking.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='homePageLink'>
            <Link to="/">
                <p style={{ color: "red" }}>Back To Home Page</p>
            </Link>
            </div>
        </>
    );
}

export default Bookings;
