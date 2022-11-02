import React from 'react'
import {useLocation} from 'react-router-dom';
function AlertMessage(props) {
    const location = useLocation();
  return (
    <div>
      <div>{location.state.alert}</div>
    </div>
  )
}

export default AlertMessage