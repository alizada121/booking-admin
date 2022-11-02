import React, { useState, useEffect } from "react";
import axios from "axios";
import { AddRoomType } from "../redux/filterList";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import { Slider } from '@mui/material';
import {AddMin} from "../redux/filterList"
import {AddMax} from "../redux/filterList"

function FilterBar() {
  const [rooms, setRooms] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [filterStar, setFilterStar] = useState();
  const dispatch = useDispatch();
  const [value, setValue] =  React.useState([2,10]);
  
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

 

  useEffect(() => {
    // fetch data
    axios.get("http://localhost:8000/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);

  useEffect(() => {
    let array1 = [];
    for (let i = 0; i < rooms.length; i++) {
      array1.push(rooms[i].room_type);
      setTypes([...new Set(array1)]);
    }
  }, [rooms]);

  const arr = [];
  arr.push(selectedType);
  const handleChange = (e) => {
   
    console.log(arr);
    const value = e.target.value;
    setSelectedType(value);
    localStorage.setItem("selectedFilter", JSON.stringify(arr));

   
  };

  const reduxPush=()=>{

    dispatch(AddMin(`${value[0]}`));
    dispatch(AddMax(`${value[1]}`));
    dispatch(AddRoomType(arr));
  }

  return (
    <div>
      <div className="type">
        <select onChange={handleChange}>
          {types.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="price">
        <div
          style={{
            margin: "auto",
            display: "block",
            width: "fit-content",
          }}
        >
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          <Slider
            value={value}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
            max="1500"
          />
          Your range of Price is between {value[0]}  and {value[1]}
          <button onClick={reduxPush}>FILTER</button>
          
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
