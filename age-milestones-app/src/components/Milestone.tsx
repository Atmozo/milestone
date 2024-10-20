import React from 'react';

interface MilestonesProps {
  birthDate: Date;
}

const Milestones: React.FC<MilestonesProps> = ({ birthDate }) => {
  const calculateMilestone = (label: string, _unit: string, multiplier: number) => {
    const milestoneDate = new Date(birthDate.getTime() + multiplier);
    return `${label}: ${milestoneDate.toLocaleDateString()} (${milestoneDate.toLocaleTimeString()})`;
  };

  return (
    <div className="milestones">
      <h2>UPCOMING MILESTONES <span>🐦</span></h2>
      
      {/* 30th Birthday */}
      <p>{calculateMilestone('30th Birthday', 'years', 30 * 365 * 24 * 60 * 60 * 1000)}</p>

      {/* 400th Birthday */}
      <p>{calculateMilestone('400th Birthday', 'years', 400 * 365 * 24 * 60 * 60 * 1000)}</p>

      {/* 1600th Week */}
      <p>{calculateMilestone('1600th Week', 'weeks', 1600 * 7 * 24 * 60 * 60 * 1000)}</p>

      {/* 11000th Week */}
      <p>{calculateMilestone('11000th Week', 'weeks', 11000 * 7 * 24 * 60 * 60 * 1000)}</p>

      {/* 11000th Day */}
      <p>{calculateMilestone('11000th Day', 'days', 11000 * 24 * 60 * 60 * 1000)}</p>

      {/* 300000th Hour */}
      <p>{calculateMilestone('300000th Hour', 'hours', 300000 * 60 * 60 * 1000)}</p>

      {/* 16000000th Minute */}
      <p>{calculateMilestone('16000000th Minute', 'minutes', 16000000 * 60 * 1000)}</p>

      {/* 946000000th Second */}
      <p>{calculateMilestone('946000000th Second', 'seconds', 946000000 * 1000)}</p>
    </div>
  );
};

export default Milestones;

