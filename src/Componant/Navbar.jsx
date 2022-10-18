import { Box, Flex, Spacer, Image, useMediaQuery, IconButton, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'




const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')
   
  /*   const navigate = useNavigate() */
   
    function toggleClick(value){
       console.log("done")
       window.scrollTo({top:value,behavior:"smooth"})
    }

   

    return (
        <>
        <Flex p="20px 50px" justifyContent="space-around" pos="sticky" zIndex="50" top="0px" style={{fontWeight: "500"}}  bgColor={process.env.REACT_APP_COLOR3} gap='2'  >
            <Box /*  marginLeft={"4%"} */>
                <Text style={{ fontWeight:"500px" }} fontSize="3xl" color={process.env.REACT_APP_COLOR4} > <b> Sujeet Kumar  </b></Text>
            </Box>
            <Spacer/>

            <Box>
           { navSmall && <Box   display="flex" alignItems='baseline' gap="15px">
                <Button onClick={()=>toggleClick(3000)} bgColor={process.env.REACT_APP_COLOR2}  >Home</Button>
                <Button onClick={()=>toggleClick(1000)} bgColor={process.env.REACT_APP_COLOR2} >About Me</Button>
                <Button bgColor={process.env.REACT_APP_COLOR2} >Skills</Button>
                <Button bgColor={process.env.REACT_APP_COLOR2} >Projects</Button>
                <Button bgColor={process.env.REACT_APP_COLOR2} >Contact & Resume</Button>
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
              <MenuItem onClick={()=>toggleClick(3000)} > Home</MenuItem>
              <MenuItem onClick={()=>toggleClick(1000)} bgColor={process.env.REACT_APP_COLOR2}>About Me</MenuItem>
              <MenuItem >skills</MenuItem>
              <MenuItem bgColor={process.env.REACT_APP_COLOR2}>Projects</MenuItem>
              <MenuItem > Contact & Resume</MenuItem>
            </MenuList>
          </Menu>
            }   
            </Box>
        </Flex>
        <hr/>
        </>
    )

}

export default Navbar;