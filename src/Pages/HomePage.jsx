import { Box, Text } from "@chakra-ui/react"
import About from "../Componant/About.jsx";
import { Home } from "../Componant/Home.jsx";
import Navbar from "../Componant/Navbar.jsx"
import Test from "../Componant/Test"
import {  yellow, last, headline } from "../theme/color.js";




const HomePage = () => {
    // Home, about me, skill, project, contact & resume
    return (
    <Box style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%" }}  >
        <Navbar/>
        <Box padding="30px 5%">
        <Home/>
        <About/>
        


        
{/* footer */}
        <Text mt="50px"   >All copyrights reserved to © Sujeet Kumar</Text>
        </Box>
    </Box>
    )
}

export default HomePage;