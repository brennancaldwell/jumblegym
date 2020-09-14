import React from 'react';
import Exercise from './Exercise.jsx';
import styled from 'styled-components';

const TemplateBackground = styled.div`
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
`;

const Type = styled.h1`
  font-size: 50px;
  color: #ffe135;
  text-shadow: 2px 2px 5px #000000;
  font-family: 'Trade Winds', cursive;
`;

const Category = styled.h2`
  font-size: 35px;
  color: #ffe135;
  font-family: 'Trade Winds', cursive;
  text-shadow: 2px 2px 5px #000000;
`;

const SaveButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin: 20px;
  font-family: 'Share', cursive;
  font-size: 20px;
  width: 250px;
  color: #000;
  background-color: #ffe135;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
`;


const FullBodyTemplate = ({ template, save }) => {

  return (
    <TemplateBackground>
      <Type>{template.type} Workout</Type>
      <Category>Lower Body</Category>
      <Container>
      {template.lower.anterior.map((exercise) => <Exercise part={'Lower'} side={`Anterior`} exercise={exercise} />)}
      {template.lower.posterior.map((exercise) => <Exercise part={'Lower'} side={`Posterior`} exercise={exercise} />)}
      </Container>
      <Category>Abs</Category>
      <Container>
      {template.abs.anterior.map((exercise => <Exercise part={'Abs'} side={`Anterior`} exercise={exercise} />))}
      </Container>
      <Category>Upper Body</Category>
      <Container>
      {template.upper.anterior.map((exercise) => <Exercise part={'Upper'} side={`Anterior`} exercise={exercise} />)}
      {template.upper.shoulders.map((exercise) => <Exercise part={'Shoulders'} side={`None`} exercise={exercise} />)}
      {template.upper.triceps.map((exercise) => <Exercise part={'Triceps'} side={`None`} exercise={exercise} />)}
      {template.upper.posterior.map((exercise) => <Exercise part={'Upper'} side={`Posterior`} exercise={exercise} />)}
      {template.upper.biceps.map((exercise) => <Exercise part={'Biceps'} side={`None`} exercise={exercise} />)}
      </Container>
      <Category>Abs</Category>
      <Container>
      {template.abs.posterior.map((exercise) => <Exercise part={'Abs'} side={`Posterior`} exercise={exercise} />)}
      </Container>
      <SaveButton onClick={save}>Save Template</SaveButton>
    </TemplateBackground>
  );
};

export default FullBodyTemplate;