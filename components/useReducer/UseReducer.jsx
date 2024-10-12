// import React from 'react'
import { useReducer } from 'react';
import './UseReducer.css';
import reducer from './Reducer';

export default function UseReducer() {

    const initialValue = 0;
    
   const [count, dispatch] = useReducer( reducer,initialValue)
  return (
    <div>
         <div className="counter-container">
       <h2>Counter: {count}</h2>
       <div className="buttons-container">
         <button className="increment-button" onClick={() => dispatch({type: "INC"})}>
           Increment
         </button>
         <button className="decrement-button" onClick={() => dispatch({type: "DEC"})}>
           Decrement
         </button>
       </div>
     </div>
    </div>
  )
}
