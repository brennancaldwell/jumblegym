import React from 'react';
import styled from 'styled-components';

const SaveMessage = styled.h2`
  font-size: 50px;
  margin: 20px;
  color: #ffe135;
  text-shadow: 2px 2px 5px #000;
  font-family: 'Trade Winds', cursive;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Share', cursive;
`;

const SavedTemp = styled.div`
  font-size: 30px;
  font-family: 'Share', cursive;
  color: #ffe135;
  cursor: pointer;
`;

const SavedTemplatesModal = ({ savedTemplates, select }) => (
  <StyledContainer>
    <SaveMessage>
      Saved Templates
    </SaveMessage>
    {savedTemplates.map((temp) => <SavedTemp id={temp._id}>{temp.name ? temp.name : `Workout on ${temp.date.slice(5,7)}/${temp.date.slice(8,10)}/${temp.date.slice(0,4)}`}</SavedTemp>)}
  </StyledContainer>
);

export default SavedTemplatesModal;