import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Textarea,
    Button,
    Text,
    useToast,
  } from '@chakra-ui/react'

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { headline, yellow } from '../theme/color';

export const ContactUs = () => {

  let sendmail = localStorage.getItem("sendmail") || false
  if(sendmail==="true"){
      sendmail=true
  }
  
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [message,setMessage] = useState('')
  const [emailErr,setEmailErr] = useState(true)
  const [sendMail,setSendMail] = useState(sendmail)
  const toast = useToast()

  useEffect(()=>{
    if(name==''){
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
  },[name])

  const handleInputChange = (e) => setInput(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)
  const handleMessChange = (e) => setMessage(e.target.value)

  const isError = input === ''
  const isError2 = name === ''

  const sendEmail = (e) => {
    /* e.preventDefault(); */
    console.log("email send")
    let data = {
      user_name:name,
      user_email:input,
      message:message
    }
    console.log(data)
    
    /* emailjs.send("service_3uomgux","template_pvagz2o"); */
    emailjs.send('service_3uomgux', 'template_pvagz2o', data, 'D7VO2Sz3ljOslaxDo')
      .then((result) => {
          console.log(result.text);
          localStorage.setItem("sendmail", true)
          setSendMail(true)
          toast({
            title: 'Email sent',
            description: "Your email sent to Sujeet Kumar successfully",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
      }, (error) => {
          console.log(error);
          toast({
            title: 'Email not sent',
            description: "Something went wrong please check and resend email again",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      });
  };

  
  

  return (
    <Box w={["80%","70%","60%","50%","40%"]} >
    <FormControl isInvalid={isError} >
      <FormLabel>Name</FormLabel>
      <Input color={headline} disabled={sendMail} placeholder='Name' bgColor="white" type="text" name="user_name" value={name} onChange={handleNameChange} />
      {!isError2 ? (
        <FormHelperText>
          Enter your name for future reference
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input color={headline} disabled={emailErr||sendMail} placeholder='Email' bgColor="white"  type='email' value={input} name="user_email" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your email for future reference
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      
      <FormLabel>Message</FormLabel>
      <Textarea onChange={handleMessChange} disabled={sendMail} color={headline} placeholder='Message' bgColor="white" name="message" value={message} />
      <Button disabled={isError||isError2||sendMail} mt="20px" bgColor={yellow} onClick={sendEmail} > Send </Button>
    </FormControl>
    {
    sendMail && <Text mt="20px" color={headline} > You allready sent a email to us. Please wait for response from my side. Thanks! </Text>
    }
    </Box>
  );
};
