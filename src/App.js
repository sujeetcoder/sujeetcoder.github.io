
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"
import { background } from './theme/color';

function App() {
  
  return (
    <Box bgColor={"white"} style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",textAlign:"center" }} w="100%"  className="App">
      <AllRoutes/>
    </Box>
  );
}

export default App;
