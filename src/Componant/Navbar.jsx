import { Box, Flex, Spacer, Image, useMediaQuery, IconButton, Button, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
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
   
    function toggleClick(isAuth){
       
    }

   

    return (
        <>
        <Flex p="20px 50px" justifyContent="space-around" pos="sticky" zIndex="50" top="0px" style={{fontWeight: "500"}}  bgColor={"#fffdf7"} gap='2'  >
            <Box /*  marginLeft={"4%"} */>
                <Text style={{ fontWeight:"500px" }} fontSize="xl" > <b> Sujeet Kumar  </b></Text>
            </Box>
            <Spacer/>

            <Box>
           { navSmall && <Box   display="flex" alignItems='baseline' gap="15px">
                <Button  >Home</Button>
                <Button  >About Me</Button>
                <Button  >Skills</Button>
                <Button  >Projects</Button>
                <Button  >Contact & Resume</Button>
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
              <MenuItem> Home</MenuItem>
              <MenuItem>About Me</MenuItem>
              <MenuItem>skills</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem> Contact & Resume</MenuItem>
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