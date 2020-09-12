import React from 'react';
import styled from 'styled-components';

const ExerciseContainer = styled.div`
    padding: 10px;
`;

const Exercise = ({ part, side, exercise }) => {
  let target, reps, sets;
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
    <ExerciseContainer>
      <h3>{exercise.name}</h3>
      <div>Target: {target}</div>
      <div>Reps: {reps}</div>
      <div>Sets: {sets}</div>
    </ExerciseContainer>
  );
};

export default Exercise;