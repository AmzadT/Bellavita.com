import { Box, Text } from "@chakra-ui/react"

const Info = () => {
    return (
        <Box width='100%'>
            <Text fontSize='25px' color='black' textAlign='center' mb={10} mt={10}>WHY BELLAVITA?</Text>

            <Box width='80%' display='flex' justifyContent='space-around' margin='auto' gap={20}>

                <Box width='20%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <img style={{ marginBottom: '5px' }} width='40%' src="https://static.vecteezy.com/system/resources/previews/029/709/838/non_2x/cruelty-free-icon-not-tested-on-animals-with-rabbit-silhouette-label-illustration-free-vector.jpg" />
                    <Text mb={3} fontSize='15px' fontWeight='light'>CRUELTY FREE</Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Kindness in every bottle: </Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Our commitment to cruelty-free Products.</Text>
                </Box>

                <Box idth='20%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <img style={{ marginBottom: '25px' }} width='30%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUScZJ4Y5TMRj2zD71I8DuG1m3yLLAI9u6ng&s" />
                    <Text mb={3} fontSize='15px' fontWeight='light'>FRAGRANCE FORWARD</Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Luxurious & imported perfume oils in </Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>every product</Text>
                </Box>

                <Box idth='20%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <img style={{ marginBottom: '5px', marginTop: '-15px' }} width='50%' src="https://t4.ftcdn.net/jpg/04/20/80/63/360_F_420806323_Yrc6dFJVKOPKxqpKas2LHaB0Xr6rvnMK.jpg" />
                    <Text mb={3} fontSize='15px' fontWeight='light'>CAFFORDABLE LUXURY</Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Offering Premium Quality and </Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Elegance at a Reasonable Price</Text>
                </Box>

                <Box idth='20%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <img style={{ marginBottom: '5px', marginTop: '-20px' }} width='50%' src="https://st.depositphotos.com/1915171/52140/v/450/depositphotos_521403202-stock-illustration-genders-icon-inclusion-sign-gender.jpg" />
                    <Text mb={3} fontSize='15px' fontWeight='light'>GENDER NEUTRAL</Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>Elevate your self-care routine with </Text>
                    <Text whiteSpace='nowrap' fontSize='12px'>bath, body and personal care for all</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Info
