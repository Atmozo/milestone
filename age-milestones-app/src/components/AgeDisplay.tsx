import React, { useState, useEffect } from 'react';

interface AgeProps {
  birthDate: Date;
}

const AgeDisplay: React.FC<AgeProps> = ({ birthDate }) => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - birthDate.getTime();
      
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);
      const weeks = Math.floor(days / 7);

      setAge({ years, months, weeks, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className="age-display">
      <h2>YOUR AGE</h2>
      <p>Years: {age.years}</p>
      <p>Months: {age.months}</p>
      <p>Weeks: {age.weeks}</p>
      <p>Days: {age.days}</p>
      <p>Hours: {age.hours}</p>
      <p>Minutes: {age.minutes}</p>
      <p>Seconds: {age.seconds}</p>
    </div>
  );
};

export default AgeDisplay;
