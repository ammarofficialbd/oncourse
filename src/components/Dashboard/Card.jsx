import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../theme'; // Assuming you have a theme.js
import { FaGraduationCap } from 'react-icons/fa'; // Using a graduation cap icon as it fits the context
import { HiArrowTrendingDown } from "react-icons/hi2";
// Styled components
const CardContainer = styled.div`
position:relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 1rem;
  width: 300px;
  height: 150px;
`;

const CourseInfo = styled.div`
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: space-between;
`;


const CourseCount = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CourseContent = styled.div`
   width:100%;
  display: flex;
   gap: 1rem;
   padding:.6rem;
  justify-content: space-between;
`;
const CourseLabel = styled.p`
  margin: 5px 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PercentageIncrease = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
    font-size: 14px;
  }
`;

const IconWrapper = styled.div`
  background-color: white;
  position:absolute;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1rem;
  right: 1rem;
`;

const Card = ({count, show, percentage, Icon }) => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <CourseInfo>
          <CourseCount>{count}</CourseCount>
          <CourseContent> 
          <CourseLabel>Completed Course</CourseLabel>
          <PercentageIncrease>
            {percentage} {show}<HiArrowTrendingDown />
          </PercentageIncrease>
          </CourseContent>
        </CourseInfo>
        
        <IconWrapper>
          <FaGraduationCap size={30} color="#3b82f6" />
        </IconWrapper>
      </CardContainer>
    </ThemeProvider>
  );
};

export default Card;
