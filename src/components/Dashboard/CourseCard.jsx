import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { theme } from '../../theme'; // Assuming you have a theme.js

// Styled components
const CardContainer = styled.div`
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  display: flex;
  gap:1rem;
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  position:relative;
  color: black;
  &:hover{
    cursor:pointer;
    background: linear-gradient(145deg, #4264E9, #B4C1F4);
    // Change button styles on hover
    .continue-button {
      background: white;
      color: black;
    }
  }
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const CourseDetails = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const ContinueButton = styled.button`
  margin-top:1rem;
  padding: 10px 20px;
  background: linear-gradient(145deg, #4264E9, #B4C1F4);
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

// Card component
const CourseCard = ({percentage, title, assignment, videos }) => {

  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <CourseInfo>
          <CourseTitle>{title}</CourseTitle>
          <CourseDetails>{assignment} Assignments • {videos} Videos</CourseDetails>
          <ContinueButton className="continue-button">Continue Course</ContinueButton>
        </CourseInfo>
        <div style={{ width: 100, height: 100 , position:'relative' , top:'60px'}}> 
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "Black",
            pathColor: "#1B2B68",
            trailColor: "#D7DDFA"
          })}
        />
        </div>
       
      </CardContainer>
    </ThemeProvider>
  );
};

export default CourseCard;
