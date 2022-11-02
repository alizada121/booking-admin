
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./components/Styles.css"
import Rooms from './components/Rooms';
import Home from './components/Home';
import Room from './components/Room';
import ReservedRooms from './components/ReservedRooms';
import AlertMessage from './components/AlertMessage';
import FilterBar from './components/FilterBar';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/rooms" element={<Rooms/>}></Route>
    <Route exact path='/room/:id'  element={<Room/>}/>
    <Route exact path='cart' element={<ReservedRooms/>}></Route>
    <Route exact path='/alert' element={<AlertMessage/>}></Route>
    <Route exact path='/filter' element={<FilterBar/>} ></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
