import { useEffect, useLayoutEffect, useState } from 'react';
import './LayoutEffect.css'; // Import the CSS file

export default function LayoutEffect() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) setNum(Math.random() * 1000);
  }, [num]);
  
//   useEffect(() => {
//     if (num === 0) setNum(Math.random() * 1000);
//   }, [num]);

  return (
    <div className="layout-effect-container">
      <p className="random-number">My new random number: <strong>{num.toFixed(2)}</strong></p>
      <button className="random-button" onClick={() => setNum(0)}>Generate Random Number</button>
    </div>
  );
}
