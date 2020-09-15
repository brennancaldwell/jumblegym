import React from 'react';
import styled from 'styled-components';

const SpecSelect = styled.select`
  padding: 5px;
  font-family: 'Share', cursive;
  width: 200px;
  height: 52px;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  border-radius: 1px;
  font-size: 20px;
`;

const StyledSelect = styled.div`
  padding: 5px;
  margin: 5px;
  font-size: 20px;
  display: inline;
`;

const StyledLabel = styled.label`
  margin: 8px;
  font-size: 22px;
`;

const TemplateSelect = () => (
  <StyledSelect>
    <SpecSelect name="type">
      <option value="fullbody">Full Body</option>
      <option value="upper">Upper Body</option>
      <option value="lower">Lower Body</option>
    </SpecSelect>
  </StyledSelect>
);

export default TemplateSelect;