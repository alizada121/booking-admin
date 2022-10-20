import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Rooms() {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    // fetch data
    axios.get("http://localhost:8000/rooms").then((res) => {
    setRooms(res.data);
    });
  }, []);

  return (
    <div>
      <table>
      <tr>
                <th>Room Name</th>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Availibility</th>
                
        </tr>
      {rooms &&
        rooms.map((room) => (
      
         <tr>
            <td>{room.room_name}</td>
            <td>{room.room_number}</td>
            <td>{room.room_type}</td>
            <td>Available</td>
            <Link to={`/room/${room.id}`}>
            <td>View</td>
            </Link>
         </tr>
        
        ))}
         </table>
    </div>
  );
}

export default Rooms;
