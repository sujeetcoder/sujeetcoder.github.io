
import './App.css';
import Home from './Pages/Home';
import { Box } from '@chakra-ui/react';
import Navbar from './Componant/Navbar';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  
  return (
    <Box bgColor="#99f1d7" style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",textAlign:"center" }}  className="App">
      <AllRoutes/>
    </Box>
  );
}

export default App;
