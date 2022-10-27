
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"
import { background } from './theme/color';

function App() {
  
  return (
    <Box bgColor={background} style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",textAlign:"center" }}  className="App">
      <AllRoutes/>
    </Box>
  );
}

export default App;
