import { useEffect, useState } from 'react';
import './Counter.css';

const UseEffect = () => {
//   const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setScreenWidth(() => window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth)

    return () => {
        window.removeEventListener("resize", currentScreenWidth)
    }
  })



//   const countUpdate = (val) => {

//     if(val === "inc") return setCount(count + 1)
//     if(val === "dec" && count > 0) return setCount(count - 1)
//   };

//   useEffect(() => {
//     document.title = count
//   },[count])
  return (
  <>

  <div className="para">
    <h1>This is your screen width <span>{screenWidth}</span></h1>
  </div>

    {/* // <div className="counter-container">
    //   <h2>Counter: {count}</h2>
    //   <div className="buttons-container">
    //     <button className="increment-button" onClick={()=> countUpdate("inc")}>
    //       Increment
    //     </button>
    //     <button className="decrement-button" onClick={()=> countUpdate("dec")}>
    //       Decrement
    //     </button>
    //   </div>
    // </div> */}
  </>
  );
};

export default UseEffect;
