import { Box, Center, Flex, HStack, Icon, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { BottomNavBar } from "../Components/BottomNavBar";
import { TopNavBar } from "../Components/TopNavBar";
import { BsArrowRight } from 'react-icons/bs'
import { Player } from '@lottiefiles/react-lottie-player';
import Xd from '../assets/lotties/blobs/XDBlob.json';
import Photoshop from '../assets/lotties/blobs/PhotoshopBlob.json';
import Figma from '../assets/lotties/blobs/FigmaBlob.json';
import Illustrator from '../assets/lotties/blobs/IllustratorBlob.json';
import AfterEffect from '../assets/lotties/blobs/AfterEffectsBlob.json';
import Invision from '../assets/lotties/blobs/InvisionBlob.json';
import xdPic from '../assets/img/adobe-xd-logo-png-transparent.png'
import illustratorPic from '../assets/img/Illustrator.png'
import figmaPic from '../assets/img/figma-1-logo-png-transparent.png'
import photoshopPic from '../assets/img/photoshop.png'
import afterEffectPic from '../assets/img/afterEffects.png'
import invisionPic from '../assets/img/invision-studio-3.png'

export const Home: FC = () => {

    return (
        <Box>
            <Box pl={"10em"} pr={"10em"}>

                <TopNavBar></TopNavBar>
                                        
                <SimpleGrid columns={3} spacing={3} width="33em" fontSize={13} mt={20}>
                    <Text>Projects</Text>
                    <Text>Branding</Text>
                    <Text>Animation</Text>
                    <Text>UX In Real Life</Text>
                    <Text>Illustrations</Text>
                    <Text>UI Laboratory</Text>
                </SimpleGrid>

                <Box mt={16} width="25em">
                    <Box>
                        Hi,
                    </Box>

                    <Box fontSize={"42px"} lineHeight={1.0} fontWeight="bold">Design Specialist</Box>
        
                    <Flex justifyContent={"end"}><Box pr={1}>Here</Box></Flex>

                </Box>

                <Box mt={6} width={"32em"} fontSize={12} >
                    4 years of high end experience leveraging data and insight to craft great user experiences for mobile and web platforms.
                    I Design at the crossroads of aesthetics and memorable user experiences.
                </Box>

                <Box fontSize={12} mt={2}>I'm based in Lagos, Nigeria.</Box>

                <Link color={"#1F6BB7"} fontSize={12}>Salam_olatunji@yahoo.com</Link>

                <HStack mt={12}  >
                    <Box pr={8}>Latest Work</Box>

                    <HStack color={"#9C9C9C"} fontSize={11} cursor="pointer">
                        <Text >View all  </Text>
                        <Icon as={BsArrowRight}></Icon>
                    </HStack>
                </HStack>

                <HStack mt={8} spacing={"16"}>
                    <Box bg={"#EFEFEF"} h={"60"} w={"80"}>

                    </Box>
                    <Box bg={"#EFEFEF"} h={"60"} w={"80"}>

                    </Box>
                    <Box bg={"#EFEFEF"} h={"60"} w={"80"}>

                    </Box>
                </HStack>

                <Center mt={24} width={"100%"} height={72} bgGradient='linear(to-r, #292D32, #000000)' >
                    <Box color={"white"} fontSize={18} fontWeight="semibold" px={80}>
                        The greater the need to 'interact' with computerized objects to solve problems, the more important it is to have a pleasurable 'experience' doing so.
                    </Box>
                </Center>

                <Center mt={24} fontSize={32} fontWeight="bold">
                    What I do best
                </Center>

                <Center mt={8} px={80}>
                    When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                    I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                </Center>

                <HStack mt={28} spacing={"28"}>
                    <VStack justifyContent={"start"} alignItems="start" w={"20em"}> 
                        <Box bg={"#EFEFEF"} h={"20em"} w={"100%"}>

                        </Box>
                        
                        <Text pt={3} fontWeight={"semibold"}>UI/UX Design</Text>
                        
                        <Text pt={2} fontSize={12} noOfLines={3} textAlign="justify" >When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                            I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                        </Text>
                        
                        <HStack pt={3} alignSelf={"flex-end"} color={"#9C9C9C"} fontSize={11} cursor="pointer">
                            <Text >View all  </Text>
                            <Icon as={BsArrowRight}></Icon>
                        </HStack>
                    </VStack>
                    
                    <VStack justifyContent={"start"} alignItems="start" w={"20em"}> 
                        <Box bg={"#EFEFEF"} h={"20em"} w={"100%"}>

                        </Box>
                        
                        <Text pt={3} fontWeight={"semibold"}>Graphic Design & Illustrations</Text>
                        
                        <Text pt={2} fontSize={12} noOfLines={3} textAlign="justify" >When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                            I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                        </Text>
                        
                        <HStack pt={3} alignSelf={"flex-end"} color={"#9C9C9C"} fontSize={11} cursor="pointer">
                            <Text >View all  </Text>
                            <Icon as={BsArrowRight}></Icon>
                        </HStack>
                    </VStack>
                    
                    <VStack justifyContent={"start"} alignItems="start" w={"20em"}> 
                        <Box bg={"#EFEFEF"} h={"20em"} w={"100%"}>

                        </Box>
                        
                        <Text pt={3} fontWeight={"semibold"}>Motion Design</Text>
                        
                        <Text pt={2} fontSize={12} noOfLines={3} textAlign="justify" >When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                            I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                        </Text>
                        
                        <HStack pt={3} alignSelf={"flex-end"} color={"#9C9C9C"} fontSize={11} cursor="pointer">
                            <Text >View all  </Text>
                            <Icon as={BsArrowRight}></Icon>
                        </HStack>
                    </VStack>
                    
                </HStack>

            </Box>

            <Box mt={24} width={"100%"} height={"100em"} bgColor="#000000" color={"white"}>

                <HStack fontSize={40} pt={20} fontWeight="semibold" justifyContent={'center'}>
                    <Text>Tools I Use And Where I've Used Them</Text>
                </HStack>
                
                <HStack  pt={8} fontSize={13} justifyContent={'center'} >
                    <Text width={"43%"}>
                        When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                         I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                    </Text>
                </HStack>

                <Flex mt={24} overflow={"hidden"}>
                    
                    <Box position={"relative"}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={xdPic} width={"20%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >90%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={Xd} > </Player>
                    </Box>
                    
                    <Box position={"relative"} mt={32}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={illustratorPic} width={"20%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >90%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={Illustrator} > </Player>
                    </Box>
                    
                    <Box position={"relative"}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={photoshopPic} width={"20%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >70%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={Photoshop} > </Player>
                    </Box>
                    
                    <Box position={"relative"} mt={32}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={afterEffectPic} width={"20%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >80%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={AfterEffect} > </Player>
                    </Box>
                    
                    <Box position={"relative"}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={figmaPic} width={"15%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >70%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={Figma} > </Player>
                    </Box>
                    
                    <Box position={"relative"} mt={32}>
                        
                        <VStack position={"absolute"} zIndex={1} marginTop={"35%"} width={"100%"} height={"100%"}>
                            <Image src={invisionPic} width={"20%"} height={"auto"} ></Image>
                            <Text fontSize={12} color="white" >60%</Text>
                        </VStack>
                        
                        <Player autoplay loop src={Invision} > </Player>
                    </Box>
                    
                </Flex>

                

            </Box>
           
            <Box mt={"50vh"} pl={"10em"} pr={"10em"}>
                <BottomNavBar></BottomNavBar>
            </Box>

        </Box>
    )
}