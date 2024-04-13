import { Box, Button, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { fontStyle } from "./fontStyle";
import freshly from "../Img/pro1.png"
import beauty from "../Img/pro2.png"
import belavita from "../Img/pro3.png"
import { red, yellow } from "../theme/color";



const Projects = () => {


    return (
        <Box boxSizing="border-box" id="projects" mt="70px" mb="130px" >
            <Text mb="20px" style={fontStyle} >Projects</Text>
            <SimpleGrid columns={[1,1,3,3,3]} gap="5%">
                <Box style={{boxShadow:"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",padding:"3% 2%"}} >
                    <Image src={freshly} alt="alt" />
                    <Text color={red} >Freshly.com (individual)</Text>
                    <Text style={{height:"65px",width:"100%"}}><b>Tech-Stack used: ReactJS, Chakra UI, REST API, Axios.</b></Text>
                    <Text style={{height:"65px",width:"100%"}} mb="20px">A react web application project to deliver food items. Features:- Login & Signup (authentication) sorting filtering method using Axios</Text>
                    <Flex flexDirection={["column","column","row","row","row"]} >
                    <a href="https://github.com/sujeetcoder/dainty-knee-9326" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://freshly0.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>
                <Box style={{boxShadow:"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",padding:"3% 2%"}} >
                    <Image src={beauty} alt="alt" />
                    <Text color={red} >Beautyqueen (Group)</Text>
                    <Text style={{height:"65px",width:"100%"}}><b>Tech-Stack used: HTML, CSS, JavaScript (ES6&ES5), React, Redux, Javascript, CSS, Chakra</b></Text>
                    <Text style={{height:"65px",width:"100%"}} mb="20px">Beautyqueen is India’s fastest growing online retail store for the day to day and special occasion need</Text>
                    <Flex flexDirection={["column","column","row","row","row"]}>
                    <a href="https://github.com/mohdashiq18/friendly-stage-2043" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://beautyqueen0.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>
                <Box style={{boxShadow:"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",padding:"3% 2%"}} >
                    <Image src={belavita} alt="alt" />
                    <Text color={red} >MuscleFit.com (Group)</Text>
                    <Text style={{height:"65px",width:"100%"}}><b>Tech-Stack used: HTML, CSS, JavaScript (ES5), Node js, Mongoose, MongoDb-Atlas, ExpressJs, Firebase, Chakra-Ui, React Js</b></Text>
                    <Text style={{height:"65px",width:"100%"}} mb="20px">A MuscleFit is fitness application, that provides customer based customized workout plans and provide access to track them. </Text>
                   {/*  <div style={{textAlign:"left"}} >
                            <b> Features:- </b><br/>
                                Login & Signup, payment, cart,
                                We used dummy data for listing, sorting and filtering
                                all products<br/>
                            <b> Areas of responsibility:-  </b><br/>
                                Navbar, Product Page, Login<br/>
                            <b> Tech-Stack used: HTML, CSS, JavaScript(ES5) </b><br/>
                                A Collaborative project built by a team of 6 developers,
                                executed in 4 days</div> */}
                    <Flex flexDirection={["column","column","row","row","row"]}>
                    <a href="https://github.com/sujeetcoder/dainty-market-1579-MuscleFit" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://musclefit-201.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>

            </SimpleGrid>
        </Box>
    )
}


export default Projects;