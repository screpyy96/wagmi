import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
  animation: ${rotateAnimation} 2s linear infinite;
  position: fixed;
  top: 40%;
  left: 37%;
  @media (min-width: 768px) {
    position: fixed;
    top: 50%;
    left: 43%;
  }

`;

const LoadingSpinner = () => {
  return <Circle />;
};

export default LoadingSpinner;
