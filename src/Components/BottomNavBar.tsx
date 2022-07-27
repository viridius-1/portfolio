import { FC } from "react"
import {Avatar, Flex, Text} from "@chakra-ui/react"
import { BsArrowUp } from 'react-icons/bs'
import { Player } from '@lottiefiles/react-lottie-player';


export const BottomNavBar: FC = () => {

    return (
        <Flex alignItems={"center"} justifyContent="space-around" >
            <Text>www.raheem.design</Text>
            
            <Flex >
                {/* <Player src={}></Player> */}
            </Flex>

            <Avatar bg="black" icon={<BsArrowUp color="white" />} />
        </Flex>
    )
}