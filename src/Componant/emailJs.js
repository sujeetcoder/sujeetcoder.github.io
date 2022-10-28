import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Textarea,
  } from '@chakra-ui/react'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { headline, red, yellow } from '../theme/color';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hhhhh")
    /* emailjs.sendForm('service_3uomgux', 'template_pvagz2o', form.current, 'D7VO2Sz3ljOslaxDo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); */
  };

  /* second */
  const [input, setInput] = useState('')
  const [name, setName] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)

  const isError = input === ''
  const isError2 = name === ''

  return (
    <Box w={["80%","70%","60%","50%","40%"]} >
    <FormControl isInvalid={isError}   ref={form} onSubmit={sendEmail}>
      <FormLabel>Name</FormLabel>
      <Input color={headline} placeholder='Name' bgColor="white" type="text" name="user_name" onChange={handleNameChange} />
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
      <Textarea color={headline} placeholder='Message' bgColor="white" name="message" />
      <Input disabled={isError||isError2} mt="20px" bgColor={yellow} type="submit" value="Send" />
    </FormControl>
    </Box>
  );
};