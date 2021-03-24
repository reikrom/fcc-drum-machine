import React, { useState } from 'react';
import DrumPad from './DrumPad';

const DrumMachine = (props) => {
  const [display, setDisplay] = useState('');
  const handleDisplay = (sample) => {
    setDisplay(sample);
  };
  return (
    <div id="drum-machine" className="drum-machine">
      <div id="display" className="display">
        {display}
      </div>
      <div className="drum-pad-container">
        {props.soundSamples.map((sample) => (
          <DrumPad
            handleDisplay={handleDisplay}
            src={sample.url}
            displayName={sample.name}
            targetKey={sample.targetKey}
            key={sample.targetKey}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
