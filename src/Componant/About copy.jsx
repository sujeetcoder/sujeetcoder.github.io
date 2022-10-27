import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"



const About = () => {


    return (
        <Box>
            <Flex flexDirection={["column","column","row"]} >
                <Box h="320px" >
                    <Image h="100%"  src="https://avatars.githubusercontent.com/u/72292317?v=4" alt="sujeetPIC" style={{borderRadius:"50%" }} ></Image>
                </Box>

                <Spacer/>

                <Box>
                    <Text>hello world</Text>
                </Box>
            </Flex>
        </Box>
    )
}


export default About;