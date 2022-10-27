import { Box, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { fontStyle, fontStyle2 } from "./fontStyle";



const About = () => {


    return (
        <Box >
        <Text mt="170px" style={fontStyle}>About Me</Text>
        <Box id="about"  w={["98%","95%","70%","60%","50%"]}>
           <Text  m="auto" fontSize="xl">Analytical and detail-oriented aspiring
Full Stack Web Developer. Capable of
writing production-ready code using
MERN stack. Passionate about coding
and intensely interested in working in a
product-based company.</Text>
      </Box>
<p align="center"  >
          <img src="https://readme-typing-svg.demolab.com/?lines=hi! My self Sujeet Kumar 🏽; I am a Full-stack%20web%20developer 🏻‍💻; interested in Coding 🏃‍♂️♂️;Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=580&height=45&color=37bcf7&vCenter=true&size=22&pause=1000" />
      </p>
      <Text style={fontStyle2} >My GitHub Stats</Text>
      <SimpleGrid columns={[1,2,2,4,4]} gap="4%">
      <Image src="https://camo.githubusercontent.com/71186f56b19973c263b0d9785a6a505fd4777397317b31c91b092aca494d3179/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d73756a656574636f646572266c616e67735f636f756e743d3826636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d304431313137" />
      <Image src="https://camo.githubusercontent.com/cdd1a4a2a1da06f27c12736a408da662318e818905e9f02c8b5e0a18332ab9b9/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73756a656574636f64657226686964655f626f726465723d74727565267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d304431313137" />
      <Image src="https://camo.githubusercontent.com/4b578c71142e9cea1d94437fa4fc2685c21191e9ba17247529dd545809d1904a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73756a656574636f6465722673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d304431313137" />
      <Image src="https://camo.githubusercontent.com/c4005e4917c659a6b4d5d64d8118ad0965679115b1010f6f9126bb489123cd64/68747470733a2f2f61637469766974792d67726170682e6865726f6b756170702e636f6d2f67726170683f757365726e616d653d73756a656574636f6465722662675f636f6c6f723d30443131313726636f6c6f723d354243444543266c696e653d35424344454326706f696e743d46464646464626686964655f626f726465723d74727565" />
      </SimpleGrid>
        </Box>
        
    )
}


export default About;