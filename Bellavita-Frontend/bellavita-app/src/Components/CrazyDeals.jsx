import { Box, Text } from "@chakra-ui/react"

const CrazyDeals = () => {
    return (
        <Box width='100%' mb={20}>
            <Text fontSize='25px' color='black' textAlign='center' mb={10} mt={10}>CRAZY DEALS</Text>

            <Box width='80%' display='flex' justifyContent='center' alignItems='center' margin='auto' gap={30}>
                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                        height="auto"
                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/678-548-01.webp?v=1727432899&width=400"
                            alt="SELF LOVE KIT"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>SELF LOVE KIT</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                        height="auto"
                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/678-548_9118a1ea-6f3a-478c-9e55-28df0b674267.webp?v=1728371651&width=400"
                            alt="BIG BEAUTY BASH"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>BIG BEAUTY BASH</Text>
                </Box>

                <Box>
                    <Box
                        position="relative"
                        overflow="hidden"

                        height="auto"
                    >
                        <Box
                            as="img"
                            src="https://bellavitaorganic.com/cdn/shop/files/678-548_eb6ded9c-5f74-4726-baa0-fb6a86472da3.webp?v=1727433124&width=400"
                            alt="BADE MIYA CHHOTE MIYA"

                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.1)" }}
                        />
                    </Box>
                    <Text textAlign='center' mt={3}>BADE MIYA CHHOTE MIYA</Text>
                </Box>

            </Box>
        </Box>
    )
}

export default CrazyDeals
