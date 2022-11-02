import React, { useState, useRef, useEffect } from "react";
import { Calendar, DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";
import { AddStartDate } from "../redux/cartSystem";
import { AddEndDate } from "../redux/cartSystem";
import { useSelector } from "react-redux";
import axios from "axios";

function DateRangeComp(props) {
  const { startDate } = useSelector((item) => item.hot);
  const { endDate } = useSelector((item) => item.hot);
  

  const [open, setOpen] = useState(false);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const dispatch = useDispatch();

  console.log(start)
  console.log(end)
  const [range, setRange] = useState([
    {
      startDate:new Date(),
      endDate:  addDays(new Date(),7),
      key: "selection",
    },
  ]);



  localStorage.setItem("start", JSON.stringify(startDate));
  localStorage.setItem("end", JSON.stringify(endDate));
  let dateObject1
  let dateObject2
  

  useEffect(() => {
    let start = JSON.parse(localStorage.getItem("start"));
    let end = JSON.parse(localStorage.getItem("end"));

    if (start) {
      setStart(start);
     var dateObject1 = new Date(start);
   

      
    }

    if (end) {
      setEnd(end);
      var dateObject2 = new Date(end);
      console.log(dateObject2)
    }

   
  }, []);


  const selectDate = () => {


    setOpen(false);
    dispatch(AddStartDate(`${format(range[0].startDate, "MM/dd/yyyy")}`));
    dispatch(AddEndDate(`${format(range[0].endDate, "MM/dd/yyyy")}`));

  };

 
  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate,"MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />
      {!open && (
        <DateRange
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="vertical"
          className="calendarElement"
        />
      )}

      <button onClick={selectDate}>Select this date</button>
    </div>
  );
}

export default DateRangeComp;
