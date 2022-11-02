import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import { useSelector } from "react-redux";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [validation,setValidation]=useState(false);
  const [item,setItem]=useState([])
  const [item2,setItem2]=useState([])
  const { roomType } = useSelector((item) => item.filter);
  const {min}=useSelector((item)=>item.filter)
  const {max}=useSelector((item)=>item.filter)
  const [filter,setFilter]=useState()


  useEffect(()=>{
      if(roomType.length>0){
        setFilter(roomType?.slice(-1)[0][0])
      }
  },[roomType])

  useEffect(() => {
    // fetch data
    axios.get("http://localhost:8000/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);

  useEffect(() => {
    let maxPrice=(max.slice(-1)[0])
    let minPrice=(min.slice(-1)[0])
    setItem(rooms.filter((e) => e.room_type== filter && minPrice<e.price && e.price<maxPrice ));
    if(item.length==0){
      setValidation(true)
    }else{
      setValidation(false)
    }
  },[filter||min||max]);

  useEffect(()=>{
    let maxPrice=(max.slice(-1)[0])
    let minPrice=(min.slice(-1)[0])
    
    setItem(rooms.filter((e)=>minPrice<e.price && e.price<maxPrice))
   
    console.log(item2);

  },[min||max])
  return (
    <div>
      <FilterBar/>
      {validation?
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

      :
      <table>
      <tr>
                <th>Room Name</th>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Availibility</th>
                
        </tr>
      {item &&
        item.map((room) => (
      
         <tr>
            <td>{room.room_name}</td>
            <td>{room.room_number}</td>
            <td>{room.room_type}</td>
            <td>{room.price}</td>
            <td>Available</td>
            <Link to={`/room/${room.id}`}>
            <td>View</td>
            </Link>
         </tr>
        
        ))}
         </table>

      }
      
    


     
    

         
    </div>
  );
}

export default Rooms;
