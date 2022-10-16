import { Box, Text } from "@chakra-ui/react"
import About from "../Componant/About.jsx";
import Navbar from "../Componant/Navbar.jsx"
import Test from "../Componant/Test.jsx";
const color1 = process.env.REACT_APP_COLOR1


const Home = () => {
    // Home, about me, skill, project, contact & resume
    return (
    <Box style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",height:"750px" }}  >
        <Navbar/>
        <Text fontSize="2xl" >This site is under maintenance</Text>
        <Test/>
        <About/>
        
{/* footer */}
        <Text mt="50px"  >All copyrights reserved to © Sujeet Kumar</Text>
    </Box>
    )
}

export default Home;