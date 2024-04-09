import React from 'react';
import styled from 'styled-components';
import { StyleSheetManager } from 'styled-components';


// Stilizare pentru containerul de progres
export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

// Stilizare pentru bara de progres
export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #F6A619;
  border-radius: 10px;
`;

// Stilizare pentru procentaj
export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrare absolută */
  color: black;
  font-size: 12px;
  font-weight: bold;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <StyleSheetManager shouldForwardProp={prop => prop !== 'isopen'}>

      <Progress progress={progress} />
      <ProgressText>{progress.toFixed(2)}%</ProgressText>
      </StyleSheetManager>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
