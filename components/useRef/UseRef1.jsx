import { useRef } from 'react';
import './UseRef1.css'; // Import the CSS file

export default function UseRef1() {
  const inputRef = useRef(0);

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#82E0AA'; // Change background color on focus
  };

  return (
    <div className="use-ref1-container">
      <input type="text" ref={inputRef} className="input-box" placeholder="Enter text" />
      <br />
      <button onClick={changeBorder} className="submit-button">Submit</button>
    </div>
  );
}
