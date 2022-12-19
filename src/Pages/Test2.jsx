import { Box, Flex, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Test2 = () => {
    const [mid] = useMediaQuery('(min-width: 800px)')
    console.log(mid)
  return (
    <Box>
        <Text>Sujeet kumar</Text>
        {/* sm, md, lg, xl,  2xl */}
        <SimpleGrid w="100%" columns={[1,2,3,4,5]} gap="15px" >
            <Flex style={{backgroundColor:"red"}}  w="70%" border={"1px solid red"} flexDirection={mid?"column":"row"} justifyContent="space-between">

            <Text>Sujeet</Text>
            <Text>Krishna</Text>
            </Flex>
            <Flex w="30%" border={"1px solid red"} flexDirection={["column",null,null,null,"row"]} /* flexDirection={{base:"column",sm:"column",xl:"row"}} */ justifyContent="space-between">

            <Text>ram</Text>
            <Text>Yes</Text>
            </Flex>
            <Flex  w="30%" border={"1px solid red"} flexDirection={["column","column","row"]} justifyContent="space-between">

            <Text>No</Text>
            <Text>SUjeet</Text>
            </Flex>

        </SimpleGrid>
        <Box>
            {
                mid && <Text>Sujeet Kumar</Text>
            }
            {
                !mid && <Text>Najrin</Text>
            }

        </Box>
        
    </Box>
  )
}

export default Test2