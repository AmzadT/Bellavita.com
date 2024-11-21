import { Box, Text } from "@chakra-ui/react"

const Products = () => {
    return (
        <Box width='100%' mb={20} mt={30}>
            <Text fontSize='30px' color='black' fontWeight='light' textAlign='center' mb={10} mt={10}>BESTSELLERS <span style={{ color: '#AFAFAF7F' }}>| NEW ARRIVALS</span></Text>
        </Box>
    )
}

export default Products
