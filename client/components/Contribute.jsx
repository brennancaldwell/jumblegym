import React from 'react';
import styled from 'styled-components';

const ContributeMessage = styled.h2`
  font-size: 30px;
  padding: 5px 0 5px 0;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.div`
  padding: 5px;
`;

const Contribute = ({ handleChange, submit }) => (
  <StyledForm>
    <ContributeMessage>
      New Exercises, New Possibilities
    </ContributeMessage>
    <StyledSelect>
    <label>Exercise: </label>
    <input type="text" name="name" onChange={handleChange}></input>
    </StyledSelect>
    <StyledSelect>
    <label>Target: </label>
    <select name="target" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="legs">Legs</option>
      <option value="upper">Chest/Back</option>
      <option value="abs">Abs</option>
      <option value="shoulders">Shoulders</option>
      <option value="biceps">Biceps</option>
      <option value="triceps">Triceps</option>
    </select>
    </StyledSelect>
    <StyledSelect>
    <label>Anterior or Posterior: </label>
    <select name="chain" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="Anterior">Anterior</option>
      <option value="Posterior">Posterior</option>
      <option value="">N/A</option>
    </select>
    </StyledSelect>
    <StyledSelect>
    <label>Single Sided or Double: </label>
    <select name="side" onChange={handleChange}>
      <option value="">(Select)</option>
      <option value="Single">Single</option>
      <option value="Double">Double</option>
      <option value="">N/A</option>
    </select>
    </StyledSelect>
    <StyledSelect>
    <button onClick={submit}>Submit</button>
    </StyledSelect>
  </StyledForm>
);

export default Contribute;