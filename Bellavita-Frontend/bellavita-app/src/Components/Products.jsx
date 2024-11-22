import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"


const Products = () => {
    return (
        <>
            <Box width='100%' mb={5} mt={30}>
                <Text fontSize='30px' color='black' fontWeight='light' textAlign='center' mb={10} mt={10}>BESTSELLERS <span style={{ color: '#AFAFAF7F' }}>| NEW ARRIVALS</span></Text>
            </Box>

            <Box width='80%' display='flex' justifyContent='space-around' ml={130} gap={10} mb={20}>

                <Box w='22%'>
                    <Box position="relative" display="inline-block" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/front_2.jpg?v=1723645186&width=300"
                            alt="Product Image"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />

                        <Box
                            position="absolute"
                            top="2"
                            left="2"
                            bg="#dfa776"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            BESTSELLER
                        </Box>

                        <Box
                            position="absolute"
                            bottom="2"
                            left="2"
                            bg="green.400"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            36% OFF
                        </Box>

                    </Box>


                    <p style={{ fontSize: '10px', color: 'gray', marginTop: '20px' }} >GIFT SET FOR MEN</p>
                    <Heading as='h5' size='xs' color='gray.600' isTruncated>Luxury Perfume gift set for Men 100ml</Heading>

                    <Box display='flex' alignItems='center' ml={-2} mt={3}>
                        <img width='25px' style={{ marginBottom: '3px' }} src='https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>4.7 | </p>

                        <img width='25px' style={{ marginBottom: '1px' }} src='https://static.vecteezy.com/system/resources/thumbnails/034/211/380/small_2x/blue-checkmark-validation-social-media-png.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>(1225 Reviews)</p>
                    </Box>

                    <Box display='flex' alignItems='center' mt={2} gap={2}>
                        <Text fontWeight='light' color='black'>₹549.00</Text>
                        <p style={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }}>₹849.00</p>
                    </Box>
                    <Button _hover={{ bg: 'gray.700' }} borderRadius='none' mt={3} variant='solid' colorScheme='black' color='white' bg='black' fontSize='12px' pl='70px' pr='70px'>ADD TO CART</Button>
                </Box>


                <Box w='22%'>
                    <Box position="relative" display="inline-block" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/1_f3651453-9ace-4b6e-b0ac-4ee2b9e5e7cd.jpg?v=1714548565&width=300"
                            alt="Product Image"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />

                        <Box
                            position="absolute"
                            top="2"
                            left="2"
                            bg="#dfa776"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            BESTSELLER
                        </Box>

                        <Box
                            position="absolute"
                            bottom="2"
                            left="2"
                            bg="green.400"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            46% OFF
                        </Box>
                    </Box>


                    <p style={{ fontSize: '10px', color: 'gray', marginTop: '20px' }} >EAU DE PERFUME FOR WOMEN</p>
                    <Heading as='h5' size='xs' color='gray.600' isTruncated>CEO man Perfume - 100ml</Heading>

                    <Box display='flex' alignItems='center' ml={-2} mt={3}>
                        <img width='25px' style={{ marginBottom: '3px' }} src='https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>4.8 | </p>

                        <img width='25px' style={{ marginBottom: '1px' }} src='https://static.vecteezy.com/system/resources/thumbnails/034/211/380/small_2x/blue-checkmark-validation-social-media-png.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>(746 Reviews)</p>
                    </Box>

                    <Box display='flex' alignItems='center' mt={2} gap={2}>
                        <Text fontWeight='light' color='black'>₹489.00</Text>
                        <p style={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }}>₹899.00</p>
                    </Box>
                    <Button _hover={{ bg: 'gray.700' }} borderRadius='none' mt={3} variant='solid' colorScheme='black' color='white' bg='black' fontSize='12px' pl='70px' pr='70px'>ADD TO CART</Button>
                </Box>


                <Box w='22%'>
                    <Box position="relative" display="inline-block" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/1-b.jpg?v=1725628484&width=300"
                            alt="Product Image"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />

                        <Box
                            position="absolute"
                            top="2"
                            left="2"
                            bg="#dfa776"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            BESTSELLER
                        </Box>

                        <Box
                            position="absolute"
                            top="2"
                            right="2"
                            bg="green.400"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            51% OFF
                        </Box>
                    </Box>


                    <p style={{ fontSize: '10px', color: 'gray', marginTop: '20px' }} >EAU DE PERFUME FOR WOMEN</p>
                    <Heading as='h5' size='xs' color='gray.600' isTruncated>Day Night Gift Set</Heading>

                    <Box display='flex' alignItems='center' ml={-2} mt={3}>
                        <img width='25px' style={{ marginBottom: '3px' }} src='https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>4.7 | </p>

                        <img width='25px' style={{ marginBottom: '1px' }} src='https://static.vecteezy.com/system/resources/thumbnails/034/211/380/small_2x/blue-checkmark-validation-social-media-png.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>(33 Reviews)</p>
                    </Box>

                    <Box display='flex' alignItems='center' mt={2} gap={2}>
                        <Text fontWeight='light' color='black'>₹599.00</Text>
                        <p style={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }}>₹1199.00</p>
                    </Box>
                    <Button _hover={{ bg: 'gray.700' }} borderRadius='none' mt={3} variant='solid' colorScheme='black' color='white' bg='black' fontSize='12px' pl='70px' pr='70px'>ADD TO CART</Button>
                </Box>


                <Box w='22%'>
                    <Box position="relative" display="inline-block" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/1_7_5a634208-c5a4-4965-aa34-858e2df1798d.jpg?v=1723024188&width=300"
                            alt="Product Image"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />

                        <Box
                            position="absolute"
                            top="2"
                            left="2"
                            bg="#dfa776"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            BESTSELLER
                        </Box>

                        <Box
                            position="absolute"
                            top="2"
                            right="2"
                            bg="green.400"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="light"
                        >
                            29% OFF
                        </Box>
                    </Box>


                    <p style={{ fontSize: '10px', color: 'gray', marginTop: '20px' }} >OUR BEST-SELLING 4 LIP SHADES</p>
                    <Heading as='h5' size='xs' color='gray.600' isTruncated>Kiss Proof Liquid Lipstick - 4 x 2ml (Mini Set)</Heading>

                    <Box display='flex' alignItems='center' ml={-2} mt={3}>
                        <img width='25px' style={{ marginBottom: '3px' }} src='https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>4.6 | </p>

                        <img width='25px' style={{ marginBottom: '1px' }} src='https://static.vecteezy.com/system/resources/thumbnails/034/211/380/small_2x/blue-checkmark-validation-social-media-png.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>(20 Reviews)</p>
                    </Box>

                    <Box display='flex' alignItems='center' mt={2} gap={2}>
                        <Text fontWeight='light' color='black'>₹499.00</Text>
                        <p style={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }}>₹699.00</p>
                    </Box>
                    <Button _hover={{ bg: 'gray.700' }} borderRadius='none' mt={3} variant='solid' colorScheme='black' color='white' bg='black' fontSize='12px' pl='70px' pr='70px'>ADD TO CART</Button>
                </Box>

            </Box>

            <Box border='1px solid gray' display='flex' justifyContent='center' alignItems='center' width='18%' p={3} margin='auto' cursor='pointer' _hover={{bg: 'black', color: 'white', transition: '0.3s ease-in-out'}}>
                <Text>VIEW ALL</Text>
            </Box>

            <Box mt={20} mb={20}>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2-UPB.webp?v=1727436765&width=1400'/>
            </Box>
        </>
    )
}

export default Products
