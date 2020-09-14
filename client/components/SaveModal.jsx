import React from 'react';
import styled from 'styled-components';

const SaveMessage = styled.h2`
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

const SpecButton = styled.button`
  padding: 10px 15px 10px 15px;
  margin: 20px;
  font-family: 'Share', cursive;
  width: 80px;
  background-color: #ffe135;
  color: #000;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 22px;
  cursor: pointer;
`;

const SpecInput = styled.input`
  padding: 5px;
  font-family: 'Share', cursive;
  width: 200px;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  border-radius: 3px;
  font-size: 20px;
`;

const StyledLabel = styled.label`
  margin: 8px;
  font-size: 22px;
`;

const StyledSelect = styled.div`
  padding: 5px;
  margin: 5px;
  font-size: 20px;
`;

const SaveModal = ({ handleChange, saveTemp }) => (
  <StyledForm>
    <SaveMessage>
      Save Template
    </SaveMessage>
    <StyledSelect>
      <StyledLabel>Name: </StyledLabel>
      <SpecInput type="text" name="templateName" placeholder="(Optional)" onChange={handleChange}></SpecInput>
    </StyledSelect>
    <SpecButton onClick={saveTemp}>Save</SpecButton>
  </StyledForm>
);

export default SaveModal;