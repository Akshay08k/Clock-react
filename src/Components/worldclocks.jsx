import React, { useState, useEffect } from 'react';

const timeZones = [
  { name: "New York", offset: -4 },
  { name: "London", offset: 1 },
  { name: "Paris", offset: 2 },
  { name: "Tokyo", offset: 9 },
  { name: "Sydney", offset: 10 }
];

function WorldClock() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 6000;
      const newTimes = timeZones.reduce((acc, tz) => {
        const cityTime = new Date(utcTime + 3600000 * tz.offset);
        acc[tz.name] = cityTime.toLocaleTimeString();
        return acc;
      }, {});
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="center">
      <h2>World Clock</h2>
      {timeZones.map(tz => (
        <div key={tz.name}>
          <strong>{tz.name}</strong>: {times[tz.name]}
        </div>
      ))}
    </div>
  );
}

export default WorldClock;
