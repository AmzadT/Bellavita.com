import { Box, Text } from "@chakra-ui/react"

const ShopByNotes = () => {
    return (
        <Box width='100%' mb={20}>
            <Text fontSize='25px' color='black' textAlign='center' mb={10} mt={10}>SHOP BY NOTES</Text>

            <Box width='80%' display='flex' justifyContent='center' alignItems='center' margin='auto' gap={30}>


                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_616_34fc5435-b516-44d1-bdeb-7ac8103c5c792.webp?v=1725617393&width=300"
                            alt="Rose"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Rose</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_6172.webp?v=1725617393&width=300"
                            alt="Citrusy"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Citrusy</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_618.webp?v=1725617393&width=300"
                            alt="White Floral"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>White Floral</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_619.webp?v=1725617393&width=300"
                            alt="Aquatic"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Aquatic</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_620.webp?v=1725617394&width=300"
                            alt="Musk"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Musk</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_621.webp?v=1725617393&width=300"
                            alt="Spicy"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Spicy</Text>
                </Box>

                <Box>
                    <Box position="relative" overflow="hidden">
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/Mask_Group_622.webp?v=1725617393&width=300"
                            alt="Woody"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>Woody</Text>
                </Box>


            </Box>
        </Box>
    )
}

export default ShopByNotes
