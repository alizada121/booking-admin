import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"


function ReservedRooms() {
    const { cart}=useSelector((item)=>item.hot)
    localStorage.setItem('reserved', JSON.stringify(cart));
    const [data,setData]=useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('reserved'));
        if (data) {
         setData(data);
        }
      }, []);


  return (
    <div>
        {data?.map((item)=>(
            <div>
                {item.room_name}
            </div>
        ))}
    </div>
  )
}

export default ReservedRooms