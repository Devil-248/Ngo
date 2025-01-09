import React, { useState } from 'react';
import styled from 'styled-components';
import feeding from "../../assets/Milk feeding.jpg"
import treating from "../../assets/Treating pets.jpg"
import acessories from "../../assets/accessories.jpg"
import food from "../../assets/group eating biscuit.jpg"
import medicine from "../../assets/dog medicine.jpg"
import shelter from "../../assets/group pet in cage.jpg"
import hygiene from "../../assets/hygiene.jpg"

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
  { id: 1, type: 'Food', description: 'Donate quality dog food', image: feeding },
  { id: 2, type: 'Treatments', description: 'Fund medical treatments', image: treating },
  { id: 3, type: 'Accessories', description: 'Donate accessories', image: acessories },
  { id: 4, type: 'Food', description: 'Provide special dietary food', image: food },
  { id: 5, type: 'Medicine', description: 'Donate essential medicines', image: medicine },
  { id: 6, type: 'Shelter Supplies', description: 'Provide bedding and shelter', image: shelter },
  { id: 7, type: 'Hygiene Products', description: 'Provide hygiene products', image: hygiene},
];

const ToHelp = () => {
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
      <h1>Help the Dog NGO</h1>
      <p>Select a way to help:</p>
      <div style={{display:"flex",justifyContent:"center"}}>
      {details.map((detail) => (
        <HelpButton key={detail.id} onClick={() => setSelectedDetail(detail)}>
          {detail.type}
        </HelpButton>
      ))}
</div>
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
    </Container>
  );
};

export default ToHelp;
