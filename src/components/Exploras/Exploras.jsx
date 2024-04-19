import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// Styled-components for styling
const Wrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e7e7e7;
    transform: translateY(-2px);
  }
`;

const InfoText = styled.div`
  margin-top: 20px;
  color: #666;
  border: 2px solid grey;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  height: 300px;
  width: 60%;
  margin: 0 auto;
  ${props =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Exploras = () => {
  // State to manage which button was clicked
  const [info, setInfo] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Function to display information based on the button clicked
  const displayInfo = (buttonNumber) => {
    setIsVisible(false); // Initially hide to trigger the animation
    setTimeout(() => { // Delay to allow CSS transition
      switch (buttonNumber) {
        case 1:
          setInfo('Information related to button 1.');
          break;
        case 2:
          setInfo('Details for button 2 shown here.');
          break;
        case 3:
          setInfo('Button 3 clicked, displaying its info.');
          break;
        case 4:
          setInfo('Here is what button 4 is all about.');
          break;
        default:
          setInfo('');
      }
      setIsVisible(true); // Show with the transition
    }, 300);
  };

  return (
    <>
      <Wrapper>
        <Title>What is Exploras?</Title>
        <p>SatoshiDEX este un protocol DeFi revoluționar care aduce flexibilitatea și inovația schimbului pe blockchainul Bitcoin. Le permite utilizatorilor să:</p>
        <Button onClick={() => displayInfo(1)}>Button 1</Button>
        <Button onClick={() => displayInfo(2)}>Button 2</Button>
        <Button onClick={() => displayInfo(3)}>Button 3</Button>
        <Button onClick={() => displayInfo(4)}>Button 4</Button>
        <InfoText isVisible={isVisible}>{info}</InfoText>
      </Wrapper>
    </>
  );
};

export default Exploras;