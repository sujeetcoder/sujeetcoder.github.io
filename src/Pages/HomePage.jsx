import { Box, Button, Image, Link, Text } from "@chakra-ui/react"
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
import { Helmet } from 'react-helmet';
import { useEffect } from "react";



const HomePage = () => {
    // Home, about me, skill, project, contact & resume

    useEffect(() => {
        let ads = document.createElement("script")
            ads.type = "text/javascript"
            ads.append("atOptions = {'key' : '0d86570bcc2b7caad76bdf2df23c0254','format' : 'iframe','height' : 90,'width' : 728,'params' : {} };")
        
            let ads2 = document.createElement("script")
            ads2.type = "text/javascript"
            ads2.src = "//www.highperformanceformat.com/0d86570bcc2b7caad76bdf2df23c0254/invoke.js"
            let adsa = document.querySelector("#ads1")
            adsa.append(ads)
            adsa.append(ads2)
            console.log(ads, ads2, adsa)
        /* document.body.ads1.append(<h1>add places</h1>)
        document.body.ads1.append(ads)
        document.body.ads1.append(ads2)
        return () => {
            document.body.ads1.remove(<h1>add places</h1>)
        document.body.ads1.remove(ads)
        document.body.ads1.remove(ads2)
        } */
    }, [])


    return (
        <>
        <Helmet>
            <script type='text/javascript' src='//pl26995538.profitableratecpm.com/bf/44/d2/bf44d2d613ce4697723efce1023a266b.js'></script>
        </Helmet>
        <Box style={{ margin: "0px", padding: "0px", boxSizing: "border-box", width: "100%" }}  >
            <Navbar />
            <Box padding="30px 5%">
                <Home />
            <Box id="ads1" >
                {/* ads */}
            </Box>
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
                <Link w={"100%"} textAlign={"center"} href="https://www.profitableratecpm.com/pd5iii80?key=94c3cae02b6c879d6221264036d5952d" >Mystery Box 🎁 </Link>
                <Contact />
                <HireMe />




                {/* footer */}
                <p style={{ marginTop: "60px" }} align="center"  >
                    <img src="https://readme-typing-svg.demolab.com/?lines=Thanks For Visit..... !&font=Fira%20Code&center=true&width=580&height=45&color=f20353&vCenter=true&size=22&pause=1500" />
                </p>
                <Text mt="50px"   >All copyrights reserved to © Sujeet Kumar (sujeetcoder) </Text>
            </Box>
        </Box>
        </>
    )
}

export default HomePage;
