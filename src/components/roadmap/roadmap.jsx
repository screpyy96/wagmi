// pages/RoadMap.jsx
import Head from 'next/head';
import styled, { css } from 'styled-components';

const PageContainer = styled.div`
  padding: 40px;
  // background: #f1faee;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  padding-top: 10rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  margin: 50px 0;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #0077b6;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  ${(props) => props.right && css`
    left: 50%;
    &:before {
      content: '';
      position: absolute;
      top: 25px;
      left: calc(0% - 4px);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #023e8a;
    }
  `}
  ${(props) => props.left && css`
    &:before {
      content: '';
      position: absolute;
      top: 25px;
      left: calc(100% - 4px);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #023e8a;
    }
  `}
`;

const TimePeriod = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0077b6;
  text-align: ${(props) => (props.right ? 'left' : 'right')};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #023e8a;
  text-align: ${(props) => (props.right ? 'left' : 'right')};
`;

const Description = styled.p`
  text-align: ${(props) => (props.right ? 'left' : 'right')};
  color: #03045e;
`;

export default function RoadMap() {
  const phases = [
    { period: "Q1 2024", title: "Conceptualization and Planning", description: "Idea Generation, Market Research, Whitepaper Creation.", align: "left" },
    { period: "Q2-Q3 2024", title: "Initial Development and Team Expansion", description: "Core Team Formation, Technical Blueprint, Presale, Community Building.", align: "left" },
    { period: "Q4 2024", title: "Prototyping and Partnerships", description: "Prototype Development, Strategic Partnerships, Advisory Board Setup.", align: "right" },
    { period: "Q1-Q2 2025", title: "Beta Testing and Feedback Loop", description: "Mainnet Launch, Global Marketing Campaign, Launch Event.", align: "right" },
    { period: "Q4 2025 and beyond", title: "Expansion and Ecosystem Growth", description: "Feature Updates, Growing the Ecosystem, Global Impact Initiatives.", align: "right" },
    { period: "Future Developments", title: "Innovation and Scalability", description: "Decentralized Autonomous Organization (DAO), Cross-Chain Interoperability, Virtual and Augmented Reality Integrations.", align: "right" },
  ];

      return(

   
      <>
      <Head>
        <title>TripChain Roadmap</title>
      </Head>
      <PageContainer>
        <h1 style={{ textAlign: 'center' }}>TripChain Roadmap</h1>
        <TimelineContainer>
          {phases.map((phase, index) => (
            <ItemContainer key={index} right={phase.align === "right"} left={phase.align === "left"}>
              <TimePeriod right={phase.align === "right"} left={phase.align === "left"}>{phase.period}</TimePeriod>
              <Title right={phase.align === "right"} left={phase.align === "left"}>{phase.title}</Title>
              <Description right={phase.align === "right"} left={phase.align === "left"}>{phase.description}</Description>
            </ItemContainer>
          ))}
        </TimelineContainer>
        
      </PageContainer>
    </>
       )
};