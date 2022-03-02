import TourCard from './components/TourCard';
import './App.css';
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing ={5}>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
