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
import { useMedia } from "../MediaQuery/UseMedia.js";



const HomePage = () => {
   
    

    useEffect(() => {
        /* banner */
        /* long ad */
        let ads = document.createElement("script")
            ads.type = "text/javascript"
            ads.append("atOptions = {'key' : '0d86570bcc2b7caad76bdf2df23c0254','format' : 'iframe','height' : 90,'width' : 728,'params' : {} };")
        
            let ads1 = document.createElement("script")
            ads1.type = "text/javascript"
            ads1.src = "//www.highperformanceformat.com/0d86570bcc2b7caad76bdf2df23c0254/invoke.js"
            let ad1 = document.querySelector("#ad1")

        /* short ad */
        let ads2 = document.createElement("script")
            ads2.type = "text/javascript"
            ads2.append("atOptions = {'key' : '923423887025a4254987561267175c43','format' : 'iframe','height' : 250,'width' : 300,'params' : {} };")
        
            let ads3 = document.createElement("script")
            ads3.type = "text/javascript"
            ads3.src = "//inanebinding.com/923423887025a4254987561267175c43/invoke.js"
/* social bar */
            let ad2 = document.querySelector("#ad2")

            let ads4 = document.createElement("script")
            ads4.type = "text/javascript"
            ads4.src = "//inanebinding.com/ed/85/7e/ed857ee6ca61cf810ee9a7108028ce27.js"

/* native banner */
            let ad3 = document.querySelector("#ad3")
            let ads5 = document.createElement("script")
            ads5.type = "text/javascript"
            ads5.src = "//inanebinding.com/428ae98a1b79aae0886bad71fdcbff66/invoke.js"
            ads5.async = true
            ads5.setAttribute("data-cfasync", "false")
            
            let ads6 = document.createElement("div")
            ads6.id = "container-428ae98a1b79aae0886bad71fdcbff66"


            /*short banner 2  */
            let ad10 = document.querySelector("#ad10")
            let ads10 = document.createElement("script")
            ads10.type = "text/javascript"
            ads10.append("atOptions = {'key' : '617062c0f84a72cf0c30663f2a9759d6','format' : 'iframe','height' : 300,'width' : 160,'params' : {} }")
        
            let ads11 = document.createElement("script")
            ads11.type = "text/javascript"
            ads11.src = "//inanebinding.com/617062c0f84a72cf0c30663f2a9759d6/invoke.js"



            if (window.innerWidth <= "750") {
                ad1 && ad1.append(ads2)
                ad1 && ad1.append(ads3)
            } else {
                ad1 && ad1.append(ads)
                ad1 && ad1.append(ads1)

            }
            ad2 && ad2.append(ads4)
            ad3 && ad3.append(ads5)
            ad3 && ad3.append(ads6)
            ad10 && ad10.append(ads10)
            ad10 && ad10.append(ads11)
        
        return () => {
            if (window.innerWidth <= "750") {
                ad1 && ad1.remove(ads3)
                ad1 && ad1.remove(ads2)
            } else {
                ad1 && ad1.remove(ads)
                ad1 && ad1.remove(ads1)
            }
            ad2 && ad2.remove(ads4)
            ad3 && ad3.remove(ads5)
            ad3 && ad3.remove(ads6)
            ad10 && ad10.remove(ads10)
            ad10 && ad10.remove(ads11)
        }
    }, [])


    return (
        <>
        <Helmet>
            <script type='text/javascript' src='//inanebinding.com/bf/44/d2/bf44d2d613ce4697723efce1023a266b.js'></script>
        </Helmet>
        <Box style={{ margin: "0px", padding: "0px", boxSizing: "border-box", width: "100%" }}  >
            <Navbar />
            <Box padding="30px 5%">
                <Home />
            <Box mt={"45px"} id="ad1" >
                {/* ads */}
            </Box>
            <Link w={"100%"} mt={"45px"} textAlign={"center"} href="https://inanebinding.com/ijv89mppsg?key=bdc1e37665b3c37db27b3d329e4b3c82" >Mystery Box 1 🎁 </Link>
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
                <Box mt={"35px"} id="ad3" >
                {/* ads */}
            </Box>
                <Projects />
                <Text pt={["50px", "55px", "20px", "5px"]} ><Link w={"100%"}  textAlign={"center"} href="https://inanebinding.com/juwavahq?key=ef8ae0933373bb302a36b21ec43d1e67" >Mystery Box 2 🎁 </Link></Text> 
               <Box mt={"35px"} id="ad10" >
                {/* ads */}
            </Box>
                <Contact />
                
                <HireMe />




                {/* footer */}
                <p style={{ marginTop: "60px" }} align="center"  >
                    <img src="https://readme-typing-svg.demolab.com/?lines=Thanks For Visit..... !&font=Fira%20Code&center=true&width=580&height=45&color=f20353&vCenter=true&size=22&pause=1500" />
                </p>
                
                <Text mt="50px"   >All copyrights reserved to © Sujeet Kumar (sujeetcoder) </Text>
            </Box>
            <Box mt={"35px"} id="ad2" >
                {/* ads */}
            </Box>
        </Box>
        </>
    )
}

export default HomePage;
