import React, { useState, useEffect } from 'react';

function Alarm() {
  const [alarmTime, setAlarmTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (alarmTime) {
        const now = new Date();
        const currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
        if (currentTime === alarmTime) {
          setMessage('Alarm ringing!');
          setAlarmTime(''); // Reset alarm after it rings
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmTime]);

  return (
    <div className="center">
      <h2>Set Alarm</h2>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => {
          setAlarmTime(e.target.value);
          setMessage('');
        }}
      />
      <div className="message">{message}</div>
    </div>
  );
}

export default Alarm;
