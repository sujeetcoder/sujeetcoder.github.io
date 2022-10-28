import { Box,  Button,  Flex,  Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import {  red, yellow } from "../theme/color"
import { toggleClick } from "../Toggle/ToggleClick"
import { fontStyle } from "./fontStyle"
/* import {fontStyle} from "./fontStyle.js" */

export const Home = () => {
    
    
    return (
        <Box id="home" mt="50px">
        <SimpleGrid columns={[1,1,2]} gap={["0%","3%"]} >
            <Box>
                <Text style={fontStyle} fontSize={["1px","20px","25px","30px","35px"]} >Hello world!</Text>
                <Text fontSize={["xl","2xl","3xl"]}>I am Sujeet Kumar </Text>
                <Text color={red} fontSize="2xl">"Full Stack Web Developer"</Text>
                <Flex mt="25px" flexDirection={["column","row"]}>
                    <Button onClick={()=>toggleClick("hireme")} m="2%" bgColor={yellow} >Hire Me</Button>
                    <Spacer/>
                <Button onClick={()=>toggleClick("resume")} m="2%" bgColor={yellow}>Get CV</Button>
                </Flex>
            </Box>
            <Box>
                <Image h="100%"  src="https://avatars.githubusercontent.com/u/72292317?v=4" alt="sujeetPIC" style={{borderRadius:"50%" }} ></Image>
                <Flex mt="25px" flexDirection={["column","row"]}>
                    <a target="_blank" href="https://github.com/sujeetcoder"><Image  w="50px" h="50px" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/sujeetcoder/"><Image mt="10px" w="50px" h="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUAd7f///8AcbQAbLIAb7Pp9PkAdbabvdq20eXl7/ZAjMEAc7U+hb3w9vmpyOHu8/grf7sAabHP4O3X5fBjnMkwh79WlsaIsNPD2Oluo81qm8hdk8ShxN6BsNSOtdZOjsJ5qdDNqqL8AAADoklEQVR4nO2bW5uiMAyGoY0FrDIUEPGA+P9/5aIzDAIpRWZId/fpdzE3RfJOQ9OkB8//VBbkB49MhzzIvgx7z79pwUAKOgAhgRVpBxAAozPeikHQAhwVvfmH1PETILBkvyEIHgAp2LLveZA2AIUF/7dihe9lFu03BJkXWPRA44PAy6VNAJl7B8L4M5YgDL//nAQozhhXYMdFku2qMmqU3raSfqAKXpf+t9KcE9uXPPR7KhnpWJVJ5A/0URO6QSbZ0D4tAUvH9n0/IrPPA8y+74dEWYPwcPu+v6UJCKDpgKYLaKZNGI2Ab5HYFwetfT+nGAjsrge4UvgArnoAko8AYj1ASeGCSQCSHrjpAWIKAFnoASoKACH0AAeSORlKnf2IZj6UZx3AkWhCVkg28NCGKi+T9R4FIAnET/EKs38lTEwxAkr7zUg4Db1QEZcnsOsNxrQmL+ElL+K2F8IcbFTwkqskP93PieLW6nchGaNcvfz/9JPOe++3/acbz4FSnAMAVwqYeB9EKC/pi7+OA5CDVq+LEkJycamuabR5DKJ9lF6rWvI3R5FMyo+B0m33DjhGw+b4qxMEiDwcFhb7KK7fWuMQHjIfbpK2GU3cy2ekluyumUrT4o3BzE7YK25tMGSojQcfrzXmn4jJ7GiKV4dhOxuxDda8lYJP5LON9qe589lCADaR0H/qNpNgGYCaKKlaneZ5YRFAMt3/X5q3M7AIYKKmfdE+mRMRFgHgeeRIs6q7RQBzdZrRBasCZDOWulYF8M/mLlgXYMZXsC7AjKWulQGOxi5YGcDsg5UBuol9FYC0Ol8u56qcCEyFaRz8ACDcKZBSClCJfm40fgTLAQrVpT1KU+W/vOnXAfoVJKs1j0VrAQzzDThqAExJ/0KAbPSPKdwJ+906AJfRx800XTB+8jcA0vFbRYJ3gWk+WgaALaNqFtxMOcEygARxLMeDwd2QGS4CQA+C4CVOV+P8JgC6mSEvKIDp0MgiADS+CjwWmbZ+FgGg66hihw6DVQC22Jf9twLEhsnAATgAB+AAHIADcAAOwAE4AAfgAByAA3AA1gEYep7OsHuOL36Oj+k/ZFojEh5yuj3qzg9gS1+aFXD0gOiHccdCJHE0UPiy5wr3bNgcaM6JCFYNH41K1FsDcSZ6Yr3zDwz6rQL0J82AD56de6Ck/6vp1unF73eetSPrV72sX3azft3P+oVH61c+7V96tX7t1/7FZ/tXv+1ffvctXv//A/jiRskUUNZEAAAAAElFTkSuQmCC"/></a>
                </Flex>
            </Box>
        </SimpleGrid>
    </Box>
    )
}