import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode, useColorModeValue } from './ui/color-mode';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const buttonBg = useColorModeValue("gray.100", "gray.700");
    const buttonHover = useColorModeValue("gray.200", "gray.600");
    const buttonText = useColorModeValue('black','white');
  return <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100","gray.900")}>
    <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base:"column",
            sm:"row"
        }}
        p={"16"}
    >
        <Text
            fontSize={{base: "4xl", sm: "28"}}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="to-r"
            // bgGradient="linear(to-r, cyan.400, blue.500)"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip="text"
        >
            <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
                <Button
                    bg={buttonBg}
                    color={buttonText}
                    _hover={{ bg: buttonHover }}
                >
                    <CiSquarePlus fontSize={20} />
                </Button>
            </Link>
            <Button color={useColorModeValue("black","white")} onClick={toggleColorMode} bg={buttonBg} _hover={{ bg: buttonHover }}>
                {colorMode === "light" ? "⏾" : "𖤓"}
            </Button>
        </HStack>
    </Flex>
  </Container>
}

export default Navbar
