import './App.css';
import React, { useEffect, useState } from 'react';
import Box from './Box';

function App() {
  const boxData = [
    { front: 2, back: 0, left: '', right: '', top: 4, bottom: 5 },
    { front: 0, back: 6, left: '', right: '', top: 7, bottom: 8 },
    { front: 2, back: 0, left: '', right: '', top: 5, bottom: 9 },
    { front: 5, back: 5, left: '', right: '', top: 0, bottom: 5 },
  ];
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Show text after the box animation completes
    }, 3500); // Wait for the box animation to finish

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <section className="app-container">
        {/* Conditional rendering to control the text visibility */}
        {showText && <div className="gradient-text">Happy New Year!</div>}

        {/* Rendering boxes */}
        {boxData.map((numbers, index) => (
          <div className="box-container" key={index}>
            <Box numbers={numbers} isFirstBox={index === 0} isLastBox={index === boxData.length - 1} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default App;
