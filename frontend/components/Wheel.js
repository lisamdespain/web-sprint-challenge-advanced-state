import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../state/action-creators"

export function Wheel(props) {
  const { moveClockwise, moveCounterClockwise, wheel } = props;
  return (
    
    <div id="wrapper">
      <div id="wheel">
        {wheel.grid.map((circle, idx) => 
        <div key={idx} className={circle ? 'cog active' : 'cog'} style={{ "--i": idx }}>{circle}</div>)}
     
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
export default connect(st => st, actions)(Wheel);