import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { fontStyle } from "./fontStyle";



const About = () => {


    return (
        <Box id="about" mt="50px" w={["98%","95%","70%","60%","50%"]}>
            <Text style={fontStyle}>About Me</Text>
           <Text  m="auto" fontSize="xl">Analytical and detail-oriented aspiring
Full Stack Web Developer. Capable of
writing production-ready code using
MERN stack. Passionate about coding
and intensely interested in working in a
product-based company.</Text>
<p align="center"  >
          <img src="https://readme-typing-svg.demolab.com/?lines=hi! My self Sujeet Kumar 🏽; I am a Full-stack%20web%20developer 🏻‍💻; interested in Coding 🏃‍♂️♂️;Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=580&height=45&color=37bcf7&vCenter=true&size=22&pause=1000" />
      </p>
        </Box>
    )
}


export default About;