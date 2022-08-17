import { FC } from "react"
import {Avatar, Flex, HStack, Text} from "@chakra-ui/react"
import { BsArrowUp } from 'react-icons/bs'
import { Player } from '@lottiefiles/react-lottie-player';
import Behance from '../assets/lotties/socials/Behance.json'
import Dribbble from '../assets/lotties/socials/Dribbble.json'
import Twitter from '../assets/lotties/socials/Twitter.json'
import LinkedIn from '../assets/lotties/socials/Linkedin.json'


export const BottomNavBar: FC = () => {

    return (
        <Flex alignItems={"center"} justifyContent="space-between" >
            <Text fontWeight={600} fontSize={16} >www.raheem.design</Text>

            <HStack justifyContent={"center"}>
                <Player autoplay loop src={Dribbble} style={{ height: '100px', width: '100px', marginRight: '1px' }} ></Player>
                <HStack spacing={10} fontSize={14} paddingRight={150} >
                    <Player autoplay loop src={Behance} style={{ height: '30px', width: '30px' }}></Player>
                    <Player autoplay loop src={Twitter} style={{ height: '20px', width: '20px' }}></Player>
                    <Player autoplay loop src={LinkedIn} style={{ height: '20px', width: '20px' }}></Player>
                </HStack>
            </HStack>
                        
            <Avatar bg="black" icon={<BsArrowUp color="white" />} />
        </Flex>
    )
}