import { Box, Button, useToast } from "@chakra-ui/react"

let chh = 0

export function ToastExample({children,name,des}) {
    const toast = useToast()
    return (
      <Box
        onMouseEnter={() =>{
          if(chh<2){
            chh++
            return toast({
              title: name,
              description: des,
              status: 'info',
              duration: 6000,
              isClosable: true,
            })
          } else{
            console.log("aala")
          }

          }
        }
      >
        {children}
      </Box>
    )
  }