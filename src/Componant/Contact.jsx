import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { fontStyle } from "./fontStyle"


export const Contact = () => {

    return (
        <Box id="contact">
            <Text style={fontStyle} >Contact & Resume</Text>
            <SimpleGrid columns={[1,2,2,4,4]} >
                <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="https://cdn4.vectorstock.com/i/1000x1000/33/28/location-icon-map-address-geographical-position-vector-29053328.jpg" />
                    <Text>Bettiah, Bihar, India</Text>
                </Box>
                <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" />
                    <Text>+917261861074</Text>
                </Box>
                <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="data:image/png;base64,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" />
                    <Text>sujeetkumaryadav202020@gmail.com</Text>
                </Box>
                <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="data:image/png;base64,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" />
                    <Text>sujeetkumaryadav202020@gmail.com</Text>
                </Box>

            </SimpleGrid>
        </Box>
    )
}