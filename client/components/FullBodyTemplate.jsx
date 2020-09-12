import React from 'react';
import Exercise from './Exercise.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
`;

const FullBodyTemplate = ({ template }) => {

  return (
    <div>
      <h1>{template.type} Workout</h1>
      <h2>Lower Body</h2>
      <Container>
      {template.lower.anterior.map((exercise) => <Exercise part={'Lower'} side={`Anterior`} exercise={exercise} />)}
      {template.lower.posterior.map((exercise) => <Exercise part={'Lower'} side={`Posterior`} exercise={exercise} />)}
      </Container>
      <h2>Abs</h2>
      <Container>
      {template.abs.anterior.map((exercise => <Exercise part={'Abs'} side={`Anterior`} exercise={exercise} />))}
      </Container>
      <h2>Upper Body</h2>
      <Container>
      {template.upper.anterior.map((exercise) => <Exercise part={'Upper'} side={`Anterior`} exercise={exercise} />)}
      {template.upper.shoulders.map((exercise) => <Exercise part={'Shoulders'} side={`None`} exercise={exercise} />)}
      {template.upper.triceps.map((exercise) => <Exercise part={'Triceps'} side={`None`} exercise={exercise} />)}
      {template.upper.posterior.map((exercise) => <Exercise part={'Upper'} side={`Posterior`} exercise={exercise} />)}
      {template.upper.biceps.map((exercise) => <Exercise part={'Biceps'} side={`None`} exercise={exercise} />)}
      </Container>
      <h2>Abs</h2>
      <Container>
      {template.abs.posterior.map((exercise) => <Exercise part={'Abs'} side={`Posterior`} exercise={exercise} />)}
      </Container>
    </div>
  );
};

export default FullBodyTemplate;