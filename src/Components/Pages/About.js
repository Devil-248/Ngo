import React from "react";
import styled from "styled-components";
import Mission from "../../assets/dog slogan.jpg";
import Vission from "../../assets/caring Pets.jpg"
import Support from "../../assets/giving food in group.jpg"
import volunteer from "../../assets/caring the pupy.jpg"
import intiatives from "../../assets/injecting pets.jpg"
import impact from "../../assets/Shelter Pets.jpg"

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: "Arial, sans-serif";
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

// Card data
const cardData = [
  {
    image: Mission,
    title: "Our Mission",
    description: "We strive to make a difference in the lives of those in need through impactful initiatives."
  },
  {
    image: Vission,
    title: "Our Vision",
    description: "A world where everyone has access to basic necessities and opportunities."
  },
  {
    image: Support,
    title: "Community Support",
    description: "We work closely with communities to understand their needs and provide sustainable solutions."
  },
  {
    image: volunteer,
    title: "Volunteer Program",
    description: "Join our volunteer program to contribute your time and skills for a greater cause."
  },
  {
    image: intiatives,
    title: "Education Initiatives",
    description: "Empowering children and adults through education and skill development programs."
  },
  {
    image: impact,
    title: "Environmental Impact",
    description: "Promoting sustainable practices and protecting the environment for future generations."
  }
];

const About = () => {
  return (
    <Container>
      <h1 style={{fontSize:"3rem",fontWeight:"800"}}>About Us</h1>
      <CardsWrapper>
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default About;