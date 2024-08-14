
import './App.css'
import Navbar from './components/Dashboard/Navbar'
import SideBar from './components/Dashboard/SideBar'
import styled from 'styled-components';
function App() {


  const AppWrapper = styled.div`
    display: flex;
    flex-direction: row; /* Side-by-side layout */
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Hide overflow to maintain layout */
  `;
  const MainWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Side-by-side layout */
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Hide overflow to maintain layout */
`;
const FContainer = styled.div`
display: flex;
flex-direction: column; /* Side-by-side layout */
height: 100vh; /* Full viewport height */
overflow: hidden; /* Hide overflow to maintain layout */
`;
const SContainer = styled.div`
display: flex;
flex-direction: column; /* Side-by-side layout */
height: 100vh; /* Full viewport height */
overflow: hidden; /* Hide overflow to maintain layout */
`;
 
 
  return (
    <>
    <AppWrapper> 
       <SideBar/>
        <Navbar/>
        <MainWrapper>
           <FContainer> 

           </FContainer>
           <SContainer> 

           </SContainer>
        </MainWrapper>
    </AppWrapper>
        
    </>
  )
}

export default App
