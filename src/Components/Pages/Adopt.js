import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f3f4f6;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const DogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  margin-bottom: 40px;
`;

const DogImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const DogDetails = styled.div`
  padding: 20px;
  text-align: center;
`;

const DogName = styled.h2`
  font-size: 28px;
  color: #2c3e50;
`;

const DogBreed = styled.p`
  font-size: 18px;
  color: #7f8c8d;
`;

const DogDescription = styled.p`
  font-size: 16px;
  color: #34495e;
  margin: 15px 0;
`;

const AdoptionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  height: 150px;
  
  &:focus {
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const AdoptionPage = () => {
  return (
    <PageContainer>
      <Title>Adopt a Dog</Title>

      {/* Dog Details Section */}
      <DogCard>
        <DogImage src="https://via.placeholder.com/600x300" alt="Dog" />
        <DogDetails>
          <DogName>Buddy</DogName>
          <DogBreed>Golden Retriever</DogBreed>
          <DogDescription>
            Buddy is a friendly and playful dog who loves long walks and spending time with his human friends. He's great with children and other pets.
          </DogDescription>
        </DogDetails>
      </DogCard>

      {/* Adoption Form */}
      <AdoptionForm>
        <FormTitle>Adoption Application</FormTitle>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Input type="text" placeholder="Your Address" required />
        <Textarea placeholder="Why do you want to adopt Buddy?" required />
        <SubmitButton type="submit">Submit Application</SubmitButton>
      </AdoptionForm>
    </PageContainer>
  );
};

export default AdoptionPage;
