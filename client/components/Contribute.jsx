import React from 'react';
import styled from 'styled-components';

const ContributeMessage = styled.h2`
  font-size: 30px;
  padding: 5px 0 5px 0;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Kumbh Sans', sans-serif;
`;

const StyledSelect = styled.div`
  padding: 5px;
  margin: 5px;
`;

const SpecInput = styled.input`
  padding: 5px;
  font-family: 'Kumbh Sans', sans-serif;
  width: 200px;
`;

const SpecSelect = styled.select`
  padding: 5px;
  font-family: 'Kumbh Sans', sans-serif;
  width: 200px;
`;

const SpecButton = styled.button`
  padding: 5px;
  font-family: 'Kumbh Sans', sans-serif;
  width: 80px;
`;

const Contribute = ({ handleChange, submit }) => (
  <StyledForm>
    <ContributeMessage>
      New Exercises, New Possibilities
    </ContributeMessage>
    <StyledSelect>
    <label>Exercise: </label>
    <SpecInput type="text" name="name" onChange={handleChange}></SpecInput>
    </StyledSelect>
    <StyledSelect>
    <label>Target: </label>
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
    <label>Anterior or Posterior: </label>
    <SpecSelect name="chain" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="Anterior">Anterior</option>
      <option value="Posterior">Posterior</option>
      <option value="">N/A</option>
    </SpecSelect>
    </StyledSelect>
    <StyledSelect>
    <label>Single Sided or Double: </label>
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