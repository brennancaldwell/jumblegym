import React from 'react';

const Exercise = ({ part, side, exercise }) => {
  let target, reps, sets;
  console.log(side);
  if (part === 'Lower' && side === 'Anterior') {
    target = 'Quadriceps';
  } else if (part === 'Lower' && side === 'Posterior') {
    target = 'Glutes & Hamstrings';
  } else if (part === 'Upper' && side === 'Posterior') {
    target = 'Lats & Rhomboids';
  } else if (part === 'Upper' && side === 'Anterior') {
    target = 'Pectorals & Anterior Delts'
  } else if (part === 'Biceps') {
    target = 'Biceps';
  } else if (part === 'Triceps') {
    target = 'Triceps';
  } else if (part === 'Abs') {
    target = 'Core';
  } else if (part === 'Shoulders') {
    target = 'Deltoids';
  }
  if (exercise.side === 'Double') {
    sets = '3-4';
    reps = '8-12';
  } else {
    sets = '2-3';
    reps = '15-20';
  }
  return (
    <div>
      <h3>{exercise.name}</h3>
      <div>Target: {target}</div>
      <div>Reps: {reps}</div>
      <div>Sets: {sets}</div>
    </div>
  );
};

export default Exercise;