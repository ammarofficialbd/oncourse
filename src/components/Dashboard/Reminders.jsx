// ReminderTable.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styled from 'styled-components';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import ClassIcon from '@mui/icons-material/Class';
import DoneIcon from '@mui/icons-material/Done';
import ScheduleIcon from '@mui/icons-material/Schedule';

// Styled-components for custom styling
const CustomTableContainer = styled(TableContainer)`
  background: #F7F7FF !important; /* Change this to your desired background color */
  border-radius: 20px !important;
  padding:1rem;


`;
const StatusCell = styled(TableCell)`
  display: flex;
  align-items: center;
  color: white !important;
  padding: 0 px !important;
  border-radius: 12px;
  justify-content: center;
`;
const StatusBody= styled.span`
  display: flex;
  align-items: center;
  color: white !important;
  background-color: ${(props) => (props.status === 'Done' ? '#272B8F' : '#AA571B')};
  padding: 2px !important;
  border-radius: 12px;
  justify-content: center;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight:500;
  color: #333;
`;
const Dropdown = styled.select`
  border: none;
  background-color: #e9f0ff;
  padding: 5px 10px;
  border-radius: 5px;
  color: #2d3853;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FacultyName = styled.span`
  display: flex;
  align-items: center;
  color: #1a73e8;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const data = [
  { type: 'Assignment', name: 'Assignment-1', due: '5 June 2024', faculty: 'Same Jhon',avatar: 'https://mui.com/static/images/avatar/1.jpg', status: 'Done' },
  { type: 'Quiz', name: 'Quiz-2', due: '5 Aug 2024', faculty: 'Jhon Ab', avatar: 'https://mui.com/static/images/avatar/2.jpg', status: 'Coming' },
  { type: 'Last Class', name: 'Last Class', due: '5 June 2024', faculty: 'Kabir Same',avatar: 'https://mui.com/static/images/avatar/3.jpg', status: 'Done' },
  { type: 'Quiz', name: 'Quiz-2', due: '5 June 2024', faculty: 'Lee Jhon',avatar: 'https://mui.com/static/images/avatar/6.jpg', status: 'Coming' },
  { type: 'Assignment', name: 'Assignment-4', due: '5 June 2024', faculty: 'Abraham Leo',avatar: 'https://mui.com/static/images/avatar/4.jpg',  status: 'Done' },
  { type: 'Last Class', name: 'Last Class', due: '5 June 2024', faculty: 'Atik Saw', avatar: 'https://mui.com/static/images/avatar/5.jpg', status: 'Done' },
];

const ReminderTable = () => {
 const [timeframe, setTimeframe] = useState('Monthly');
  const getIcon = (type) => {
    switch (type) {
      case 'Assignment':
        return <AssignmentIcon />;
      case 'Quiz':
        return <QuizIcon />;
      case 'Last Class':
        return <ClassIcon />;
      default:
        return null;
    }
  };

  return (

    <CustomTableContainer  component={Paper}>
          <Navbar>
        <Title>Reminders</Title>
       
        <Dropdown value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </Dropdown>
      </Navbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Faculty</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {getIcon(row.type)} {row.name}
              </TableCell>
              <TableCell>{row.due}</TableCell>
              <TableCell>
                <FacultyName>
                  <Avatar src={row.avatar} alt={row.faculty} />
                  {row.faculty}
                </FacultyName>
              </TableCell>
              <StatusCell >
                <StatusBody status={row.status}> 
                {row.status}
                </StatusBody>
              </StatusCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default ReminderTable;
