import React from 'react';
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";

// Styled components
const NavbarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #1a73e8;
`;

const SearchBar = styled.input`
 width: 100%;
  flex: 1;
  background: #F7F7FF;
  padding: 8px;
  margin: 0 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  border
  font-size: 14px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 14px;
  color: #333;
`;

const ProfileRole = styled.div`
  font-size: 12px;
  color: #888;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Navbar component
const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>Overview</Title>
    
      <SearchBar placeholder="Search ...." />
     
      
      <ProfileContainer>
        <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
        <ProfileInfo>
          <ProfileName>Alexa Calen</ProfileName>
          <ProfileRole>Student</ProfileRole>
        </ProfileInfo>
      </ProfileContainer>
    </NavbarContainer>
  );
};

export default Navbar;
