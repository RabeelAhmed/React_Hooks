import { useEffect, useRef, useState } from 'react';
import './UseRef.css'; // Import the CSS file

export default function UseRef() {
  const [userInput, setUserInput] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="use-ref-container">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="input-box"
        placeholder="Type something..."
      />
      <p className="render-count">
        The number of times the component has rendered: <strong>{count.current}</strong>
      </p>
    </div>
  );
}
