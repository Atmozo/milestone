import React, { useState } from 'react';
import { addDays, addWeeks } from 'date-fns';
import { TextField, Button, Grid } from '@mui/material';
import Milestone from '../components/Milestone';

const Home: React.FC = () => {
  const [birthday, setBirthday] = useState<string>('');
  const [milestones, setMilestones] = useState<{ label: string, date: Date }[]>([]);

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const calculateMilestones = () => {
    const birthdayDate = new Date(birthday);
    const thousandDaysOld = addDays(birthdayDate, 1000);
    const twoThousandWeeksOld = addWeeks(birthdayDate, 2000);

    setMilestones([
      { label: '1,000 days old', date: thousandDaysOld },
      { label: '2,000 weeks old', date: twoThousandWeeksOld },
    ]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        id="date"
        label="Select your Birthday"
        type="date"
        value={birthday}
        onChange={handleBirthdayChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={calculateMilestones}>
        Calculate Milestones
      </Button>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {milestones.map((milestone, index) => (
          <Grid item xs={12} sm={6} key={index}>
            {/* <Milestone label={milestone.label} date={milestone.date} /> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
