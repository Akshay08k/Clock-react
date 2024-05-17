import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="center">
      <h2>Current Time</h2>
      <div>{time}</div>
    </div>
  );
}

export default CurrentTime;
