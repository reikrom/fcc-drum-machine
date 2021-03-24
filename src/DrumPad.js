import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

const DrumPad = (props) => {
  const drumRef = useRef(null);
  const [pressed, setPressed] = useState(false);

  const pressPad = () => {
    setPressed(true);
    playSound();
    handleDisplay();
    setTimeout(() => {
      setPressed(false);
    }, 100);
  };

  const handleDisplay = () => {
    props.handleDisplay(props.displayName);
  };

  const playSound = () => {
    drumRef.current.currentTime = 0;
    drumRef.current.play();
  };

  const handleClick = () => {
    pressPad();
  };

  const downHandler = ({ key }) => {
    if (key.toLowerCase() === props.targetKey.toLowerCase()) {
      pressPad();
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
      <button
        onClick={handleClick}
        key={props.targetKey}
        className={cn('drum-pad', { pressedIn: pressed })}
      >
        <div
          className={cn('drum-pad__content', {
            pressedIn: pressed,
          })}
        >
          <div className={cn('key-shadow-fix', { pressedIn: pressed })} />
          <div
            className={cn('drum-pad__text', {
              pressedIn: pressed,
            })}
          >
            {props.targetKey}
          </div>
          <audio ref={drumRef} src={props.src} id={props.targetKey}></audio>
        </div>
      </button>
    </>
  );
};

export default DrumPad;
