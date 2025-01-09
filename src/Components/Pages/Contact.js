import React from "react";
import styled from "styled-components";
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color: #f4f7fc;
`;
 const ContactForm = styled.form`
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

 const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color:aliceblue;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #888;
  }
`;

 const Textarea = styled.textarea`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
   background-color:aliceblue;
  transition: border-color 0.3s ease-in-out;
  resize: vertical;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

const Contact = () => (
  <FormWrapper>
    <ContactForm>
      <Title>Contact Us</Title>
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email Address" required />
      <Input type="tel" placeholder="Phone Number" required />
      <Textarea placeholder="Why do you want to volunteer?" required rows="5"></Textarea>
      <Button type="submit">Submit</Button>
    </ContactForm>
    <p>Email: support@paawvana.org</p>
              <p>Phone: +91 96204 60603</p>
              <p>Location: Padmanabhanagar,Bangalore, India</p>
  </FormWrapper>
);

export default Contact;