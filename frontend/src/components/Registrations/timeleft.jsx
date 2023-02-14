import React, { useState, useEffect } from 'react';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetTime = new Date(2023, 2, 3, 12, 0, 0, 0).getTime();
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;
      setTimeLeft(timeDifference);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div style={{backgroundColor: "lightblue", padding:20,margin:40}}>
      <h3>Our event starts in:</h3>
      <h4>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
      </h4>
    </div>
  );
};

export default TimeLeft;
