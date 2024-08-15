import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 320px;
  background-color: #F7F7FF;
  border-radius: 20px;
  padding: 20px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Legend = styled.div`
  display: flex;
  align-items: center;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const LegendDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
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

const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 20px;
`;

const data = [
  { month: 'Jan', video: 2, practice: 4 },
  { month: 'Feb', video: 3, practice: 6 },
  { month: 'Mar', video: 4, practice: 5 },
  { month: 'Apr', video: 6, practice: 7 },
  { month: 'May', video: 5, practice: 3 },
  { month: 'Jun', video: 8, practice: 6 },
  { month: 'Jul', video: 4, practice: 7 },
  { month: 'Aug', video: 5, practice: 4 },
  { month: 'Sep', video: 6, practice: 5 },
  { month: 'Oct', video: 3, practice: 4 },
  { month: 'Nov', video: 2, practice: 6 },
  { month: 'Dec', video: 4, practice: 5 },
];

const CourseActivityChart = () => {
  const [timeframe, setTimeframe] = useState('Monthly');

  return (
    <Container>
      <Navbar>
        <Title>Course Activity</Title>
        <Legend>
        <LegendItem>
          <LegendDot color="#90A4D4" />
          <span>Video</span>
        </LegendItem>
        <LegendItem>
          <LegendDot color="#344054" />
          <span>Practice</span>
        </LegendItem>
      </Legend>
        <Dropdown value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </Dropdown>
      </Navbar>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#e6e6e6" />
            <XAxis dataKey="month" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Bar dataKey="video" fill="#a4c7f5" barSize={15} radius={[10, 10, 0, 0]} />
            <Bar dataKey="practice" fill="#2d3853" barSize={15} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default CourseActivityChart;
