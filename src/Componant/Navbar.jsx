import { Box, Flex, Spacer, Image, useMediaQuery, IconButton, Button, Text, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'
import { color1, color2, color3, color4 } from "../theme/color"




const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')
   
   
    function toggleClick(value){
       console.log("done")
      /* let id = document.getElementById("top") */
       window.scrollTo({top:value.offsetTop-90,behavior:"smooth"})
    }

   

    return (
        <>
        <Flex p="20px 50px" justifyContent="space-around" pos="sticky" zIndex="50" top="0px" style={{fontWeight: "500"}}  bgColor={color3} gap='2'  >
            <Box /*  marginLeft={"4%"} */>
                <Text style={{ fontWeight:"500px" }} fontSize="3xl" color={color4} > <b> Sujeet Kumar  </b></Text>
            </Box>
            <Spacer/>

            <Box>
           { navSmall && <Box   display="flex" alignItems='baseline' gap="15px">
                <Button onClick={()=>toggleClick(document.getElementById("top"))} bgColor={color2}  >Home</Button>
                <Button onClick={()=>toggleClick(document.getElementById("top1"))} bgColor={color2} >About Me</Button>
                <Button onClick={()=>toggleClick(document.getElementById("top2"))} bgColor={color2} >Skills</Button>
                <Button onClick={()=>toggleClick(document.getElementById("top"))} bgColor={color2} >Projects</Button>
                <Button onClick={()=>toggleClick(document.getElementById("top"))} bgColor={color2} >Contact & Resume</Button>
            </Box>
            }
            <Spacer/>
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
              <MenuItem onClick={()=>toggleClick(document.getElementById("top1"))} bgColor={color2}>About Me</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top2"))} >skills</MenuItem>
              <MenuItem onClick={()=>toggleClick(document.getElementById("top"))} bgColor={color2}>Projects</MenuItem>
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