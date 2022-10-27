import { Box, Flex, Grid, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
/* import {fontStyle} from "./fontStyle.js" */

export const Home = () => {
    const fontStyle = {
        color:"red",
        fontSize:"20px",
        fontWeight:"bold"
    }
    
    return (
        <Box border="1px solid red" id="home">
        <SimpleGrid columns={[1,1,2]} gap="5%" >
            <Box border="1px solid green" /* h="320px" */ >
                <Text style={fontStyle} >hello world</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas neque ex eveniet vero quod eligendi ullam rem voluptas ipsa, animi illum maiores modi doloremque dignissimos distinctio quasi exercitationem quisquam. </Text>
            </Box>

            {/* <Spacer/> */}

            <Box>
                <Image h="100%"  src="https://avatars.githubusercontent.com/u/72292317?v=4" alt="sujeetPIC" style={{borderRadius:"50%" }} ></Image>
            </Box>
        </SimpleGrid>
    </Box>
    )
}