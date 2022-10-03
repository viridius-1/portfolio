import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { ITestimonial } from "../interface";

interface Props {
    data: ITestimonial,
    currentIndex?: number,
    index?: number,
    animation?: string
}

export const Testimonial: FC<Props> = ({data, currentIndex, index, animation}) => {

    const { company, img, name, note, role } = data;

    const [displayState, setDisplayState] = useState("none")

    useEffect(() => {        

        setDisplayState(index === currentIndex ? "block" : "none")
    }, [currentIndex, index])

    return (
        <Box display={displayState} animation={animation}>
            <HStack  spacing={12} >

                <VStack spacing={1}>

                    <Text fontSize={13} textAlign={"center"}>
                        {note}
                    </Text>

                    <Text pt={3} fontSize={20} color="#011624" fontWeight="bold"> {name} </Text>

                    <Box fontSize={11}>{role} - <Box as="span" color="#1F6BB7" >{company}.</Box></Box>

                </VStack>

                <Avatar src={ require(`../../assets/img/users/${img}`)} boxSize="14em" />

            </HStack>
        </Box>        
    );
}