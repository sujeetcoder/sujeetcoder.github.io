import { Box, Button, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { fontStyle } from "./fontStyle";
import freshly from "../Img/pro1.png"
import pharma from "../Img/pro2.png"
import belavita from "../Img/pro3.png"
import { red, yellow } from "../theme/color";



const Projects = () => {


    return (
        <Box boxSizing="border-box" id="projects" mt="70px" mb="130px" >
            <Text mb="20px" style={fontStyle} >Projects</Text>
            <SimpleGrid columns={[1,1,3,3,3]} gap="5%">
                <Box style={{boxShadow:"rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"}} >
                    <Image src={freshly} alt="alt" />
                    <Text color={red} >Freshly.com (individual)</Text>
                    <Text><b>Tech-Stack used: ReactJS, Chakra UI, REST API, Axios.</b></Text>
                    <Text mb="20px">A react web application project to deliver food items</Text>
                    <Flex flexDirection={["column","column","row","row","row"]} >
                    <a href="https://github.com/sujeetcoder/dainty-knee-9326" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://delightful-dango-efae26.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>
                <Box style={{boxShadow:"rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"}} >
                    <Image src={pharma} alt="alt" />
                    <Text color={red} >Pharmaeasy (Group)</Text>
                    <Text><b>Tech-Stack used: HTML, CSS, JavaScript (ES6&ES5)</b></Text>
                    <Text mb="20px">A web application project to deliver Medicines</Text>
                    <Flex flexDirection={["column","column","row","row","row"]}>
                    <a href="https://github.com/shiivaniiawasthii/jumpy-pigs-3147" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://euphonious-profiterole-0d7e49.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>
                <Box style={{boxShadow:"rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"}} >
                    <Image src={belavita} alt="alt" />
                    <Text color={red} >Bellavita.com (Group)</Text>
                    <Text><b>Tech-Stack used: HTML, CSS, JavaScript (ES5)</b></Text>
                    <Text mb="20px">A web application project to deliver Medicines </Text>
                    <Flex flexDirection={["column","column","row","row","row"]}>
                    <a href="https://github.com/sujeetcoder/bellavitaproject1" target="_blank" > <Button m="2%" bgColor={yellow}>Github</Button> </a>
                    <a href="https://jazzy-tulumba-87100d.netlify.app/" target="_blank" > <Button m="2%" bgColor={yellow}>Deploy link</Button> </a>
                    </Flex>
                </Box>

            </SimpleGrid>
        </Box>
    )
}


export default Projects;