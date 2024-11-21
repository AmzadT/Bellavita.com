import { Box } from "@chakra-ui/react"

const Offers = () => {
    return (
        <Box mt={20}>
            <img src="https://bellavitaorganic.com/cdn/shop/files/download-the-app-banner-desktop.webp?v=1725617524&width=1400" />

            <Box display='flex' margin='auto' justifyContent='center' mt={10}>
                <Box
                    position="relative"
                    overflow="hidden"
                    transition="transform 0.4s ease-in-out"
                    _hover={{ transform: "scale(1.05)" }}
                >
                    <img
                        style={{ height: '170px', width: '1100px', transition: 'transform 0.4s ease-in-out' }}
                        src="https://bellavitaorganic.com/cdn/shop/files/desktop_banner.webp?v=1725617566&width=1400"
                        alt="Desktop Banner"
                    />
                </Box>
            </Box>

        </Box>
    )
}

export default Offers
