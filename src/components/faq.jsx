import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FiChevronDown } from 'react-icons/fi'; // Importăm iconița Chevron din react-icons

const Item = styled.div`
margin: 10px 0;
  border: 1px solid #0077b6;
  border-radius: 5px;
  overflow: hidden;
  font-size: 1.5rem;
  
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
background-color: rgba(255, 255, 255, 0.2); 
backdrop-filter: blur(5px); 
  color: white;
  cursor: pointer;
  user-select: none;

  &:hover {
    // background-color: #005f8a;
  }
`;

const Content = styled(animated.div)`
  will-change: height;
`;

const Answer = styled.div`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(5px); 
    color: white;
    border-top: 2px solid grey;
`;

const Container = styled.div`
border-radius: 1rem;
padding: 2rem;

  width: 80%;
  margin: 0 auto;
`;

const Chevron = styled(FiChevronDown)`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  font-size: 1.6rem;
`;

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const expand = useSpring({
    height: isOpen ? 'auto' : 0,
  });

  return (
    <Item>
      <Question onClick={onToggle}> {/* Use the onToggle function passed from the parent */}
        <span>{question}</span>
        <Chevron isOpen={isOpen} />
      </Question>
      <Content style={expand}>
        <Answer>{answer}</Answer>
      </Content>
    </Item>
  );
};

const faqs = [
    {
      question: "What is TripChain?",
      answer: "TripChain is a decentralized platform designed to revolutionize the travel industry by leveraging blockchain technology to offer secure, transparent, and seamless travel experiences."
    },
    {
      question: "How does TripChain benefit travelers?",
      answer: "Travelers can benefit from TripChain by gaining access to a wide range of services with lower fees, secure transactions, transparent pricing, and by earning rewards in TRPC tokens for participating in the ecosystem."
    },
    {
      question: "Can service providers join TripChain?",
      answer: "Yes, service providers such as hotels, airlines, and tour operators can join TripChain to offer their services directly to travelers, reducing intermediaries, and benefiting from blockchain's security and transparency."
    },
    {
      question: "What makes TripChain different from other travel platforms?",
      answer: "Unlike traditional travel platforms, TripChain is built on blockchain technology, ensuring data security, transaction transparency, and reducing the need for intermediaries. Additionally, its token economy incentivizes participation and loyalty within the ecosystem."
    },
    {
      question: "How can I purchase TRPC tokens?",
      answer: "TRPC tokens can be purchased during the pre-sale phase through the official TripChain website or later on selected cryptocurrency exchanges. Be sure to follow the official channels for updates on token sale events."
    },
    {
      question: "Is there a mobile app for TripChain?",
      answer: "The development of a mobile app for TripChain is in our roadmap. The app will provide easy access to all TripChain services and features, enhancing the user experience for travelers and service providers alike."
    },
    {
      question: "How can I contribute to the TripChain project?",
      answer: "You can contribute to TripChain by participating in the token pre-sale, providing feedback, joining the community on social media, and spreading the word about TripChain. Developers and service providers can also contribute by offering their services or developing new features for the platform."
    },
  ];

const FaqPage = () => {
  const [isOpen, setIsOpen] = useState(new Array(faqs.length).fill(false)); // Inițializăm un array de stări isOpen

  

  return (
    <Container >
    <h2 style={{textAlign: "center", color: "white"}}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
      
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={isOpen[index]} // Pass the specific isOpen state for each question
              onToggle={() => {
                const newIsOpen = [...isOpen]; // Create a copy of isOpen array
                newIsOpen[index] = !newIsOpen[index]; // Toggle the isOpen state of the clicked question
                setIsOpen(newIsOpen); // Update the state
              }}
            />
          ))}
    </Container>
  );
};

export default FaqPage;
