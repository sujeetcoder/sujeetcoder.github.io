import { Box, Button, Image, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react"
import { yellow } from "../theme/color"
import { ToastExample } from "../toast/ToastContact"
import { fontStyle } from "./fontStyle"
import resume from "../pdf/Sujeet_Kumar_Resume.pdf"



export const Contact = () => {
    const [navMid] = useMediaQuery('(min-width: 1000px)')

    return (
        <Box id="contact" mt="170px" mb="120px">
            <Text style={fontStyle} mb="20px" >Contact & Resume</Text>
            <SimpleGrid columns={[1,2,2,3,3]} gap="5%" mb={["200px","100px","70px","60px"]}>
           {/*  <ToastExample des="Vill- Behari Chapariya Tola,P.O-Rampur,P.S-Bhangaha,Bettiah, Bihar, India" name='Address' >  */}       <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="https://cdn4.vectorstock.com/i/1000x1000/33/28/location-icon-map-address-geographical-position-vector-29053328.jpg" />
                    <Text>Bettiah, Bihar, India</Text>
                </Box> {/* </ToastExample> */}
              <a href="tel:+917261861074">  <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" />
                    <Text>+917261861074</Text>
                     </Box> </a>
          {/* <ToastExample des="sujeetkumaryadav202020@gmail.com" name='Email' >  */}  <a href="mailto:sujeetkumaryadav202020@gmail.com">  <Box borderRadius="10px" bgColor="white" >
                    <Image w="70px" h="70px" src="data:image/png;base64,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" />
                    <Text>sujeetkumaryadav202020@gmail.com</Text>
                </Box> </a> {/* </ToastExample> */}
               <a target="_blank" href="https://github.com/sujeetcoder"> <Box borderRadius="10px" bgColor="white" >
                    <Image borderRadius="10px" w="70px" h="70px" src="data:image/png;base64,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" />
                    <Text>Github</Text>
                </Box> </a>
                
                <a target="_blank" href="https://www.linkedin.com/in/sujeetcoder/"> <Box borderRadius="10px" bgColor="white" >
                    <Image borderRadius="10px" w="70px" h="70px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAY1BMVEX///8AAAD4+PgVFRXZ2dmHh4fm5ua9vb14eHhAQEB7e3unp6fx8fFZWVn19fXV1dXJycksLCyNjY0hISFkZGQ2NjYcHByurq5tbW22trbDw8NOTk6dnZ2Xl5cJCQlTU1NHR0ecWc3pAAADaUlEQVR4nO3b6XqqMBAGYAMYt7AIorhAe/9XWahLVTIz6IlMzvPM91vq20BClnEykUgkEsn/mcRobbgRUKLdZqu6NPEp4sb0E03X6i/recoNekyQq+csNTfqLlHc8ym18KcRo8LiU6o4cMMuSe2+Nhk37TfJN+RTpRfP4RL0KVUF3Lr2BiM+pWbcvEkwR4ELbt8k3aJAxd6TV7hPLbmBCwL4zdyRE8KntszvE00BuR/CjATueIEzErjiBXrfgvh7pMueF2hIIPeMhniRqJJ7eYLNZbrECTOQ6iXMnbgdqY84kH+VjM8Wcm5eOyHEpgtezPmxp5B5lL4EvslTbto5lm2FcyruIeaWU2NtPw+WdNccyh5vzT4CPkRPn3xzH/rvQ0wdX7dAwmPtHa+LSWenOs9P+9RLnkQikUgkXsbobDWNF0WjmrAoj/PTIdLeTDMn5pDH/Z2BssqzFxaLwXKOpD9t2Ffwpx+3SXRdhsBcPSyX2dDpcAD8jXP6Gx/PE8f73M9xU2ghcWvI/bBmDKD/8p+AQb5GPndJPGhj6iPAPXj895hqwMzzA8CEurt/GXDm6x5obKfPULbkBqlzoKaOXp5CCV0DX/WpLdFVHAMN+uesCfHn0C0wqV72tT0FHRDdAus3fMQmlUvgLnrLpxrsvM0p8J0b3CUeCfh6B7kGGWtcAt9PDM9t/ACG8GDoBxApPfAEWIBjoSdAuJv4Aqx8BxZQP/YFCB5MewOEThU+B9wuNm3i44DlU5f5yMDNLtUmSRKjo2zIEk/FwEDzEWCZPy3XVjRxDRQffAJoWU1qeqIDTKw/AMxtI0aCFyoqcKh2D6yBL6La8DQScAONuFQhG9CNXQORQhtiwfI1DhC4wb9NiHflchwgtn2KXxuOAkRXkDPryf4t9ofXMRDdxyDusb3x3QK/8F1TvMzJfq1bIFHIgpey2Xcz3QKJSowderF9gHIKbIitNLzg036xU2BI7DnjL5MRgAVxiIRXpI4ABF4Gt+CF7/Y9LqfAIwEM0OMJ+49XnAI3FBAdqUcAgqvv65ehO+wChJeO3gCp3+8IUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKA7IHaJpWwTrc0hz4vRkgCgBFNj6dd7Gezj5M9JX/wyiUQikXiaH0JTRrh12Aw8AAAAAElFTkSuQmCC" />
                    <Text>linkedIn</Text>
                </Box> </a>

                <a target="_blank" href="https://twitter.com/sujeetcoder"> <Box borderRadius="10px" bgColor="white" >
                    <Image w="90px" h="70px" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" />
                    <Text>Twitter</Text>
                </Box> </a>

            </SimpleGrid>
     {/*        <a  href={resume} download="Sujeet_Kumar_Resume.pdf" >   <Button id="resume"  size={["sm","md","lg","lg"]}  bgColor={yellow} >Download My Resume</Button> </a>
        {navMid && 
        <Box>
            <Box w={["98%","80%","70%","60%"]} h={["330px","480px","560px","750px","950px","1200px"]}>
               
                <object data={resume} type="application/pdf" width="100%" height="100%" ></object>
                
            </Box>

            <a  href={"https://drive.google.com/file/d/1mAXvUM_FT60NaGoP8ERlny-sripoR6Eu/view?usp=sharing"} download="Sujeet_Kumar_Resume.pdf" >   <Button id="resume"  size={["sm","md","lg","lg"]}  bgColor={yellow} >Download My Resume</Button> </a>
            </Box>
        }
         */}
        </Box>
    )
}
