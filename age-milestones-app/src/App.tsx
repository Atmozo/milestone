import React, { useState } from 'react';
import AgeDisplay from './components/AgeDisplay';
import Milestones from './components/Milestone';
import './App.css';
import LiveMusicVisualizer from './components/LiveMusicVisualize';

const App: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(new Date(e.target.value));
  };

  return (
    <div className="app">
      <h1>Age Milestones App</h1>
      <div className="input-section">
        <label>Date of Birth:</label>
        <input type="datetime-local" onChange={handleBirthDateChange} />
      </div>

      {birthDate && (
        <>
          <AgeDisplay birthDate={birthDate} />
          <Milestones birthDate={birthDate} />
          <LiveMusicVisualizer/>
        </>
      )}
    </div>
  );
};

export default App;
