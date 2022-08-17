import { Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import {RiHomeFill} from 'react-icons/ri'
import logo from '../assets/img/Logo.svg'

export const TopNavBar: FC = () => {

    return (
        <Flex justifyContent={"space-between"} alignContent={"space-between"}>
            
            <Image src={logo} h={"5em"} ></Image>

            <HStack spacing={12}>
                <VStack color={"#ED2124"}>
                    <Icon as={RiHomeFill} boxSize={5}></Icon>
                    <Text>Home</Text>
                </VStack>
                <VStack as={"a"}>
                    {/* <Icon as={RiHomeFill}></Icon> */}
                    <Text>Projects</Text>
                </VStack>
                <VStack>
                    {/* <Icon as={RiHomeFill}></Icon> */}
                    <Text>Contact me</Text>
                </VStack>
                <VStack>
                    {/* <Icon as={RiHomeFill}></Icon> */}
                    <Text>About me</Text>
                </VStack>
            </HStack>
        </Flex>
        
    )
}