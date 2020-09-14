import React from 'react';
import styled from 'styled-components';

const ExerciseContainer = styled.div`
    font-family: 'Share', cursive;
    padding: 5px 20px 20px 20px;
    margin: 5px;
    color: #fff;
    background-color: #000;
    border: 1px solid #ffe135;
    border-radius: 3px;
    box-shadow: 2px 2px 5px #000000;
`;

const ExerciseName = styled.h3`
  font-size: 25px;
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
      <ExerciseName>{exercise.name}</ExerciseName>
      <div>Target: {target}</div> <br/>
      <div>Reps: {reps}</div> <br/>
      <div>Sets: {sets}</div> <br/>
    </ExerciseContainer>
  );
};

export default Exercise;