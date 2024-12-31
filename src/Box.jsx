import React from 'react';

function Box({ numbers, isFirstBox, isLastBox }) {
  return (
    <div className="box">
      <div className="face front">
        <div className="number">{numbers.front}</div>
      </div>
      <div className="face back">
        <div className="number">{numbers.back}</div>
      </div>
      <div className={`face left ${!isFirstBox ? 'hidden' : ''}`}>
        <div className="number">{numbers.left}</div>
      </div>
      <div className={`face right ${!isLastBox ? 'hidden' : ''}`}>
        <div className="number">{numbers.right}</div>
      </div>
      <div className="face top">
        <div className="number">{numbers.top}</div>
      </div>
      <div className="face bottom">
        <div className="number">{numbers.bottom}</div>
      </div>
    </div>
  );
}

export default Box;
