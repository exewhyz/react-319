import { useState, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef();

  const [disabled, setDisabled] = useState(false);

  const handleStart = () => {
    setDisabled(true);
    timerIdRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(timerIdRef.current);
    setDisabled(false);
  };
  const handleReset = () => {
    clearInterval(timerIdRef.current);
    setTime(0);
    setDisabled(false);
  };
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time: {time}s</p>
      <div>
        <button disabled={disabled} onClick={handleStart}>
          Start
        </button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
