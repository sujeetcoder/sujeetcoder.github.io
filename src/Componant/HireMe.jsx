import { Box, Text } from "@chakra-ui/react"
import { ContactUs } from "./emailJs"
import { fontStyle2 } from "./fontStyle"


export const HireMe = () => {

    return (
        <Box mt="50px" id="hireme" >
            <Text style={fontStyle2} >Want To Hire Me</Text>
            <Box><ContactUs/></Box>

        </Box>
    )
}