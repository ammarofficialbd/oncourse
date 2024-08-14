import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { FiGrid, FiBook, FiCheckSquare, FiDollarSign, FiPieChart, FiBarChart2, FiLifeBuoy, FiSettings } from 'react-icons/fi';

// Styled components
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.icon};
  }
`;

const SupportSettings = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarData = [
    {
        icon : FiGrid,
        heading: "Overview",
    },
    {
        icon : FiBook,
        heading: "My Course",
    },
    {
        icon : FiCheckSquare ,
        heading: "Completed",
    },
    {
        icon : FiDollarSign,
        heading: "Financial Aids",
    },
    {
        icon : FiPieChart,
        heading: "Transactions",
    },
    {
        icon :  FiBarChart2,
        heading: "Reports",
    },
    {
        icon :  FiPieChart,
        heading: "Statistics",
    }
]


const SideBar = () => {
    const [selected, setSelected] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <SidebarContainer>
        <div>
          <Logo>
            <LogoIcon>🌟</LogoIcon> ONCourse
          </Logo>
          <NavList>
            {
                SidebarData.map((item, index)=>{
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}>
                            <item.icon/>
                            <span> {item.heading}</span>
                        </div>
                    )
                })
            }
            
          </NavList>
        </div>
        <SupportSettings>
          <NavItem>
            <FiLifeBuoy /> Support
          </NavItem>
          <NavItem>
            <FiSettings /> Settings
          </NavItem>
        </SupportSettings>
      </SidebarContainer>
    </ThemeProvider>
  );
};

export default SideBar;
