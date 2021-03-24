import React from 'react';

const Sheet = ({ sheet }) => {
  return (
    <div className="sheet__wrapper">
      {sheet.map((bar, i) => (
        <div key={i}>
          {bar[0] ? <div className="note--active" /> : <div className="note" />}
          {bar[1] ? <div className="note--active" /> : <div className="note" />}
          {bar[2] ? <div className="note--active" /> : <div className="note" />}
        </div>
      ))}
    </div>
  );
};

export default Sheet;
