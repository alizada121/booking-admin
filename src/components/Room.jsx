import React, { useEffect, useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";
import Rooms from "./Rooms";
import DateRangeComp from "./DateRangeComp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddCard } from "../redux/cartSystem";

function Room() {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const buttonRef=useRef();



 
 

  useEffect(() => {
    axios.get(`http://localhost:8000/rooms`).then((res) => {
      setRoom(res.data);
    });
  }, []);

  const bookClick=()=>{
   

    
      // console.log("salam");
      navigate('../cart', { replace: true })
    


  }


  return (
    <div>
      {room
        .filter((r) => r.id == id)
        .map((item) => (
          <div>
            <img src={item.image} style={{width:"500px",height:"300px"}}></img> 
            <div>{item.room_name}</div>
            <div>{item.id}</div>
            <button ref={buttonRef} onClick={()=>{
              bookClick()
              // {start!=[]?dispatch(AddCard(item)):console.log("olmadi");} 
              dispatch(AddCard(item)) 
            }}>book</button>
          </div>
        ))}

      <DateRangeComp />

      <div onClick={() => navigate('../cart', { replace: true })}>CART</div>

    </div>
  );
}

export default Room;
