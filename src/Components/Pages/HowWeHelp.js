import React, { useState } from 'react';
import styled from 'styled-components';
import cage from "../../assets/puppy in cage.jpg"
import food from "../../assets/group food.jpg"
import treatement from "../../assets/treatement.jpg"
import adopt from "../../assets/adoption event.jpg"
import training from "../../assets/training.jpg"
import volunteer from "../../assets/caring by training.jpg"

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HelpButton = styled.button`
  margin: 10px;
  padding: 15px 25px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 30px;
  background-color:#77C6C6;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background-image: linear-gradient(to right, #2575fc 0%, #6a11cb 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #2575fc;
  }
`;

const HeroCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 20%;
  margin-right: 20px;
`;

const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const ContactUsContainer = styled.div`
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const details = [
  { id: 1, type: 'Food Donations', description: 'We provide high-quality dog food to shelters and rescues.', image: food },
  { id: 2, type: 'Medical Treatments', description: 'We fund essential medical treatments for injured or sick dogs.', image: treatement },
  { id: 3, type: 'Shelter Improvements', description: 'We help improve shelter facilities to provide a better living environment.', image: cage },
  { id: 4, type: 'Adoption Events', description: 'We organize adoption events to find loving homes for dogs.', image: adopt },
  { id: 5, type: 'Training Programs', description: 'We support training programs to help dogs become more adoptable.', image: training },
  { id: 6, type: 'Volunteer Support', description: 'We coordinate volunteers to assist with various shelter tasks.', image: volunteer },
];

const WeHelp = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <Container>
      <h1>How We Help</h1>
      <p>Select an initiative to learn more:</p>
      {details.map((detail) => (
        <HelpButton key={detail.id} onClick={() => setSelectedDetail(detail)}>
          {detail.type}
        </HelpButton>
      ))}

      {selectedDetail && (
        <DetailsContainer>
          <HeroCard>
            <Image src={selectedDetail.image} alt={selectedDetail.type} />
            <div>
              <h3>{selectedDetail.type}</h3>
              <p>{selectedDetail.description}</p>
            </div>
          </HeroCard>
        </DetailsContainer>
      )}

      {/* <ContactUsContainer>
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ContactUsContainer> */}
    </Container>
  );
};

export default WeHelp;
