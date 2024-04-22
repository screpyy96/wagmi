import styled from 'styled-components';

const RoadmapContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Phase = styled.div`
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

const Description = styled.p`
  font-size: 16px;
  color: #999;
  line-height: 1.6;
`;

export {
    RoadmapContainer,
    Phase,
    Title,
    Subtitle,
    Description
}