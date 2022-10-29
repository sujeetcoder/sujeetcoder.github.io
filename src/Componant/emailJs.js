import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Textarea,
    Button,
  } from '@chakra-ui/react'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { headline, yellow } from '../theme/color';

export const ContactUs = () => {
  const form = useRef();

  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [message,setMessage] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)
  const handleMessChange = (e) => setMessage(e.target.value)

  const isError = input === ''
  const isError2 = name === ''

  const sendEmail = (e) => {
    /* e.preventDefault(); */
    console.log("hhhhh")
    let data = {
      user_name:name,
      user_email:input,
      message:message
    }
    console.log(data)
    console.log(e.target)
    emailjs.send('service_3uomgux', 'template_pvagz2o', data, 'D7VO2Sz3ljOslaxDo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  

  return (
    <Box w={["80%","70%","60%","50%","40%"]} >
    <FormControl isInvalid={isError}   ref={form} >
      <FormLabel>Name</FormLabel>
      <Input color={headline} placeholder='Name' bgColor="white" type="text" name="user_name" value={name} onChange={handleNameChange} />
      {!isError2 ? (
        <FormHelperText>
          Enter your name for future reference
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input color={headline} placeholder='Message' bgColor="white"  type='email' value={input} name="user_email" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your email for future reference
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      
      <FormLabel>Message</FormLabel>
      <Textarea onChange={handleMessChange} color={headline} placeholder='Message' bgColor="white" name="message" value={message} />
      <Button disabled={isError||isError2} mt="20px" bgColor={yellow} onClick={sendEmail} > Send </Button>
    </FormControl>
    </Box>
  );
};
