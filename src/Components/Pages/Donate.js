import React from 'react';
import styled from 'styled-components';

// Styled Components
const DonateContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: 'Arial, sans-serif';
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const DonateButton = styled.button`
  padding: 10px 20px;
  background-color: #0070ba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005a94;
  }
`;

const Donate = () => (
  <DonateContainer>
    <Title>Support Our Mission</Title>
    <Description>Your contribution helps us bring positive change to communities in need.</Description>
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <DonateButton type="submit">Donate Now</DonateButton>
    </form>
  </DonateContainer>
);

export default Donate;
