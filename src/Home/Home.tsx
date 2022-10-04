import { Box, Button, Center, Circle, Flex, HStack, Icon, Image, Input, keyframes, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
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
import byteql from '../assets/img/ByteQL.png'
import redem from '../assets/img/redem.png'
import digitalFish from '../assets/img/digital_fish.png'
import wirepick from '../assets/img/wirepick.png'
import pandar from '../assets/img/pandar.png'
import uiux from '../assets/img/UI-UX.png'
import graphics_design from '../assets/img/graphics_design.png'
import motion_design from '../assets/lotties/Motion_Design_Lottie.json';
import work1 from '../assets/img/Work1.png'
import work2 from '../assets/img/Work2.png'
import work3 from '../assets/img/Work3.png'
import { Testimonial } from "./Components/Testimonial";
import testimonialDatas from "./data.json";
import { ITestimonial } from "./interface";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


const fade = keyframes`
  from {opacity: .2} 
  to {opacity: 1}
`;

export const Home: FC = () => {

    const [currentTestimonial, setcurrentTestimonialState] = useState(0);

    const [avatarState, setAvatarState] = useState<ITestimonial[]>(testimonialDatas)

    const [prevState, setPrevState] = useState("none")
    
    const [nextState, setNextState] = useState("none")
    
    const fadeAnimation = `${fade} 2s linear`;

    useEffect(() => {
        setAvatarState(testimonialDatas);
    }, [])

    const toggleTracksDisplay = (isMouseEnter: boolean) => {

        if(isMouseEnter){
            
            if (currentTestimonial > 0) setPrevState("block");
            
            if (avatarState.length - 1 > currentTestimonial) setNextState("block");

        }else{
            setPrevState("none")
            setNextState("none")
        }
    }

    const nextTrack = () => {
        
        let curr = currentTestimonial

        if (avatarState.length - 1 > currentTestimonial){
            
            curr+= 1;

            setcurrentTestimonialState(initial => ++initial)

            if (curr === avatarState.length - 1) setNextState("none")               
            
            setPrevState("block")
        }       
    }
    
    const prevTrack = () => {
        
        let curr = currentTestimonial;

        if (currentTestimonial > 0){

            curr-=1;
            
            setcurrentTestimonialState(initial => --initial)

            if (curr === 0) setPrevState("none")

            setNextState("block")  
        }        
    }


    return (
        <Box>
            <Box px={"8%"}>

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

                {/* LATEST WORKS CARDS */}
                <HStack mt={8} spacing={"16"}>
                    <HStack bg={"#EFEFEF"} h={"60"} w={"80"} justifyContent="center" alignItems={"end"}>
                        <Image src={work1} width={"90%"} height={"75%"} />
                    </HStack>
                    <HStack bg={"#EFEFEF"} h={"60"} w={"80"} justifyContent="center">
                        <Image src={work2} width={"90%"} height={"70%"} />
                    </HStack>
                    <HStack bg={"#EFEFEF"} h={"60"} w={"80"} justifyContent="center" alignItems={"end"}>
                        <Image src={work3} width={"80%"} height={"90%"} />
                    </HStack>
                </HStack>

                <Center mt={24} width={"100%"} height={72} bgGradient='linear(to-r, #292D32, #000000)' >
                    <Box color={"white"} fontSize={18} fontWeight="semibold" px={"25%"}>
                        The greater the need to 'interact' with computerized objects to solve problems, the more important it is to have a pleasurable 'experience' doing so.
                    </Box>
                </Center>

                <Center mt={24} fontSize={32} fontWeight="bold">
                    What I do best
                </Center>

                <Center mt={8} px={"25%"}>
                    When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                    I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                </Center>

                {/* UI/UX GRAPHICS AND MOTION CARDS */}
                <HStack mt={28} spacing={"28"}>
                    <VStack justifyContent={"start"} alignItems="start" w={"20em"}> 

                        <Box h={"20em"} w={"100%"}>
                            <Image src={uiux} w={"100%"} h={"100%"} />
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
                        <Box h={"20em"} w={"100%"}>
                            <Image src={graphics_design} w={"100%"} h={"100%"} />
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
                        <Box h={"20em"} w={"100%"} boxShadow={"xs"}>
                            <Player autoplay loop src={motion_design} > </Player>
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

            {/* DARK SECTION BOX */}
            <Box mt={24} width={"100%"} position="relative">

                {/* COMPANIES LOGO */}
                <HStack position={"absolute"} zIndex={1} height="10em" width="100%" bottom={1} >

                    <HStack bg={"white"} boxShadow={"base"} width={"100%"} mt={"10em"} height={"100%"} mx="10%" spacing={"8%"} justifyContent="center" >

                        <Image h="2.2em" width={"auto"} src={byteql} />
                        <Image h="2.2em" width={"auto"} src={redem} />
                        <Image h="2.2em" width={"auto"} src={digitalFish} />
                        <Image h="2.2em" width={"auto"} src={wirepick} />
                        <Image h="2.2em" width={"auto"} src={pandar} />

                    </HStack>

                </HStack>

                {/* DARK SECTION  */}
                <Box height={"170em"} bgColor="#000000" color={"white"}>

                    <HStack fontSize={40} pt={20} fontWeight="semibold" justifyContent={'center'}>
                        <Text>Tools I Use And Where I've Used Them</Text>
                    </HStack>

                    <HStack pt={8} fontSize={13} justifyContent={'center'} >
                        <Text width={"43%"}>
                            When i'm not designing, I am either spending time with family or saving the world from bad guys along with other online heroes from all over the world in Call of Duty : Mobile.
                            I'm simply just a super husband/dad always trying to save the world by building stuffs and having fun.
                        </Text>
                    </HStack>

                    {/* ANIMATION BLOBS */}
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

                    {/* TIMELINES */}
                    <Box mt={"24"} px={"8%"} position={"relative"}>

                        <Box position={"absolute"} zIndex={"1"} border={"0px solid red"} height={"90em"}></Box>

                        <Box >

                            <HStack>
                                <Box width={"45%"}> </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="1.2em" bg="black" border={"3px solid"} ></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}> </Box>
                            </HStack>

                            <HStack mt={20}>
                                <Box width={"45%"}> </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="3em" bg="black" border={"4px"} ><Circle size="1.2em" bg="black" border={"3px solid"} ></Circle></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}>

                                    <VStack alignItems={"start"}>
                                        <HStack spacing={6}>
                                            <Text fontWeight={"bold"} fontSize={40}> Service support </Text>
                                            <Text fontSize={13} color={"#9C9C9C"}>2019</Text>
                                        </HStack>

                                        <Text color="#ED2124">Wirepick Inc.</Text>
                                        <Text>
                                            Wavepalm gummies chocolate bar pie cake pastry. Sweet muffin sugar plum pastry wafer lemon drops biscuit topping carrot cake. Muffin apple pie candy canes gingerbread halvah halvah. Toffee toffee powder powder candy canes. Wafer danish donut gingerbread carrot cake marshmallow tart.
                                            Apple pie jelly beans chocolate cake. Liquorice muffin brownie jujubes gingerbread dragée donut. Marshmallow pudding chupa chups.
                                        </Text>

                                    </VStack>

                                </Box>
                            </HStack>

                            <HStack mt={12}>
                                <Box width={"45%"}>

                                    <VStack alignItems={"end"}>
                                        <HStack spacing={6}>
                                            <Text fontSize={13} color={"#9C9C9C"}>2019</Text>
                                            <Text fontWeight={"bold"} fontSize={40}>UI/UX Designer</Text>
                                        </HStack>

                                        <Text color="#ED2124">Wavepalm</Text>
                                        <Text textAlign={"right"}>
                                            Wavepalm gummies chocolate bar pie cake pastry. Sweet muffin sugar plum pastry wafer lemon drops biscuit topping carrot cake. Muffin apple pie candy canes gingerbread halvah halvah. Toffee toffee powder powder candy canes. Wafer danish donut gingerbread carrot cake marshmallow tart.
                                            Apple pie jelly beans chocolate cake. Liquorice muffin brownie jujubes gingerbread dragée donut. Marshmallow pudding chupa chups.
                                        </Text>

                                    </VStack>

                                </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="3em" bg="black" border={"4px"} ><Circle size="1.2em" bg="black" border={"3px solid"} ></Circle></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}> </Box>
                            </HStack>

                            <HStack mt={12}>
                                <Box width={"45%"}> </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="3em" bg="black" border={"4px"} ><Circle size="1.2em" bg="black" border={"3px solid"} ></Circle></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}>

                                    <VStack alignItems={"start"}>
                                        <HStack spacing={6}>
                                            <Text fontWeight={"bold"} fontSize={40}> Design Lead </Text>
                                            <Text fontSize={13} color={"#9C9C9C"}>2021</Text>
                                        </HStack>

                                        <Text color="#ED2124">Pandar Resources</Text>
                                        <Text>
                                            Wavepalm gummies chocolate bar pie cake pastry. Sweet muffin sugar plum pastry wafer lemon drops biscuit topping carrot cake. Muffin apple pie candy canes gingerbread halvah halvah. Toffee toffee powder powder candy canes. Wafer danish donut gingerbread carrot cake marshmallow tart.
                                            Apple pie jelly beans chocolate cake. Liquorice muffin brownie jujubes gingerbread dragée donut. Marshmallow pudding chupa chups.
                                        </Text>

                                    </VStack>

                                </Box>
                            </HStack>

                            <HStack mt={12}>
                                <Box width={"45%"}>

                                    <VStack alignItems={"end"}>
                                        <HStack spacing={6}>
                                            <Text fontSize={13} color={"#9C9C9C"}>2021</Text>
                                            <Text fontWeight={"bold"} fontSize={40}>UI/UX Designer</Text>
                                        </HStack>

                                        <Text color="#ED2124">Redem</Text>
                                        <Text textAlign={"right"}>
                                            Wavepalm gummies chocolate bar pie cake pastry. Sweet muffin sugar plum pastry wafer lemon drops biscuit topping carrot cake. Muffin apple pie candy canes gingerbread halvah halvah. Toffee toffee powder powder candy canes. Wafer danish donut gingerbread carrot cake marshmallow tart.
                                            Apple pie jelly beans chocolate cake. Liquorice muffin brownie jujubes gingerbread dragée donut. Marshmallow pudding chupa chups.
                                        </Text>

                                    </VStack>

                                </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="3em" bg="black" border={"4px"} ><Circle size="1.2em" bg="black" border={"3px solid"} ></Circle></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}> </Box>
                            </HStack>

                            <HStack mt={"32"}>
                                <Box width={"45%"}> </Box>

                                <Box width={"10%"}>
                                    <HStack justifyContent={"center"}>
                                        <Circle size="3em" bg="black" border={"2px"} ><Circle size="1.2em" bg="black" border={"2px solid"} ></Circle></Circle>
                                    </HStack>
                                </Box>

                                <Box width={"45%"}> </Box>
                            </HStack>

                        </Box>

                    </Box>

                </Box>
              
            </Box>

            {/* TESTIMONIALS */}
            <Box mt={40} display="flex" justifyContent={"center"} onMouseEnter={() => toggleTracksDisplay(true)} onMouseLeave={() => toggleTracksDisplay(false)}>

                <Box position={"relative"} width={{ sm:"90%", md: "70%", lg: "50%"}} >                    
                    
                    {/* NEXT BUTTON */}
                    <Box position={"absolute"} top={"40%"} left={"103%"} cursor={"pointer"} animation={fadeAnimation} display={nextState}>
                        
                        <Box boxShadow={"base"} borderRadius={"full"} height={"2em"} width={"2em"} onClick={nextTrack} >
                            <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
                                <Icon as={IoIosArrowForward} />
                            </Flex>
                        </Box>
                        
                    </Box>
                    
                    {/* PREV BUTTON */}
                    <Box position={"absolute"} top={"40%"} right={"103%"} cursor={"pointer"} animation={fadeAnimation} display={prevState}>
                        
                        <Box boxShadow={"base"} borderRadius={"full"} height={"2em"} width={"2em"}  onClick={prevTrack} >
                            <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
                                <Icon as={IoIosArrowBack} />
                            </Flex>
                        </Box>

                    </Box>

                    {/* CAROUSEL */}
                    <Box >
                        {
                            avatarState.map((each, index) => <Testimonial key={index} index={index} currentIndex={currentTestimonial} data={each} animation={fadeAnimation} />)
                        }
                    </Box>
                
                </Box>
                            
            </Box>

            {/* SUBSCRIBE */}
            <HStack mt={24} px={"8%"} height={"12em"} spacing={0} alignItems={"end"}>

                <HStack height={"100%"} width={"70%"} bg={"#000000"} color={"white"} px={"5em"} spacing={"8%"}>
                    
                    <Box fontSize={14} fontWeight={"bold"} width={"40%"}>
                        <Text>UX In</Text>
                        <Text>Real Life.</Text>
                    </Box>

                    <Box textAlign={"left"} fontSize={12} pr={"20%"}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    </Box>
                </HStack>
                
                <Box width={"30%"} height={"50%"} bg={"#FDFDFD"} boxShadow={"sm"} px={"1em"}>

                    <HStack justifyItems={"center"} height={"100%"} spacing={3}>

                        <Box><Input borderColor={"black"} size={"xs"} placeholder='Name' /></Box>
                        <Box><Input borderColor={"black"} size={"xs"} placeholder='Email' /></Box>
                        <Box><Button px={6} fontSize={11} size={"xs"} > Subscribe </Button></Box>                                    
                        
                    </HStack>

                </Box>

            </HStack>
                 
            <Box mt={16} pl={"10em"} pr={"10em"}>
                <BottomNavBar></BottomNavBar>
            </Box>

        </Box>
    )
}