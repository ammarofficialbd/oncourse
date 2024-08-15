import React from 'react';
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";

// Styled components
const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
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

const SearchContainer = styled.div`
  position: relative;
  width: 400px;
`;

const SearchIcon = styled(IoSearch)`
  position: absolute;
  top: 50%;
  left: 29px;
  transform: translateY(-50%);
  color: #888;
`;

const SearchBar = styled.input`
  width: 100%;
  background: #F7F7FF;
  padding: 6px 40px; /* Add padding to the left to make space for the icon */
  margin: 0 20px;
  border-radius: 20px;
  outline: none;
  border: none;
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

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileName = styled.div`
  font-size: 14px;
  color: #333;
`;

const ProfileRole = styled.div`
  font-size: 12px;
  color: #888;
`;

// Navbar component
const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>Overview</Title>
      
      <SearchContainer>
        <SearchIcon />
        <SearchBar placeholder="Search ...." />
      </SearchContainer>

      <ProfileContainer>
        <ProfileImage src="https://mui.com/static/images/avatar/2.jpg" alt="Profile" />
        <ProfileInfo>
          <ProfileName>Alexa Calen</ProfileName>
          <ProfileRole>Student</ProfileRole>
        </ProfileInfo>
      </ProfileContainer>
    </NavbarContainer>
  );
};

export default Navbar;
