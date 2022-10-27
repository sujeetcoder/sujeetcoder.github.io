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
import { toggleClick } from "../Toggle/ToggleClick"




const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')
   

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
                <Button onClick={()=>toggleClick("about")} bgColor={yellow} >About Me</Button>
                <Button onClick={()=>toggleClick("skills")} bgColor={yellow} >Skills</Button>
                <Button onClick={()=>toggleClick("projects")} bgColor={yellow} >Projects</Button>
                <Button onClick={()=>toggleClick("contact")} bgColor={yellow} >Contact & Resume</Button>
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
              <MenuItem onClick={()=>toggleClick("home")} > Home</MenuItem>
              <MenuItem onClick={()=>toggleClick("about")} bgColor={yellow}>About Me</MenuItem>
              <MenuItem onClick={()=>toggleClick("skills")} >skills</MenuItem>
              <MenuItem onClick={()=>toggleClick("projects")} bgColor={yellow}>Projects</MenuItem>
              <MenuItem onClick={()=>toggleClick("contact")} > Contact & Resume</MenuItem>
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