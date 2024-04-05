// SendPayment.js

import React from 'react';


import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #4caf50;
  border-radius: 10px;
`;


const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
