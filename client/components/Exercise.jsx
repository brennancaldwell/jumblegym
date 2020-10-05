import React from 'react';
import styled from 'styled-components';

const ExerciseContainer = styled.div`
    font-family: 'Share', cursive;
    margin: 10px;
    color: #fff;
    background-color: #000;
    border: 1px solid #ffe135;
    border-radius: 1px;
    box-shadow: 2px 2px 5px #000000;
    display: grid;
    grid-template-rows: 2fr 5fr;
`;

const ExerciseName = styled.div`
  font-size: 28px;
  background-color: #ffe135;
  padding: 5px 20px 20px 20px;
  color: #000;
  grid-area: 1 / 1 / span 1 / span 1;
`;

const NameText = styled.div`
  position: relative;
  top: 10px;
`;


const ExerciseParams = styled.div`
  margin: 25px 10px 10px 10px;
  grid-area: 2 / 1 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
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
  if (exercise.side === 'Double' && part !== 'Biceps' && part !== 'Triceps') {
    sets = '3-4';
    reps = '8-12';
  } else {
    sets = '2-3';
    reps = '15-20';
  }
  return (
    <ExerciseContainer>
      <ExerciseName>
        <NameText>{exercise.name}</NameText>
        </ExerciseName>
      <ExerciseParams>
      <div>Target: {target}</div> <br/>
      <div>Reps: {reps}</div> <br/>
      <div>Sets: {sets}</div> <br/>
      </ExerciseParams>
    </ExerciseContainer>
  );
};

export default Exercise;