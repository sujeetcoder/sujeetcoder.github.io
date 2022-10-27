import { Box, Flex, Spacer, Image, useMediaQuery, IconButton, Button, Text, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'
import {  yellow, headline, red } from "../theme/color"




const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')
   
   
    function toggleClick(id){
       console.log("done")
       let value = document.getElementById(id)
       window.scrollTo({top:value.offsetTop-90,behavior:"smooth"})
    }

   

    return (
        <>
        <Flex p="20px 10px" justifyContent="space-around" pos="sticky" zIndex="50" top="0px"  bgColor={red} gap='2'  >
            <Box>
                <Text style={{ fontWeight:"500px" }} fontSize={["sm","xl","2xl","3xl"]} color={headline} > <b> Sujeet Kumar  </b></Text>
            </Box>
            <Spacer/>

            <Box>
           { navSmall && <Box   display="flex" alignItems='baseline' gap="15px">
                <Button onClick={()=>toggleClick("home")} bgColor={yellow}  >Home</Button>
                <Button onClick={()=>toggleClick("home")} bgColor={yellow} >About Me</Button>
                <Button onClick={()=>toggleClick("home")} bgColor={yellow} >Skills</Button>
                <Button onClick={()=>toggleClick("home")} bgColor={yellow} >Projects</Button>
                <Button onClick={()=>toggleClick("home")} bgColor={yellow} >Contact & Resume</Button>
            </Box>
            }
            
            { 
            !navSmall && <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
               variant='outline'
              />
            <MenuList>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top"))} > Home</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top1"))} bgColor={yellow}>About Me</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top2"))} >skills</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top"))} bgColor={yellow}>Projects</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top"))} > Contact & Resume</MenuItem>
            </MenuList>
          </Menu>
            }   
            </Box>
        </Flex>
        <Divider orientation='horizontal' />
        </>
    )

}

export default Navbar;