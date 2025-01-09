import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../Pages/Home'; // Import Home component
import About from '../Pages/About';
import ToHelp from '../Pages/HowToHelp';
import WeHelp from '../Pages/HowWeHelp';
import Donate from '../Pages/Donate';
import Contact from '../Pages/Contact';
import LogoImg from "../../assets/Logo.JPG";
import AdoptionPage from '../Pages/Adopt';

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:#77C6C6;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
  cursor: pointer;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: #426E6E;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 5px 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
  }

  button {
    padding: 5px 10px;
    font-size: 16px;
    color: white;
    background-color: #0056b3;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #003d80;
    }
  }
`;

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#f9f9f9')};
  text-align: center;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background: #0056b3;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`You searched for: ${searchQuery}`);
  };

  return (
    <Router>
      <Container>
        <Header>
          <Logo>
            <Link to="/">
              <LogoImage src={LogoImg} alt="Logo" />
            </Link>
            Paawvana
          </Logo>
          <NavBar>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/how-to-help">How to Help</Link>
            <Link to="/how-we-help">How We Help</Link>
            <Link to="/adopt">Adopt</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact-us">Contact Us</Link>
          </NavBar>
          {/* <SearchBar>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </SearchBar> */}
        </Header>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Define Home route */}
          <Route path="/about-us" element={<About />} />
          <Route path="/how-to-help" element={<ToHelp />} />
          <Route path="/how-we-help" element={<WeHelp />} />
          <Route path="/adopt" element={<AdoptionPage/>} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact-us" element={
            <Section id="contact-us" bgColor="#fff">
              <Contact />
              
            </Section>
          } />
        </Routes>

        <Footer>
          &copy; {new Date().getFullYear()} Paawvana NGO. All rights reserved.
        </Footer>
      </Container>
    </Router>
  );
};

export default Searchbar;
