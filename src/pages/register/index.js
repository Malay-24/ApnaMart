import React from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, Divider, FormHelperText, InputLeftAddon, InputGroup, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, InputLeftElement } from '@chakra-ui/react'
import Link from 'next/link'

const RegisterPage = () => {
    return (
        <Container mt="20px">
            <Card border="1px solid #e4e4e4">
                <CardBody>
                    <Heading fontWeight="medium">Create Account</Heading>
                    <FormControl mt="4">
                        <FormLabel>Your name</FormLabel>
                        <Input placeholder="First and last name " />
                    </FormControl>
                    <FormControl mt="4">
                        <FormLabel>Mobile number</FormLabel>
                        <HStack spacing="4">
                            <NumberInput maxW="80px" value="+91">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Input placeholder="Mobile number" />
                        </HStack>
                    </FormControl>
                    <FormControl mt="4">
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="At least 6 characters" />
                        <FormHelperText fontSize="13px">Passwords must be at least 6 characters.</FormHelperText>
                    </FormControl>
                    <Text fontSize="14px" mt="4">By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply</Text>
                    <Button
                        mt="4"
                        type='submit'
                        w='100%'
                        bg="#F3A847"
                        _hover={{
                            bg: "#EFBE42"
                        }}
                    >
                        Continue
                    </Button>
                    <Divider mx="auto" my="5" w="90%" height="1px" bg="#e4e4e4" />
                    <Text fontSize="13px" mt="4">Already have an account? <Link href="/login">Sign in</Link> Buying for work? Create a free business account</Text>
                    <Text fontSize="13px" mt="4">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export default RegisterPage