
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  
  return (
    <Box bgColor={process.env.REACT_APP_COLOR1} style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",textAlign:"center" }}  className="App">
      <AllRoutes/>
    </Box>
  );
}

export default App;
