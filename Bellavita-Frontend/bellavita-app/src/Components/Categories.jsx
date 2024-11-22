import { Box, Button, Heading, Text } from '@chakra-ui/react'

const Categories = () => {
    return (
        <Box width='100%' mb={20}>
            <Text fontSize='25px' color='black' textAlign='center' mb={10} mt={10}>LUXURY CATEGORIES</Text>

            <Box width='80%' display='flex' justifyContent='center' alignItems='center' margin='auto' gap={5}>
                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"
                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/cosmetics-category-card-web_a4ad6e4b-07bf-421e-8f23-fcac380118ff.webp?v=1725617238&width=300"
                            alt="COSMETICS"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px'>COSMETICS</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Category-card-for-web-skincare2.webp?v=1725617237&width=300"
                            alt="SKINCARE"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px'>SKINCARE</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/intense_1.webp?v=1725617238&width=300"
                            alt="LUXURY PERFUMES"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px' whiteSpace='nowrap'>LUXURY PERFUMES</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Category-card-body-wash2.webp?v=1725617238&width=300"
                            alt="BATH & BODY"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px'>BATH & BODY</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Category-card-for-deo2.webp?v=1725617237&width=300"
                            alt="BODY DEOS"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px'>BODY DEOS</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Artboard_4_copy_05b3b2ed-5440-4463-b119-bedcd60ed5c1.webp?v=1725617237&width=300"
                            alt="GIFT SETS"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.2)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3} fontSize='14px'>GIFT SETS</Text>
                </Box>

            </Box>

            <Box width='80%' display='flex' justifyContent='center' alignItems='center' margin='auto' gap={5} mt={20}>
                <Box
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        as="img"
                        src="https://bellavitaorganic.com/cdn/shop/files/Fragrance-Finder-Home-Page_1200-x-400_485ebb8a-29c5-453c-bc2d-d11b70b1c291.webp?v=1729248354&width=600"
                        alt="Fragrance Finder Image"
                        transition="transform 0.4s ease-in-out"
                        _hover={{ transform: "scale(1.1)" }}
                        objectFit="cover"
                    />
                </Box>

                <Box
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        as="img"
                        src="https://bellavitaorganic.com/cdn/shop/files/Lipstick_Finder_Home_Page_1200_x_400.webp?v=1728042662&width=600"
                        alt="Lipstick Finder Image"
                        transition="transform 0.4s ease-in-out"
                        _hover={{ transform: "scale(1.1)" }}
                        objectFit="cover"
                    />
                </Box>

            </Box>

            <Box width='80%' display='flex' justifyContent='space-around' ml='85px' mt={20}>
                <Box
                    position="relative"
                    overflow="hidden"
                    width="570px"
                    height="600px"
                >
                    <Box
                        as="img"
                        src="https://bellavitaorganic.com/cdn/shop/files/Luxe-Perfumes_1_30604851-993d-4964-a86f-d9f6f73de4ec.webp?v=1725617305&width=750"
                        alt="Zoomed Product Image"
                        transition="transform 0.4s ease-in-out"
                        _hover={{ transform: "scale(1.05)" }}

                        objectFit="cover"
                    />
                </Box>


                <Box mt='50px'>
                    <Box position="relative" display="inline-block" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/2_e0b9be5c-f667-43bf-805a-3881fe628fdb.jpg?v=1714553667&width=300"
                            alt="Product Image"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />

                        <Box
                            position="absolute"
                            bottom="2"
                            left="2"
                            bg="green.400"
                            color="white"
                            px={2}
                            py={1}
                            fontSize="12px"
                            fontWeight="light"
                        >
                            23% OFF
                        </Box>
                    </Box>


                    <p style={{ fontSize: '10px', color: 'gray', marginTop: '20px' }} >EAU DE PERFUME FOR WOMEN</p>
                    <Heading as='h5' size='sm' color='gray.600' isTruncated >HOT Mess Perfume for Women - 100ml</Heading>

                    <Box display='flex' alignItems='center' ml={-2} mt={3}>
                        <img width='25px' style={{ marginBottom: '3px' }} src='https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>4.9 | </p>

                        <img width='25px' style={{ marginBottom: '1px' }} src='https://static.vecteezy.com/system/resources/thumbnails/034/211/380/small_2x/blue-checkmark-validation-social-media-png.png' />
                        <p style={{ fontSize: '12px', color: 'black' }}>(63 Reviews)</p>
                    </Box>

                    <Box display='flex' alignItems='center' mt={2} gap={2}>
                        <Text fontWeight='light' color='black'>₹849.00</Text>
                        <p style={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }}>₹1099.00</p>
                    </Box>
                    <Button _hover={{ bg: 'gray.700' }} borderRadius='none' mt={3} variant='solid' colorScheme='black' color='white' bg='black' fontSize='12px' pl='100px' pr='100px'>ADD TO CART</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Categories
