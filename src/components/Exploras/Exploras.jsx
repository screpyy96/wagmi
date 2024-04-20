"use client"
import React, { useState, useEffect, useRef } from 'react';
import {Container, Wrapper, Title, Button, InfoText } from './Exploras.styled';

const Exploras = () => {
  const [info, setInfo] = useState('');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // Define intervalId state
  const sectionRef = useRef(null);

  const displayInfo = (text) => {
    clearInterval(intervalId); // Clear any existing interval
    let displayedText = '';
    let index = 0;
    const id = setInterval(() => {
      if (index < text.length) {
        displayedText += text[index];
        setInfo(displayedText);
        index += 1;
      } else {
        clearInterval(id);
      }
    }, 50); // Adjust the speed as necessary
    setIntervalId(id); // Save the interval ID
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Start animation when the section enters the viewport
          displayInfo('Exploras revolutionizes travel with blockchain, offering seamless bookings, authentic reviews, and rewards.');
        } else {
          setIsIntersecting(false);
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Wrapper ref={sectionRef}>
        <Title>What is Exploras?</Title>
        <p>
          Exploras revolutionizes travel with blockchain, offering seamless bookings, authentic reviews, and rewards.
          It combines smart contracts, DeFi, and NFTs to make travel more transparent, efficient, and enjoyable.
        </p>
        <Container>
          <Button onClick={() => displayInfo('Exploras merges DeFi and NFTs, revolutionizing travel with unique experiences.')}>DeFi and NFT</Button>
          <Button onClick={() => displayInfo('Smart contracts automate bookings and secure reviews on Exploras.')}>Smart Contracts</Button>
          <Button onClick={() => displayInfo('Exploras combines advanced architecture and security for seamless, safe travel engagement.')}>Seamless Travel</Button>
          <Button onClick={() => displayInfo('Exploras redefines travel with blockchain, offering seamless bookings, authentic reviews, and rewards.')}>Blockchain Innovation</Button>
        </Container>
        {isIntersecting && <InfoText>{info}</InfoText>}
      </Wrapper>
    </>
  );
};

export default Exploras;
