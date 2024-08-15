import "./App.css";
import Card from "./components/Dashboard/Card";
import CourseActivity from "./components/Dashboard/CourseActivity";
import CourseCard from "./components/Dashboard/CourseCard";
import Navbar from "./components/Dashboard/Navbar";
import Reminders from "./components/Dashboard/Reminders";
import SideBar from "./components/Dashboard/SideBar";
import styled from "styled-components";
function App() {
  const AppWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    flex-direction: row; /* Side-by-side layout */
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Hide overflow to maintain layout */
  `;
  const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column; /* Side-by-side layout */
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Hide overflow to maintain layout */
  `;
  const MainContainer = styled.div`
    display: flex;
    flex-direction: row; /* Side-by-side layout */
  `;
  const FContainer = styled.div`
    display: flex;
    padding: 1rem;
    gap:1rem;
    flex-direction: column; /* Side-by-side layout */
  `;
  const ChartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; /* Side-by-side layout */
  `;
  const SContainer = styled.div`
    display: flex;
    padding: 1rem;
    padding-bottom: 0;
    flex-direction: row; /* Side-by-side layout */
    justify-content: space-between;
  `;
  const VContainer = styled.div`
    display: flex;
    padding: 1rem;
    gap:1rem;
    flex-direction: column; /* Side-by-side layout */
  `;
  const courseData = [
   { title: 'Foundations of User Experience (UX) Design',
     percentage: '80',
     assignment: '4',
     videos: '20'},
     { title: 'Start the UX Design Process: Emapathize, Define and Ideate',
     percentage: '65',
     assignment: '4',
     videos: '20'},
     { title: 'Build Wireframes and Low-fidelity Prototypes',
     percentage: '85',
     assignment: '4',
     videos: '20'},
     { title: 'Build Wireframes and Low-fidelity Prototypes',
     percentage: '85',
     assignment: '4',
     videos: '20'},
  ]
  return (
    <>
      <AppWrapper>
        <SideBar />
        <MainWrapper>
          <Navbar />
          <MainContainer>
            <FContainer>
              { courseData &&
                courseData?.map((course, key)=>(
                  <CourseCard title={`${course.title}`} percentage={`${course.percentage}`} assignment={`${course.assignment}`} videos={`${course.videos}`}/>
                ))
              }
            </FContainer>
            <ChartContainer>
              <SContainer>
                <Card count={'04'} show={'Increase'} percentage ={`20%`}/>
                <Card count={'12'} show={'Decrease'} percentage ={`1%`} />
              </SContainer>
              <VContainer>
                <CourseActivity />
                <Reminders />
              </VContainer>
            </ChartContainer>
          </MainContainer>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
