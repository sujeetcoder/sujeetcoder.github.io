import { Box, Button, useToast } from "@chakra-ui/react"


export function ToastExample({children,name,des}) {
    const toast = useToast()
    return (
      <Box
        onMouseEnter={() =>
          toast({
            title: name,
            description: des,
            status: 'info',
            duration: 6000,
            isClosable: true,
          })
        }
      >
        {children}
      </Box>
    )
  }