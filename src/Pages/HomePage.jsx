import { Box, Button, Image, Text } from "@chakra-ui/react"
import About from "../Componant/About.jsx";
import { Contact } from "../Componant/Contact.jsx";
import { HireMe } from "../Componant/HireMe.jsx";
import { Home } from "../Componant/Home.jsx";
import Navbar from "../Componant/Navbar.jsx"
import Projects from "../Componant/Projects.jsx";
import Skills from "../Componant/Skills.jsx";
import Test from "../Componant/Test"
import { yellow, last, headline } from "../theme/color.js";
import { toggleClick } from "../Toggle/ToggleClick.js";
import arrow from "../Img/arrow.png"



const HomePage = () => {
    // Home, about me, skill, project, contact & resume
    return (
        <Box style={{ margin: "0px", padding: "0px", boxSizing: "border-box", width: "100%" }}  >
            <Navbar />
            <Box padding="30px 5%">
                <Home />
                <Image
                    onClick={() => toggleClick("home")}
                    src={arrow}
                    ml={["78%", "93%", "97%", "99%", "100%"]}
                    mt="180px"
                    pos="sticky"
                    top="87%"
                    w="50px"
                    h="50px"
                    zIndex="49"
                />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <HireMe />




                {/* footer */}
                <p style={{ marginTop: "60px" }} align="center"  >
                    <img src="https://readme-typing-svg.demolab.com/?lines=Thanks For Visit..... !&font=Fira%20Code&center=true&width=580&height=45&color=f20353&vCenter=true&size=22&pause=1500" />
                </p>
                <Text mt="50px"   >All copyrights reserved to © Sujeet Kumar (sujeetcoder) </Text>
            </Box>
        </Box>
    )
}

export default HomePage;