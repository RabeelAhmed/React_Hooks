import { useMemo, useState } from 'react';
import './UseMemo.css'; // Import the CSS file

export default function UseMemo() {
  const [mynum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(mynum + 1);
  };

  const countNumber = (num) => {
    console.log('countNumber: ', num);
    for (let i = 0; i <= 100000; i++) {}
    return num;
  };

  const CheckData = useMemo(() => {
    return countNumber(mynum);
  }, [mynum]);

  return (
    <div className="use-memo-container">
      <button onClick={getValue} className="counter-button">Counter</button>

      <p className="number-display">My new number: <strong>{CheckData}</strong></p>

      <button onClick={() => setShow(!show)} className="toggle-button">
        {show ? 'You clicked me' : 'Click me, please'}
      </button>
    </div>
  );
}
