import './App.css';
import DrumMachine from './DrumMachine';
import { generateSheet, samples } from './helpers';
import { useEffect, useState } from 'react';
import Sheet from './Sheet';

function App() {
  const [sheet, setSheet] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(null);

  const bars = 42;

  useEffect(() => {
    const tempSheet = generateSheet(bars);
    let tempScore = 0;

    tempSheet.forEach((arr) => arr.includes(1) && tempScore++);

    setSheet(tempSheet);
    setTopScore(tempScore);
  }, []);

  useEffect(() => {
    let interval = null;

    const sheetTick = () => setSheet((state) => state.slice(1));

    if (seconds === bars + 10) {
      alert(`game over. Your score ${Math.floor((score / topScore) * 100)}%`);
      handleStop();
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        sheetTick();
        setIsPressed(false);
      }, 300);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, score, topScore]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };
  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
    setScore(0);
    const tempSheet = generateSheet(bars);
    let tempScore = 0;

    tempSheet.forEach((arr) => arr.includes(1) && tempScore++);
    setSheet(tempSheet);
    setTopScore(tempScore);
  };

  const downHandler = ({ key }) => {
    // find the active note
    switch (sheet[0].indexOf(1)) {
      case 0:
        if (!isPressed && isActive) {
          switch (key.toLowerCase()) {
            case 'q':
            case 'w':
            case 'e':
              setScore((state) => state + 1);
              setIsPressed(true);
              break;
            default:
              setIsPressed(true);
              break;
          }
        }
        break;
      case 1:
        if (!isPressed && isActive) {
          switch (key.toLowerCase()) {
            case 'a':
            case 's':
            case 'd':
              setScore((state) => state + 1);
              setIsPressed(true);
              break;
            default:
              setIsPressed(true);
              break;
          }
        }
        break;
      case 2:
        if (!isPressed && isActive) {
          switch (key.toLowerCase()) {
            case 'z':
            case 'x':
            case 'c':
              setScore((state) => state + 1);
              setIsPressed(true);
              break;
            default:
              setIsPressed(true);
              break;
          }
        }
        break;
      default:
        setIsPressed(true);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });
  return (
    <>
      <DrumMachine soundSamples={samples} />
      <div className="score">
        Score: {score}/{topScore}
      </div>
      <div className="relativeWrapper">
        <div className="sheet__keys">
          <span>Q W E</span>A S D<span></span>Z X C<span></span>
        </div>
        {sheet && <Sheet sheet={sheet} />}
      </div>
      <div className="controls">
        <button className="button" onClick={handleStop}>
          restart
        </button>
        <button className="button button--primary" onClick={handleStartPause}>
          {isActive ? `Pause` : `Start`}
        </button>
      </div>
    </>
  );
}

export default App;
