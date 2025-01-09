import React from 'react';
import styled from 'styled-components';
import banner from "../../assets/ngo banner.jpg"

// Styled Components
const Container = styled.div`

  width:100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 280px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const DogName = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const DogBreed = styled.p`
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

const LearnMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Home = () => {
  const dogs = [
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      imageUrl: 'https://via.placeholder.com/280x200?text=Buddy',
      description: 'Friendly and playful, loves outdoor activities.',
    },
    {
      name: 'Bella',
      breed: 'Labrador Retriever',
      imageUrl: 'https://via.placeholder.com/280x200?text=Bella',
      description: 'Affectionate, great with kids and other pets.',
    },
    {
      name: 'Max',
      breed: 'Bulldog',
      imageUrl: 'https://via.placeholder.com/280x200?text=Max',
      description: 'Loyal and calm, perfect for quiet homes.',
    },
  ];

  return (
    <Container>
      <h1 style={{  fontFamily: "Arial, Helvetica, sans-serif",fontSize:"3.5rem"}}>Welcome to the World Of S</h1>
      {/* <p>Welcome to the World Of Sniffers</p> */}
      <img src={banner}style={{width:"100%"}}></img>
      <SectionContainer>
      {dogs.map((dog, index) => (
        <Card key={index}>
          <CardImage src={dog.imageUrl} alt={dog.name} />
          <CardContent>
            <DogName>{dog.name}</DogName>
            <DogBreed>{dog.breed}</DogBreed>
            <LearnMoreButton>ADOPTION</LearnMoreButton>
          </CardContent>
        </Card>
      ))}
    </SectionContainer>
    </Container>
  );
};

export default Home;



