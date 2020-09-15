import React from 'react';
import styled from 'styled-components';

const ContributeMessage = styled.h2`
  font-size: 40px;
  margin: 20px;
  color: #ffe135;
  text-shadow: 2px 2px 5px #000;
  font-family: 'Trade Winds', cursive;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Share', cursive;
`;

const StyledSelect = styled.div`
  padding: 5px;
  margin: 5px;
  font-size: 20px;
`;

const SpecInput = styled.input`
  padding: 5px;
  font-family: 'Share', cursive;
  width: 200px;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  border-radius: 1px;
  font-size: 20px;
`;

const SpecSelect = styled.select`
  padding: 5px;
  font-family: 'Share', cursive;
  width: 200px;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  border-radius: 1px;
  font-size: 20px;
`;

const SpecButton = styled.button`
  padding: 10px 15px 10px 15px;
  margin: 10px;
  font-family: 'Share', cursive;
  width: 80px;
  background-color: #ffe135;
  color: #000;
  border: 1px solid #000;
  border-radius: 1px;
  font-size: 22px;
  cursor: pointer;
  transition: 125ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #ffe135;
  }
`;

const StyledLabel = styled.label`
  margin: 8px;
  font-size: 22px;
`;

const Contribute = ({ handleChange, submit }) => (
  <StyledForm>
    <ContributeMessage>
      Contribute An Exercise
    </ContributeMessage>
    <StyledSelect>
    <StyledLabel>Exercise:   </StyledLabel>
    <SpecInput type="text" name="name" onChange={handleChange}></SpecInput>
    </StyledSelect>
    <StyledSelect>
    <StyledLabel>Target:   </StyledLabel>
    <SpecSelect name="target" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="legs">Legs</option>
      <option value="upper">Chest/Back</option>
      <option value="abs">Abs</option>
      <option value="shoulders">Shoulders</option>
      <option value="biceps">Biceps</option>
      <option value="triceps">Triceps</option>
    </SpecSelect>
    </StyledSelect>
    <StyledSelect>
    <StyledLabel>Anterior or Posterior:   </StyledLabel>
    <SpecSelect name="chain" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="Anterior">Anterior</option>
      <option value="Posterior">Posterior</option>
      <option value="">N/A</option>
    </SpecSelect>
    </StyledSelect>
    <StyledSelect>
    <StyledLabel>Single Sided or Double:</StyledLabel>
    <SpecSelect name="side" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="Single">Single</option>
      <option value="Double">Double</option>
      <option value="">N/A</option>
    </SpecSelect>
    </StyledSelect>
    <StyledSelect>
    <SpecButton onClick={submit}>Share</SpecButton>
    </StyledSelect>
  </StyledForm>
);

export default Contribute;